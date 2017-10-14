import MainNav from './mainNav';
describe('HTML elements missing', ()=> {
	beforeAll(()=>{
		document.body.innerHTML = `
		<div class="article"></div>
	`;
		const mainNav = new MainNav();
	});


	test('Main nav is initialised without errors', ()=>{
		expect(1).toBe(1);
	});
});


describe('HTML is correctly setup', ()=> {
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