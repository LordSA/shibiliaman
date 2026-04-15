type MutationUndo = () => void;

type TerminalElements = {
	root: HTMLElement;
	output: HTMLElement;
	form: HTMLFormElement;
	input: HTMLInputElement;
	resetButton: HTMLButtonElement;
	hideButton: HTMLButtonElement;
	triggerButton: HTMLButtonElement;
};

type TerminalState = {
	selected: HTMLElement | null;
	history: string[];
	historyIndex: number;
	undos: MutationUndo[];
};

const MAX_OUTPUT_LINES = 120;

const HELP_TEXT = [
	'help                                         Show commands',
	'clear                                        Clear terminal output',
	'select <css-selector>                        Select a target element',
	'show                                         Print selected element summary',
	'text <value>                                 Replace selected text content',
	'html <value>                                 Replace selected innerHTML',
	'style <prop> <value>                         Set selected inline style',
	'attr <name> <value>                          Set selected attribute',
	'attr-remove <name>                           Remove selected attribute',
	'class add|remove|toggle <class-name>         Edit selected class list',
	'open <https://url>                           Open a URL in a new tab',
	'fetch <https://url>                          Fetch public endpoint preview',
	'reset                                        Revert all temporary edits',
	'exit                                         Hide terminal panel',
].join('\n');

const commandTokenizer = (raw: string): string[] => {
	const tokens: string[] = [];
	const tokenPattern = /"([^"]*)"|'([^']*)'|(\S+)/g;
	for (const match of raw.matchAll(tokenPattern)) {
		tokens.push(match[1] ?? match[2] ?? match[3]);
	}
	return tokens;
};

const getTerminalElements = (): TerminalElements | null => {
	const root = document.getElementById('cheat-terminal') as HTMLElement | null;
	const output = document.getElementById('cheat-terminal-output') as HTMLElement | null;
	const form = document.getElementById('cheat-terminal-form') as HTMLFormElement | null;
	const input = document.getElementById('cheat-terminal-input') as HTMLInputElement | null;
	const resetButton = document.getElementById('cheat-terminal-reset') as HTMLButtonElement | null;
	const hideButton = document.getElementById('cheat-terminal-hide') as HTMLButtonElement | null;
	const triggerButton = document.getElementById('cheat-open-terminal') as HTMLButtonElement | null;

	if (!root || !output || !form || !input || !resetButton || !hideButton || !triggerButton) {
		return null;
	}

	return { root, output, form, input, resetButton, hideButton, triggerButton };
};

const safeSelector = (element: HTMLElement | null): string => {
	if (!element) return 'none';
	const id = element.id ? `#${element.id}` : '';
	const className = element.className
		? `.${String(element.className)
			.trim()
			.split(/\s+/)
			.slice(0, 2)
			.join('.')}`
		: '';
	return `${element.tagName.toLowerCase()}${id}${className}`;
};

const appendOutput = (output: HTMLElement, text: string, tone?: 'error' | 'success') => {
	const line = document.createElement('p');
	line.className = 'cheat-terminal-line';
	if (tone === 'error') line.classList.add('is-error');
	if (tone === 'success') line.classList.add('is-success');
	line.textContent = text;
	output.appendChild(line);

	while (output.childElementCount > MAX_OUTPUT_LINES) {
		output.removeChild(output.firstElementChild as Element);
	}

	output.scrollTop = output.scrollHeight;
};

const clearOutput = (output: HTMLElement) => {
	output.replaceChildren();
};

const decodeHtmlEntities = (text: string) => {
	const parser = new DOMParser();
	return parser.parseFromString(text, 'text/html').documentElement.textContent ?? text;
};

const runCommand = async (rawCommand: string, elements: TerminalElements, state: TerminalState) => {
	const trimmed = rawCommand.trim();
	if (!trimmed) return;

	appendOutput(elements.output, `$ ${trimmed}`);
	state.history.push(trimmed);
	state.historyIndex = state.history.length;

	const [command, ...args] = commandTokenizer(trimmed);

	if (!command) return;

	if (command === 'help') {
		appendOutput(elements.output, HELP_TEXT);
		return;
	}

	if (command === 'clear') {
		clearOutput(elements.output);
		return;
	}

	if (command === 'exit') {
		elements.root.classList.remove('is-open');
		elements.root.setAttribute('aria-hidden', 'true');
		return;
	}

	if (command === 'reset') {
		for (let index = state.undos.length - 1; index >= 0; index -= 1) {
			state.undos[index]();
		}
		state.undos = [];
		state.selected = null;
		appendOutput(elements.output, 'All temporary edits reverted.', 'success');
		return;
	}

	if (command === 'select') {
		if (!args.length) {
			appendOutput(elements.output, 'Usage: select <css-selector>', 'error');
			return;
		}
		const query = args.join(' ');
		const element = document.querySelector<HTMLElement>(query);
		if (!element) {
			appendOutput(elements.output, `No match for selector: ${query}`, 'error');
			return;
		}
		state.selected = element;
		appendOutput(elements.output, `Selected ${safeSelector(element)}`, 'success');
		return;
	}

	if (command === 'show') {
		if (!state.selected) {
			appendOutput(elements.output, 'No element selected. Use select first.', 'error');
			return;
		}
		const summary = state.selected.outerHTML.slice(0, 420);
		appendOutput(elements.output, summary + (state.selected.outerHTML.length > 420 ? ' ...' : ''));
		return;
	}

	if (command === 'text') {
		if (!state.selected) {
			appendOutput(elements.output, 'No element selected. Use select first.', 'error');
			return;
		}
		const value = decodeHtmlEntities(args.join(' '));
		const previous = state.selected.textContent ?? '';
		state.selected.textContent = value;
		state.undos.push(() => {
			if (state.selected) {
				state.selected.textContent = previous;
			}
		});
		appendOutput(elements.output, `Updated text on ${safeSelector(state.selected)}`, 'success');
		return;
	}

	if (command === 'html') {
		if (!state.selected) {
			appendOutput(elements.output, 'No element selected. Use select first.', 'error');
			return;
		}
		const value = args.join(' ');
		const target = state.selected;
		const previous = target.innerHTML;
		target.innerHTML = value;
		state.undos.push(() => {
			target.innerHTML = previous;
		});
		appendOutput(elements.output, `Updated html on ${safeSelector(target)}`, 'success');
		return;
	}

	if (command === 'style') {
		if (!state.selected) {
			appendOutput(elements.output, 'No element selected. Use select first.', 'error');
			return;
		}
		if (args.length < 2) {
			appendOutput(elements.output, 'Usage: style <prop> <value>', 'error');
			return;
		}
		const [property, ...valueParts] = args;
		const target = state.selected;
		const previous = target.style.getPropertyValue(property);
		const priority = target.style.getPropertyPriority(property);
		target.style.setProperty(property, valueParts.join(' '));
		state.undos.push(() => {
			target.style.setProperty(property, previous, priority);
		});
		appendOutput(elements.output, `Set style ${property} on ${safeSelector(target)}`, 'success');
		return;
	}

	if (command === 'attr') {
		if (!state.selected) {
			appendOutput(elements.output, 'No element selected. Use select first.', 'error');
			return;
		}
		if (args.length < 2) {
			appendOutput(elements.output, 'Usage: attr <name> <value>', 'error');
			return;
		}
		const [name, ...valueParts] = args;
		const target = state.selected;
		const previous = target.getAttribute(name);
		target.setAttribute(name, valueParts.join(' '));
		state.undos.push(() => {
			if (previous === null) {
				target.removeAttribute(name);
			} else {
				target.setAttribute(name, previous);
			}
		});
		appendOutput(elements.output, `Attribute ${name} updated on ${safeSelector(target)}`, 'success');
		return;
	}

	if (command === 'attr-remove') {
		if (!state.selected) {
			appendOutput(elements.output, 'No element selected. Use select first.', 'error');
			return;
		}
		if (args.length !== 1) {
			appendOutput(elements.output, 'Usage: attr-remove <name>', 'error');
			return;
		}
		const [name] = args;
		const target = state.selected;
		const previous = target.getAttribute(name);
		target.removeAttribute(name);
		state.undos.push(() => {
			if (previous !== null) {
				target.setAttribute(name, previous);
			}
		});
		appendOutput(elements.output, `Removed ${name} from ${safeSelector(target)}`, 'success');
		return;
	}

	if (command === 'class') {
		if (!state.selected) {
			appendOutput(elements.output, 'No element selected. Use select first.', 'error');
			return;
		}
		if (args.length !== 2) {
			appendOutput(elements.output, 'Usage: class add|remove|toggle <class-name>', 'error');
			return;
		}
		const [operation, className] = args;
		const target = state.selected;
		const hadClass = target.classList.contains(className);

		if (operation === 'add') target.classList.add(className);
		else if (operation === 'remove') target.classList.remove(className);
		else if (operation === 'toggle') target.classList.toggle(className);
		else {
			appendOutput(elements.output, 'Use class add|remove|toggle', 'error');
			return;
		}

		state.undos.push(() => {
			if (hadClass) target.classList.add(className);
			else target.classList.remove(className);
		});
		appendOutput(elements.output, `Class updated on ${safeSelector(target)}`, 'success');
		return;
	}

	if (command === 'open') {
		const target = args[0];
		if (!target) {
			appendOutput(elements.output, 'Usage: open <https://url>', 'error');
			return;
		}
		if (!/^https?:\/\//i.test(target)) {
			appendOutput(elements.output, 'Only http/https URLs are allowed.', 'error');
			return;
		}
		window.open(target, '_blank', 'noopener,noreferrer');
		appendOutput(elements.output, `Opened ${target}`, 'success');
		return;
	}

	if (command === 'fetch') {
		const target = args[0];
		if (!target) {
			appendOutput(elements.output, 'Usage: fetch <https://url>', 'error');
			return;
		}
		if (!/^https?:\/\//i.test(target)) {
			appendOutput(elements.output, 'Only http/https URLs are allowed.', 'error');
			return;
		}
		appendOutput(elements.output, `Fetching ${target} ...`);
		try {
			const response = await fetch(target, { method: 'GET' });
			const text = await response.text();
			appendOutput(elements.output, `Status ${response.status} ${response.statusText}`);
			appendOutput(elements.output, text.slice(0, 360) + (text.length > 360 ? ' ...' : ''));
		} catch {
			appendOutput(elements.output, 'Request failed, likely due to CORS/network policy.', 'error');
		}
		return;
	}

	appendOutput(elements.output, `Unknown command: ${command}. Type help.`, 'error');
};

export const initTerminalCheat = () => {
	const elements = getTerminalElements();
	if (!elements) return;
	if (elements.root.dataset.ready === 'true') return;

	elements.root.dataset.ready = 'true';

	const state: TerminalState = {
		selected: null,
		history: [],
		historyIndex: 0,
		undos: [],
	};

	const showTerminal = () => {
		elements.root.classList.add('is-open');
		elements.root.setAttribute('aria-hidden', 'false');
		elements.input.focus();
		if (!elements.output.childElementCount) {
			appendOutput(elements.output, 'Terminal online. Type help for commands.');
			appendOutput(elements.output, 'Edits are temporary. Use reset to undo all changes.');
		}
	};

	elements.triggerButton.addEventListener('click', () => {
		showTerminal();
	});

	elements.hideButton.addEventListener('click', () => {
		elements.root.classList.remove('is-open');
		elements.root.setAttribute('aria-hidden', 'true');
	});

	elements.resetButton.addEventListener('click', () => {
		for (let index = state.undos.length - 1; index >= 0; index -= 1) {
			state.undos[index]();
		}
		state.undos = [];
		state.selected = null;
		appendOutput(elements.output, 'All temporary edits reverted.', 'success');
	});

	elements.form.addEventListener('submit', (event) => {
		event.preventDefault();
		const command = elements.input.value;
		elements.input.value = '';
		void runCommand(command, elements, state);
	});

	elements.input.addEventListener('keydown', (event) => {
		if (event.key === 'ArrowUp') {
			event.preventDefault();
			if (!state.history.length) return;
			state.historyIndex = Math.max(0, state.historyIndex - 1);
			elements.input.value = state.history[state.historyIndex] ?? '';
			return;
		}
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			if (!state.history.length) return;
			state.historyIndex = Math.min(state.history.length, state.historyIndex + 1);
			elements.input.value = state.history[state.historyIndex] ?? '';
		}
	});
};
