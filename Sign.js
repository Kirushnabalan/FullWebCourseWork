let menuvar=document.querySelector('.ri-menu-line');
let navigationvar=document.querySelector('.navigationvar');

menuvar.addEventListener('click', function() {
    navigationvar.classList.toggle('open');
});

const links = document.querySelectorAll('.navigationvar a');

links.forEach(function(link,index) {
    link.style.animation = `slideIn 0.5s forwards ${index * 0.4}s`;
});

document.querySelector('.register-link').addEventListener('click', function () {
    document.querySelector('.form-box').style.display = 'none';
    document.querySelector('.form-box_register').style.display = 'block';
});

document.querySelectorAll('.login').forEach(function (element) {
    element.addEventListener('click', function () {
        document.querySelector('.form-box_register').style.display = 'none';
        document.querySelector('.form-box').style.display = 'block';
    });
});
