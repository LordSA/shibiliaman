import Matter from 'matter-js';

type ChaosElements = {
	root: HTMLElement;
	triggerButton: HTMLButtonElement;
	toggle: HTMLInputElement;
	resetButton: HTMLButtonElement;
	status: HTMLElement;
};

type ChaosItem = {
	element: HTMLElement;
	body: Matter.Body;
	baseTransform: string;
	baseTransition: string;
	baseWillChange: string;
	originX: number;
	originY: number;
};

type ChaosRuntime = {
	engine: Matter.Engine;
	runner: Matter.Runner;
	items: ChaosItem[];
	walls: Matter.Body[];
	activePointerId: number | null;
	draggingBody: Matter.Body | null;
	renderFrameId: number | null;
	onPointerDown: (event: PointerEvent) => void;
	onPointerMove: (event: PointerEvent) => void;
	onPointerUp: (event: PointerEvent) => void;
	onResize: () => void;
};

const ROOT_EXCLUDE_SELECTOR = '#cheat-menu-overlay, #cheat-chaos';
const ITEM_SELECTOR = [
	'main h1',
	'main h2',
	'main h3',
	'main p',
	'main a',
	'main button',
	'main li',
	'main article',
	'main [class*="card"]',
	'nav a',
].join(', ');

const MAX_BODIES = 70;
const MIN_AREA = 900;
const MAX_AREA = 180000;

let runtime: ChaosRuntime | null = null;

const getElements = (): ChaosElements | null => {
	const root = document.getElementById('cheat-chaos') as HTMLElement | null;
	const triggerButton = document.getElementById('cheat-open-chaos') as HTMLButtonElement | null;
	const toggle = document.getElementById('chaos-toggle') as HTMLInputElement | null;
	const resetButton = document.getElementById('chaos-reset') as HTMLButtonElement | null;
	const status = document.getElementById('chaos-cheat-status') as HTMLElement | null;

	if (!root || !triggerButton || !toggle || !resetButton || !status) {
		return null;
	}

	return { root, triggerButton, toggle, resetButton, status };
};

const createWalls = (width: number, height: number): Matter.Body[] => {
	const thickness = 80;
	const options: Matter.IBodyDefinition = { isStatic: true, restitution: 0.6, friction: 0.1 };
	return [
		Matter.Bodies.rectangle(width / 2, -thickness / 2, width + thickness * 2, thickness, options),
		Matter.Bodies.rectangle(width / 2, height + thickness / 2, width + thickness * 2, thickness, options),
		Matter.Bodies.rectangle(-thickness / 2, height / 2, thickness, height + thickness * 2, options),
		Matter.Bodies.rectangle(width + thickness / 2, height / 2, thickness, height + thickness * 2, options),
	];
};

const isEligible = (element: HTMLElement) => {
	if (element.closest(ROOT_EXCLUDE_SELECTOR)) return false;
	if (element.tagName.toLowerCase() === 'main') return false;
	const styles = window.getComputedStyle(element);
	if (styles.position === 'fixed' || styles.position === 'sticky') return false;
	const rect = element.getBoundingClientRect();
	const area = rect.width * rect.height;
	if (area < MIN_AREA || area > MAX_AREA) return false;
	if (rect.width < 20 || rect.height < 16) return false;
	if (rect.bottom < 0 || rect.top > window.innerHeight) return false;
	return true;
};

const buildItems = (engine: Matter.Engine): ChaosItem[] => {
	const allNodes = Array.from(document.querySelectorAll<HTMLElement>(ITEM_SELECTOR));
	const eligible = allNodes.filter(isEligible).slice(0, MAX_BODIES);

	const items: ChaosItem[] = [];
	for (const element of eligible) {
		const rect = element.getBoundingClientRect();
		const body = Matter.Bodies.rectangle(rect.left + rect.width / 2, rect.top + rect.height / 2, rect.width, rect.height, {
			restitution: 0.72,
			friction: 0.025,
			frictionAir: 0.015,
			density: 0.0016,
		});

		items.push({
			element,
			body,
			baseTransform: element.style.transform,
			baseTransition: element.style.transition,
			baseWillChange: element.style.willChange,
			originX: rect.left + rect.width / 2,
			originY: rect.top + rect.height / 2,
		});
	}

	Matter.Composite.add(engine.world, items.map((item) => item.body));
	return items;
};

const startRenderLoop = (state: ChaosRuntime) => {
	const loop = () => {
		for (const item of state.items) {
			const dx = item.body.position.x - item.originX;
			const dy = item.body.position.y - item.originY;
			item.element.style.transform = `${item.baseTransform} translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)`;
		}
		state.renderFrameId = requestAnimationFrame(loop);
	};
	state.renderFrameId = requestAnimationFrame(loop);
};

const stopRenderLoop = (state: ChaosRuntime) => {
	if (state.renderFrameId !== null) {
		cancelAnimationFrame(state.renderFrameId);
		state.renderFrameId = null;
	}
};

const restoreItems = (items: ChaosItem[]) => {
	for (const item of items) {
		item.element.style.transform = item.baseTransform;
		item.element.style.transition = item.baseTransition;
		item.element.style.willChange = item.baseWillChange;
	}
};

const findBodyAtPoint = (items: ChaosItem[], x: number, y: number) => {
	for (let index = items.length - 1; index >= 0; index -= 1) {
		const candidate = items[index].body;
		if (Matter.Bounds.contains(candidate.bounds, { x, y })) {
			return candidate;
		}
	}
	return null;
};

const setStatus = (status: HTMLElement | null, active: boolean) => {
	if (!status) return;
	status.textContent = active ? 'Active' : 'Disabled';
	status.classList.toggle('is-active', active);
};

const disableChaos = (status: HTMLElement | null) => {
	if (!runtime) {
		setStatus(status, false);
		return;
	}

	window.removeEventListener('pointerdown', runtime.onPointerDown);
	window.removeEventListener('pointermove', runtime.onPointerMove);
	window.removeEventListener('pointerup', runtime.onPointerUp);
	window.removeEventListener('pointercancel', runtime.onPointerUp);
	window.removeEventListener('resize', runtime.onResize);

	stopRenderLoop(runtime);
	Matter.Runner.stop(runtime.runner);
	Matter.Composite.clear(runtime.engine.world, false);
	Matter.Engine.clear(runtime.engine);

	restoreItems(runtime.items);
	document.documentElement.classList.remove('chaos-mode-active');
	setStatus(status, false);
	runtime = null;
};

const enableChaos = (status: HTMLElement) => {
	if (runtime) {
		setStatus(status, true);
		return;
	}

	const engine = Matter.Engine.create({ gravity: { x: 0, y: 0, scale: 0.001 } });
	const runner = Matter.Runner.create({ isFixed: false });
	const walls = createWalls(window.innerWidth, window.innerHeight);
	Matter.Composite.add(engine.world, walls);

	const items = buildItems(engine);
	if (!items.length) {
		setStatus(status, false);
		return;
	}

	for (const item of items) {
		item.element.style.willChange = 'transform';
		item.element.style.transition = 'none';
	}

	const state: ChaosRuntime = {
		engine,
		runner,
		items,
		walls,
		activePointerId: null,
		draggingBody: null,
		renderFrameId: null,
		onPointerDown: () => {},
		onPointerMove: () => {},
		onPointerUp: () => {},
		onResize: () => {},
	};

	state.onPointerDown = (event: PointerEvent) => {
		state.activePointerId = event.pointerId;
		state.draggingBody = findBodyAtPoint(state.items, event.clientX, event.clientY);
	};

	state.onPointerMove = (event: PointerEvent) => {
		if (state.activePointerId !== event.pointerId || !state.draggingBody) return;
		Matter.Body.setPosition(state.draggingBody, { x: event.clientX, y: event.clientY });
		Matter.Body.setVelocity(state.draggingBody, { x: 0, y: 0 });
	};

	state.onPointerUp = (event: PointerEvent) => {
		if (state.activePointerId !== event.pointerId) return;
		state.activePointerId = null;
		state.draggingBody = null;
	};

	state.onResize = () => {
		const replacementWalls = createWalls(window.innerWidth, window.innerHeight);
		Matter.Composite.remove(state.engine.world, state.walls);
		state.walls = replacementWalls;
		Matter.Composite.add(state.engine.world, replacementWalls);
	};

	window.addEventListener('pointerdown', state.onPointerDown, { passive: true });
	window.addEventListener('pointermove', state.onPointerMove, { passive: true });
	window.addEventListener('pointerup', state.onPointerUp, { passive: true });
	window.addEventListener('pointercancel', state.onPointerUp, { passive: true });
	window.addEventListener('resize', state.onResize, { passive: true });

	Matter.Runner.run(runner, engine);
	startRenderLoop(state);
	document.documentElement.classList.add('chaos-mode-active');
	setStatus(status, true);
	runtime = state;
};

export const initChaosCheat = () => {
	const elements = getElements();
	if (!elements) return;
	if (elements.root.dataset.ready === 'true') return;

	elements.root.dataset.ready = 'true';

	elements.triggerButton.addEventListener('click', () => {
		elements.root.classList.toggle('is-open');
		elements.root.setAttribute('aria-hidden', String(!elements.root.classList.contains('is-open')));
	});

	elements.toggle.addEventListener('change', () => {
		if (elements.toggle.checked) {
			enableChaos(elements.status);
			return;
		}
		disableChaos(elements.status);
	});

	elements.resetButton.addEventListener('click', () => {
		disableChaos(elements.status);
		elements.toggle.checked = false;
	});

	setStatus(elements.status, false);
};

export const destroyChaosCheat = () => {
	disableChaos(document.getElementById('chaos-cheat-status') as HTMLElement | null);
	const toggle = document.getElementById('chaos-toggle') as HTMLInputElement | null;
	if (toggle) {
		toggle.checked = false;
	}
};
