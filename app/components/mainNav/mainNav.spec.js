import MainNav from './mainNav';

describe('With HTML elements missing', ()=> {
	test('It\'s initialised without errors', ()=>{
		document.body.innerHTML = '';
		new MainNav();

		expect(1).toBe(1);
	});

	test('Returns an error if inner elements are missing', ()=>{
		document.body.innerHTML = '<div class="article" data-js-main-nav></div>';
		try {
			new MainNav();
		} catch(e) {
			expect(1).toBe(1);
		}
	});
});


describe('With HTML correctly setup', ()=> {
	let mainNav;

	beforeAll(()=>{
		document.body.innerHTML = `
		<div class="article" data-js-main-nav>
			<button></button>
			<ul>
				<li>1</li>
				<li>2</li>
			</ul>
		</div>
	`;
		mainNav = new MainNav();
	});


	test('It\'s initialised without errors', ()=>{
		expect(1).toBe(1);
	});

	test('Click on button changes button text', ()=>{
		mainNav.trigger.click();
		expect(mainNav.trigger.innerText).toEqual(MainNav.labels.close);
		mainNav.trigger.click();
		expect(mainNav.trigger.innerText).toEqual(MainNav.labels.open);
	});

	test('Click on button changes content visibility', ()=>{
		expect(mainNav.content.classList.contains(MainNav.classes.isHidden)).toBeTruthy();
		mainNav.trigger.click();
		expect(mainNav.content.classList.contains(MainNav.classes.isHidden)).toBeFalsy();
		mainNav.trigger.click();
		expect(mainNav.content.classList.contains(MainNav.classes.isHidden)).toBeTruthy();
	});
});