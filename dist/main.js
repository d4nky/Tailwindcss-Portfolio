document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



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

const headerTitle = document.getElementById('header-title');
const mobileMenu = document.getElementById('mobile-menu');
const btn = document.getElementById('mobile-button');
const content = document.getElementById('content');

let menuToggle = false;

mobileMenu.style.right = '-600px';

function menuOpen(){
    if (menuToggle == false){
        mobileMenu.style.right = '0px';
        menuToggle = true;
    }
    else if (menuToggle == true){
        mobileMenu.style.right = '-600px';
        menuToggle = false;
    }
}

function menuClose(){
    mobileMenu.style.right = '-600px';
}


btn.onclick = menuOpen;
content.onclick = menuClose;