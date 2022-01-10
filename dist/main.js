document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




const headerTitle = document.getElementById('header-title');
const mobileMenu = document.querySelector('#mobile-menu');
const btn = document.querySelector('#mobile-button');
const content = document.getElementById('content');

const mobileNavBar = document.getElementById('mobile-navbar')
const navbar = document.querySelector('nav');
const navbarActive = document.getElementById('navbar');
const offsetY = 50;

window.addEventListener('scroll', (e) =>{
    console.log(window.pageYOffset)
    if (window.pageYOffset > offsetY){
        navbar.style.backgroundColor = 'black';
        navbar.style.paddingTop = '38px';
        navbar.style.paddingBottom = '38px';
    }
    else if(window.pageYOffset < offsetY){
        navbar.style.backgroundColor = 'transparent';
        navbar.style.paddingTop = '32px';
        navbar.style.paddingBottom = '32px';
    }
});

let menuToggle = false;

mobileMenu.style.right = '-600px';

btn.addEventListener('click', (e) =>{
    if (menuToggle == false){
        mobileMenu.style.right = '0px';
        headerTitle.style.marginLeft = '-600px';
        btn.style.marginRight = '47.5%';
        mobileNavBar.style.backgroundColor = 'transparent'
        menuToggle = true;
    }
    else if (menuToggle == true){
        mobileMenu.style.right = '-600px';
        headerTitle.style.marginLeft = '0px';
        btn.style.marginRight = '0px';
        mobileNavBar.style.backgroundColor = 'black'
        menuToggle = false;
    }
});

// function menuClose(){
//     mobileMenu.style.right = '-600px';
// }

