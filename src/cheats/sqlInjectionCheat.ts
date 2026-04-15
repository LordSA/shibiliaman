type SqlElements = {
	root: HTMLElement;
	triggerButton: HTMLButtonElement;
	status: HTMLElement;
	output: HTMLElement;
	form: HTMLFormElement;
	input: HTMLInputElement;
};

const MAX_LINES = 100;
const SECRET_QUERY = /^select\s+\*\s+from\s+secret_projects\s*;?$/i;

let cleanupController: AbortController | null = null;

const getElements = (): SqlElements | null => {
	const root = document.getElementById('cheat-sql-sim') as HTMLElement | null;
	const triggerButton = document.getElementById('cheat-open-sql-sim') as HTMLButtonElement | null;
	const status = document.getElementById('sql-cheat-status') as HTMLElement | null;
	const output = document.getElementById('sql-cheat-output') as HTMLElement | null;
	const form = document.getElementById('sql-cheat-form') as HTMLFormElement | null;
	const input = document.getElementById('sql-cheat-input') as HTMLInputElement | null;

	if (!root || !triggerButton || !status || !output || !form || !input) {
		return null;
	}

	return { root, triggerButton, status, output, form, input };
};

const appendOutput = (output: HTMLElement, text: string, tone?: 'success' | 'error') => {
	const line = document.createElement('p');
	line.className = 'sql-cheat-line';
	if (tone === 'success') line.classList.add('is-success');
	if (tone === 'error') line.classList.add('is-error');
	line.textContent = text;
	output.appendChild(line);

	while (output.childElementCount > MAX_LINES) {
		output.removeChild(output.firstElementChild as Element);
	}

	output.scrollTop = output.scrollHeight;
};

const setUnlocked = (status: HTMLElement, unlocked: boolean) => {
	status.textContent = unlocked ? 'Unlocked' : 'Locked';
	status.classList.toggle('is-open', unlocked);
};

const setVaultVisible = (visible: boolean) => {
	const vault = document.getElementById('secret-projects-vault');
	if (!vault) return;
	vault.classList.toggle('is-open', visible);
	vault.setAttribute('aria-hidden', String(!visible));
	if (visible) {
		vault.removeAttribute('inert');
	} else {
		vault.setAttribute('inert', '');
	}
};

const runQuery = (query: string, elements: SqlElements) => {
	appendOutput(elements.output, `sql> ${query}`);

	if (SECRET_QUERY.test(query.trim())) {
		setUnlocked(elements.status, true);
		setVaultVisible(true);
		appendOutput(elements.output, 'Query accepted. secret_projects table opened.', 'success');

		const vault = document.getElementById('secret-projects-vault');
		if (vault) {
			vault.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
		return;
	}

	if (/drop\s+table|delete\s+from|truncate\s+/i.test(query)) {
		appendOutput(elements.output, 'Permission denied. Mutation queries are blocked in sandbox.', 'error');
		return;
	}

	if (/select/i.test(query)) {
		appendOutput(elements.output, '0 rows returned. Try the exact target table name.', 'error');
		return;
	}

	appendOutput(elements.output, 'Syntax error near input. Hint: try a SELECT query.', 'error');
};

export const initSqlInjectionCheat = () => {
	const elements = getElements();
	if (!elements) return;

	cleanupController?.abort();
	cleanupController = new AbortController();
	const { signal } = cleanupController;

	setUnlocked(elements.status, false);
	setVaultVisible(false);

	elements.triggerButton.addEventListener('click', () => {
		elements.root.classList.toggle('is-open');
		elements.root.setAttribute('aria-hidden', String(!elements.root.classList.contains('is-open')));
		if (elements.root.classList.contains('is-open')) {
			elements.input.focus();
		}
	}, { signal });

	elements.form.addEventListener('submit', (event) => {
		event.preventDefault();
		const query = elements.input.value.trim();
		elements.input.value = '';
		if (!query) {
			appendOutput(elements.output, 'Enter a SQL query first.', 'error');
			return;
		}
		runQuery(query, elements);
	}, { signal });
};

export const destroySqlInjectionCheat = () => {
	cleanupController?.abort();
	cleanupController = null;
};
