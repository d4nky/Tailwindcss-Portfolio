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
const headerTitle = document.getElementById('header-title');
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
