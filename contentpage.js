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


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('header, nav, main, footer, section, article');

    function revealElements() {
        sections.forEach(function(section) {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.getBoundingClientRect().height;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - sectionHeight / 4) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', revealElements);
    revealElements(); 
});


  