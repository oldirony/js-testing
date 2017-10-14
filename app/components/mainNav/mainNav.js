export default class MainNav {
	static selectors = {
		main: '[data-js-main-nav]',
		trigger: 'button',
		content: 'ul'
	};

	static classes = {
		isHidden: 'is-hidden',
	};

	static labels = {
		open: 'Open menu',
		close: 'Close menu',
	};

	constructor() {
		this.elem = document.querySelector(MainNav.selectors.main);
		this.trigger = this.elem.querySelector(MainNav.selectors.trigger);
		this.content = this.elem.querySelector(MainNav.selectors.content);
		this.isOpen = !this.elem.classList.contains(MainNav.classes.isHidden);

		this.setOpeningState();
		this.addListeners();
	}

	addListeners() {
		this.trigger.addEventListener('click', this.handleTriggerClick.bind(this))
	}

	handleTriggerClick(e) {
		e.preventDefault();

		this.setOpeningState();
	}

	setOpeningState() {
		this.isOpen
			? this.close()
			: this.open();
	}

	open() {
		this.content.classList.remove(MainNav.classes.isHidden);
		this.isOpen = true;
		this.updateTriggerText(MainNav.labels.close);
	}

	close() {
		this.content.classList.add(MainNav.classes.isHidden);
		this.isOpen = false;
		this.updateTriggerText(MainNav.labels.open);
	}

	updateTriggerText(newText) {
		this.trigger.innerText = newText;
	}
}