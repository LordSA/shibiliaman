type NodeRef = {
	element: HTMLElement;
	tags: Set<string>;
};

type InspectElements = {
	root: HTMLElement;
	triggerButton: HTMLButtonElement;
	toggle: HTMLInputElement;
	refreshButton: HTMLButtonElement;
	status: HTMLElement;
};

type InspectState = {
	overlay: SVGSVGElement;
	active: boolean;
	framePending: boolean;
	highlighted: HTMLElement[];
	onUpdateRequest: () => void;
	onScroll: () => void;
	onResize: () => void;
};

const SKILL_SELECTOR = '[data-logic-skill]';
const PROJECT_SELECTOR = '[data-logic-project]';
const MAX_CONNECTIONS = 24;

let state: InspectState | null = null;

const tokenize = (value: string | null) => {
	if (!value) return new Set<string>();
	return new Set(
		value
			.toLowerCase()
			.split(/[^a-z0-9]+/)
			.map((token) => token.trim())
			.filter((token) => token.length > 1),
	);
};

const parseNode = (element: HTMLElement, attr: string): NodeRef => {
	const rawTags = element.getAttribute(attr) ?? '';
	return { element, tags: tokenize(rawTags) };
};

const getElements = (): InspectElements | null => {
	const root = document.getElementById('cheat-inspect-logic') as HTMLElement | null;
	const triggerButton = document.getElementById('cheat-open-inspect-logic') as HTMLButtonElement | null;
	const toggle = document.getElementById('inspect-logic-toggle') as HTMLInputElement | null;
	const refreshButton = document.getElementById('inspect-logic-refresh') as HTMLButtonElement | null;
	const status = document.getElementById('inspect-logic-status') as HTMLElement | null;

	if (!root || !triggerButton || !toggle || !refreshButton || !status) {
		return null;
	}

	return { root, triggerButton, toggle, refreshButton, status };
};

const setStatus = (status: HTMLElement, active: boolean) => {
	status.textContent = active ? 'On' : 'Off';
	status.classList.toggle('is-active', active);
};

const ensureOverlay = (): SVGSVGElement => {
	let overlay = document.getElementById('inspect-logic-overlay') as SVGSVGElement | null;
	if (overlay) return overlay;

	overlay = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	overlay.id = 'inspect-logic-overlay';
	overlay.classList.add('inspect-logic-overlay');
	overlay.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
	overlay.setAttribute('preserveAspectRatio', 'none');
	document.body.appendChild(overlay);
	return overlay;
};

const cleanupHighlights = (currentState: InspectState) => {
	for (const node of currentState.highlighted) {
		node.classList.remove('node-highlight');
	}
	currentState.highlighted = [];
};

const curvePath = (fromX: number, fromY: number, toX: number, toY: number) => {
	const bend = Math.max(40, Math.abs(toX - fromX) * 0.32);
	const c1x = fromX + bend;
	const c1y = fromY;
	const c2x = toX - bend;
	const c2y = toY;
	return `M ${fromX} ${fromY} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${toX} ${toY}`;
};

const getCenter = (element: HTMLElement) => {
	const rect = element.getBoundingClientRect();
	return {
		x: rect.left + rect.width / 2,
		y: rect.top + rect.height / 2,
		visible: rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < window.innerHeight,
	};
};

const sharedTagCount = (a: Set<string>, b: Set<string>) => {
	let count = 0;
	for (const token of a) {
		if (b.has(token)) count += 1;
	}
	return count;
};

const drawGraph = (currentState: InspectState) => {
	const { overlay } = currentState;
	overlay.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
	overlay.replaceChildren();
	cleanupHighlights(currentState);

	const skills = Array.from(document.querySelectorAll<HTMLElement>(SKILL_SELECTOR)).map((node) => parseNode(node, 'data-logic-skill'));
	const projects = Array.from(document.querySelectorAll<HTMLElement>(PROJECT_SELECTOR)).map((node) => parseNode(node, 'data-logic-project'));

	let lineCount = 0;

	for (const skill of skills) {
		if (lineCount >= MAX_CONNECTIONS) break;
		const skillCenter = getCenter(skill.element);
		if (!skillCenter.visible) continue;

		const matches = projects
			.map((project) => ({ project, score: sharedTagCount(skill.tags, project.tags) }))
			.filter((item) => item.score > 0)
			.sort((a, b) => b.score - a.score)
			.slice(0, 3);

		for (const match of matches) {
			if (lineCount >= MAX_CONNECTIONS) break;
			const targetCenter = getCenter(match.project.element);
			if (!targetCenter.visible) continue;

			const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			const hue = 140 + (lineCount % 6) * 18;
			path.setAttribute('stroke', `hsla(${hue}, 90%, 66%, 0.92)`);
			path.setAttribute('d', curvePath(skillCenter.x, skillCenter.y, targetCenter.x, targetCenter.y));
			overlay.appendChild(path);

			skill.element.classList.add('node-highlight');
			match.project.element.classList.add('node-highlight');
			currentState.highlighted.push(skill.element, match.project.element);
			lineCount += 1;
		}
	}
};

const requestDraw = (currentState: InspectState) => {
	if (!currentState.active || currentState.framePending) return;
	currentState.framePending = true;
	requestAnimationFrame(() => {
		currentState.framePending = false;
		if (!currentState.active) return;
		drawGraph(currentState);
	});
};

const enableInspect = (elements: InspectElements) => {
	if (!state) {
		const overlay = ensureOverlay();
		state = {
			overlay,
			active: false,
			framePending: false,
			highlighted: [],
			onUpdateRequest: () => {
				if (state) requestDraw(state);
			},
			onScroll: () => {
				if (state) requestDraw(state);
			},
			onResize: () => {
				if (state) requestDraw(state);
			},
		};
	}

	state.active = true;
	state.overlay.classList.add('is-active');
	setStatus(elements.status, true);

	window.addEventListener('scroll', state.onScroll, { passive: true });
	window.addEventListener('resize', state.onResize, { passive: true });
	document.addEventListener('astro:after-swap', state.onUpdateRequest);
	requestDraw(state);
};

const disableInspect = (elements: InspectElements) => {
	if (!state) {
		setStatus(elements.status, false);
		return;
	}

	state.active = false;
	state.overlay.classList.remove('is-active');
	state.overlay.replaceChildren();
	cleanupHighlights(state);
	setStatus(elements.status, false);

	window.removeEventListener('scroll', state.onScroll);
	window.removeEventListener('resize', state.onResize);
	document.removeEventListener('astro:after-swap', state.onUpdateRequest);
};

export const initInspectLogicCheat = () => {
	const elements = getElements();
	if (!elements) return;
	if (elements.root.dataset.ready === 'true') return;

	elements.root.dataset.ready = 'true';
	setStatus(elements.status, false);

	elements.triggerButton.addEventListener('click', () => {
		elements.root.classList.toggle('is-open');
		elements.root.setAttribute('aria-hidden', String(!elements.root.classList.contains('is-open')));
	});

	elements.toggle.addEventListener('change', () => {
		if (elements.toggle.checked) {
			enableInspect(elements);
			return;
		}
		disableInspect(elements);
	});

	elements.refreshButton.addEventListener('click', () => {
		if (!state?.active) return;
		requestDraw(state);
	});
};

export const destroyInspectLogicCheat = () => {
	const status = document.getElementById('inspect-logic-status') as HTMLElement | null;
	const toggle = document.getElementById('inspect-logic-toggle') as HTMLInputElement | null;
	const root = document.getElementById('cheat-inspect-logic') as HTMLElement | null;

	if (toggle) toggle.checked = false;
	if (root) {
		root.classList.remove('is-open');
		root.setAttribute('aria-hidden', 'true');
	}

	if (state) {
		state.active = false;
		state.overlay.classList.remove('is-active');
		state.overlay.replaceChildren();
		cleanupHighlights(state);
		window.removeEventListener('scroll', state.onScroll);
		window.removeEventListener('resize', state.onResize);
		document.removeEventListener('astro:after-swap', state.onUpdateRequest);
	}

	if (status) {
		setStatus(status, false);
	}
};
