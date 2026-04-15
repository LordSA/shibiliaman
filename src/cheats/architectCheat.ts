type ArchitectElements = {
	root: HTMLElement;
	triggerButton: HTMLButtonElement;
	status: HTMLElement;
	toggle: HTMLInputElement;
	panel: HTMLElement;
	primary: HTMLInputElement;
	radius: HTMLInputElement;
	scale: HTMLInputElement;
	space: HTMLInputElement;
	copyButton: HTMLButtonElement;
	resetButton: HTMLButtonElement;
	copyStatus: HTMLElement;
};

const DEFAULTS = {
	primaryHue: 198,
	radius: 16,
	fontScale: 100,
	spaceScale: 100,
} as const;

const ROOT_ATTR = 'data-architect';
let cleanupController: AbortController | null = null;

const getElements = (): ArchitectElements | null => {
	const root = document.getElementById('cheat-architect') as HTMLElement | null;
	const triggerButton = document.getElementById('cheat-open-architect') as HTMLButtonElement | null;
	const status = document.getElementById('architect-status') as HTMLElement | null;
	const toggle = document.getElementById('architect-toggle') as HTMLInputElement | null;
	const panel = document.getElementById('architect-panel') as HTMLElement | null;
	const primary = document.getElementById('architect-primary') as HTMLInputElement | null;
	const radius = document.getElementById('architect-radius') as HTMLInputElement | null;
	const scale = document.getElementById('architect-scale') as HTMLInputElement | null;
	const space = document.getElementById('architect-space') as HTMLInputElement | null;
	const copyButton = document.getElementById('architect-copy') as HTMLButtonElement | null;
	const resetButton = document.getElementById('architect-reset') as HTMLButtonElement | null;
	const copyStatus = document.getElementById('architect-copy-status') as HTMLElement | null;

	if (!root || !triggerButton || !status || !toggle || !panel || !primary || !radius || !scale || !space || !copyButton || !resetButton || !copyStatus) {
		return null;
	}

	return { root, triggerButton, status, toggle, panel, primary, radius, scale, space, copyButton, resetButton, copyStatus };
};

const setStatus = (status: HTMLElement, active: boolean) => {
	status.textContent = active ? 'Active' : 'Disabled';
	status.classList.toggle('is-active', active);
};

const applyValues = (values: { primaryHue: number; radius: number; fontScale: number; spaceScale: number }) => {
	const html = document.documentElement;
	html.style.setProperty('--architect-primary-hue', String(values.primaryHue));
	html.style.setProperty('--architect-radius', `${values.radius}px`);
	html.style.setProperty('--architect-font-scale', `${values.fontScale}%`);
	html.style.setProperty('--architect-space-scale', `${values.spaceScale}%`);
};

const resetTheme = (elements: ArchitectElements) => {
	elements.primary.value = String(DEFAULTS.primaryHue);
	elements.radius.value = String(DEFAULTS.radius);
	elements.scale.value = String(DEFAULTS.fontScale);
	elements.space.value = String(DEFAULTS.spaceScale);
	applyValues(DEFAULTS);
};

const getCurrentTheme = (elements: ArchitectElements) => ({
	primaryHue: Number(elements.primary.value),
	radius: Number(elements.radius.value),
	fontScale: Number(elements.scale.value),
	spaceScale: Number(elements.space.value),
});

export const initArchitectCheat = () => {
	const elements = getElements();
	if (!elements) return;

	cleanupController?.abort();
	cleanupController = new AbortController();
	const { signal } = cleanupController;

	setStatus(elements.status, false);
	resetTheme(elements);
	elements.panel.classList.remove('is-open');
	elements.panel.setAttribute('aria-hidden', 'true');
	document.documentElement.removeAttribute(ROOT_ATTR);
	elements.copyStatus.textContent = '';

	elements.triggerButton.addEventListener('click', () => {
		elements.root.classList.toggle('is-open');
		elements.root.setAttribute('aria-hidden', String(!elements.root.classList.contains('is-open')));
	}, { signal });

	elements.toggle.addEventListener('change', () => {
		const active = elements.toggle.checked;
		setStatus(elements.status, active);
		elements.panel.classList.toggle('is-open', active);
		elements.panel.setAttribute('aria-hidden', String(!active));
		document.documentElement.setAttribute(ROOT_ATTR, active ? 'on' : 'off');
		if (!active) {
			resetTheme(elements);
		}
	}, { signal });

	const onLiveUpdate = () => {
		if (!elements.toggle.checked) return;
		applyValues(getCurrentTheme(elements));
	};

	elements.primary.addEventListener('input', onLiveUpdate, { signal });
	elements.radius.addEventListener('input', onLiveUpdate, { signal });
	elements.scale.addEventListener('input', onLiveUpdate, { signal });
	elements.space.addEventListener('input', onLiveUpdate, { signal });

	elements.copyButton.addEventListener('click', async () => {
		const payload = {
			mode: 'architect-theme',
			...getCurrentTheme(elements),
		};
		try {
			await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
			elements.copyStatus.textContent = 'Theme JSON copied.';
		} catch {
			elements.copyStatus.textContent = 'Copy failed. Clipboard permission denied.';
		}
	}, { signal });

	elements.resetButton.addEventListener('click', () => {
		resetTheme(elements);
		elements.copyStatus.textContent = 'Theme reset to defaults.';
	}, { signal });
};

export const destroyArchitectCheat = () => {
	cleanupController?.abort();
	cleanupController = null;
	document.documentElement.removeAttribute(ROOT_ATTR);
	applyValues(DEFAULTS);
};
