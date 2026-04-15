type TimeTravelerElements = {
	root: HTMLElement;
	triggerButton: HTMLButtonElement;
	toggle: HTMLInputElement;
	intensity: HTMLInputElement;
	eraLabel: HTMLElement;
};

const STORAGE_MODE_KEY = 'cheat-time-traveler-mode';
const STORAGE_INTENSITY_KEY = 'cheat-time-traveler-intensity';
const ROOT_ATTR = 'data-time-travel-era';
const INTENSITY_VAR = '--retro-intensity';

const readLocalStorage = (key: string, fallback: string) => {
	try {
		return localStorage.getItem(key) ?? fallback;
	} catch {
		return fallback;
	}
};

const writeLocalStorage = (key: string, value: string) => {
	try {
		localStorage.setItem(key, value);
	} catch {
		// Ignore storage failures in restricted browser modes.
	}
};

const getElements = (): TimeTravelerElements | null => {
	const root = document.getElementById('cheat-time-traveler') as HTMLElement | null;
	const triggerButton = document.getElementById('cheat-open-time-traveler') as HTMLButtonElement | null;
	const toggle = document.getElementById('time-traveler-toggle') as HTMLInputElement | null;
	const intensity = document.getElementById('time-traveler-intensity') as HTMLInputElement | null;
	const eraLabel = document.getElementById('time-traveler-era') as HTMLElement | null;

	if (!root || !triggerButton || !toggle || !intensity || !eraLabel) {
		return null;
	}

	return { root, triggerButton, toggle, intensity, eraLabel };
};

const applyMode = (enabled: boolean, eraLabel: HTMLElement) => {
	const html = document.documentElement;
	if (enabled) {
		html.setAttribute(ROOT_ATTR, 'retro');
		eraLabel.textContent = 'Retro';
	} else {
		html.removeAttribute(ROOT_ATTR);
		eraLabel.textContent = 'Modern';
	}
	writeLocalStorage(STORAGE_MODE_KEY, enabled ? 'retro' : 'modern');
};

const applyIntensity = (value: string) => {
	const safeValue = String(Math.max(0, Math.min(100, Number(value) || 0)));
	document.documentElement.style.setProperty(INTENSITY_VAR, safeValue);
	writeLocalStorage(STORAGE_INTENSITY_KEY, safeValue);
};

export const initTimeTravelerCheat = () => {
	const elements = getElements();
	if (!elements) return;
	if (elements.root.dataset.ready === 'true') return;

	elements.root.dataset.ready = 'true';

	const savedMode = readLocalStorage(STORAGE_MODE_KEY, 'modern') === 'retro';
	const savedIntensity = readLocalStorage(STORAGE_INTENSITY_KEY, '70');

	elements.toggle.checked = savedMode;
	elements.intensity.value = savedIntensity;
	applyMode(savedMode, elements.eraLabel);
	applyIntensity(savedIntensity);

	elements.triggerButton.addEventListener('click', () => {
		elements.root.classList.toggle('is-open');
		elements.root.setAttribute('aria-hidden', String(!elements.root.classList.contains('is-open')));
	});

	elements.toggle.addEventListener('change', () => {
		applyMode(elements.toggle.checked, elements.eraLabel);
	});

	elements.intensity.addEventListener('input', () => {
		applyIntensity(elements.intensity.value);
	});
};
