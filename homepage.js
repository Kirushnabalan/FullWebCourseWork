let menuvar=document.querySelector('.ri-menu-line');
let navigationvar=document.querySelector('.navigationvar');

menuvar.addEventListener('click', function() {
    navigationvar.classList.toggle('open');
});

const links = document.querySelectorAll('.navigationvar a');

links.forEach(function(link,index) {
    link.style.animation = `slideIn 0.5s forwards ${index * 0.4}s`;
});

let next=document.querySelector('.next');
let prev=document.querySelector('.prev');
let slider=document.querySelector('.slider');

function nextItem(){
    let slides=document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
}

function prevItem(){
    let slides=document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length-1]);
}


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

