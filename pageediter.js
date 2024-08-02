
let menuvar=document.querySelector('.ri-menu-line');
let navigationvar=document.querySelector('.navigationvar');

    menuvar.addEventListener('click', function() {
    navigationvar.classList.toggle('open');
    });

const links = document.querySelectorAll('.navigationvar a');

    links.forEach(function(link,index) {
    link.style.animation = `slideIn 0.5s forwards ${index * 0.4}s`;
    });

document.addEventListener('DOMContentLoaded', function () {
const header = document.querySelector('header');

    function handleScroll() {
    if (window.scrollY > 50) { 
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);
});

