import MainNav from './mainNav';

describe('With HTML elements missing', ()=> {
	test('It\'s initialised without errors', ()=>{
		// When the DOM doesn't contain the main element, we want this component to stop the construction
		// to avoid errors.
		document.body.innerHTML = '';
		new MainNav();
	});

	test('Returns an error if inner elements are missing', ()=>{
		// When the DOM contains the main element, but not some of the required childre, we want
		// the component to return an useful error message.
		document.body.innerHTML = '<div class="article" data-js-main-nav></div>';
		try {
			new MainNav();
		} catch(e) {
			expect(e.message).toEqual(MainNav.errors.noElements);
		}
	});
});


describe('On default scenarios', ()=> {
	let mainNav;

	beforeAll(()=>{
		// Add the basic html structure.
		document.body.innerHTML = `
		<div class="article" data-js-main-nav>
			<button data-main-nav-trigger></button>
			<ul data-main-nav-content>
				<li>1</li>
				<li>2</li>
			</ul>
		</div>
	`;
		// Create mainNav instance
		mainNav = new MainNav();
	});


	test('It\'s initialised without errors', ()=>{});

	test('Click on button changes button text', ()=>{
		// On first click
		mainNav.trigger.click();
		// we expect the button to have the 'close' label;
		expect(mainNav.trigger.innerText).toEqual(MainNav.labels.close);
		// On second click
		mainNav.trigger.click();
		// we expect the button to have the 'open' label
		expect(mainNav.trigger.innerText).toEqual(MainNav.labels.open);
	});

	test('Click on button changes content visibility', ()=>{
		// By default we expect the content to be hidden, hence to have the '.is-hidden' class;
		expect(mainNav.content.classList.contains(MainNav.classes.isHidden)).toBeTruthy();
		// On first click
		mainNav.trigger.click();
		// we expect the content to be visible
		expect(mainNav.content.classList.contains(MainNav.classes.isHidden)).toBeFalsy();
		// On second click
		mainNav.trigger.click();
		// we expect the content to be hidden again
		expect(mainNav.content.classList.contains(MainNav.classes.isHidden)).toBeTruthy();
	});
});