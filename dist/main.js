document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
	});
});

const headerTitle = document.getElementById('header-title');
const mobileMenu = document.querySelector('#mobile-menu');
const btn = document.querySelector('#mobile-button');
const content = document.getElementById('content');

const mobileNavBar = document.getElementById('mobile-navbar');
const navbar = document.querySelector('nav');
const navbarActive = document.getElementById('navbar');
const offsetY = 50;

window.addEventListener('scroll', (e) => {
	console.log(window.pageYOffset);
	if (window.pageYOffset > offsetY) {
		navbar.style.backgroundColor = 'hsla(0, 0%, 0%, 0.500)';
		navbar.style.backdropFilter = 'blur(12px)';
		navbar.style.paddingTop = '34px';
		navbar.style.paddingBottom = '34px';
	} else if (window.pageYOffset < offsetY) {
		navbar.style.backgroundColor = 'transparent';
		navbar.style.paddingTop = '30px';
		navbar.style.paddingBottom = '30px';
	}
});

let menuToggle = false;

mobileMenu.style.right = '-600px';

btn.addEventListener('click', (e) => {
	if (menuToggle == false) {
		mobileMenu.style.right = '0px';
		headerTitle.style.marginLeft = '-600px';
		btn.style.marginRight = '47.5%';
		mobileNavBar.classList.remove('bg-opacity-30');
		mobileNavBar.classList.remove('bg-black');
		mobileNavBar.classList.remove('backdrop-blur-md');
		menuToggle = true;
	} else if (menuToggle == true) {
		mobileMenu.style.right = '-600px';
		headerTitle.style.marginLeft = '0px';
		mobileNavBar.classList.add('bg-opacity-30');
		mobileNavBar.classList.add('bg-black');
		mobileNavBar.classList.add('backdrop-blur-md');
		btn.style.marginRight = '0px';
		menuToggle = false;
	}
});
content.addEventListener('click', () => {
	mobileMenu.style.right = '-600px';
	headerTitle.style.marginLeft = '0px';
	btn.style.marginRight = '0px';
	mobileNavBar.classList.add('bg-opacity-30');
	mobileNavBar.classList.add('bg-black');
	mobileNavBar.classList.add('backdrop-blur-md');
	menuToggle = false;
});
