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

let menuvar = document.querySelector('.ri-menu-line');
let navigationvar = document.querySelector('.navigationvar');

menuvar.addEventListener('click', function() {
    menuvar.classList.toggle('bx-x');
    navigationvar.classList.toggle('open');
});

const links = document.querySelectorAll('.navigationvar a');

links.forEach(function(link, index) {
    link.style.animation = `slideIn 0.5s forwards ${index * 0.4}s`;
});

function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const firstVisit = document.querySelector('input[name="firstVisit"]:checked');
    const informative = document.querySelector('input[name="informative"]:checked');
    const updates = document.querySelector('input[name="updates"]:checked');

    const errors = document.querySelectorAll('.error');
    for (let i = 0; i < errors.length; i++) {
        errors[i].classList.remove('show');
    }

    if (!fname.value) {
        document.getElementById("fnameError").classList.add('show');
        isValid = false;
    }
    if (!lname.value) {
        document.getElementById("lnameError").classList.add('show');
        isValid = false;
    }
    if (!email.value || !validateEmail(email.value)) {
        document.getElementById("emailError").classList.add('show');
        isValid = false;
    }
    if (!firstVisit) {
        document.getElementById("visitError").classList.add('show');
        isValid = false;
    }
    if (!informative) {
        document.getElementById("infoError").classList.add('show');
        isValid = false;
    }
    if (!updates) {
        document.getElementById("updateError").classList.add('show');
        isValid = false;
    }

    if (isValid) {
        document.querySelector('.feedback-form').classList.add('hidden');
        document.getElementById("thankYouMessage").classList.remove('hidden');

        const feedbackData = `
            <p>First Name: ${fname.value}</p>
            <p>Last Name: ${lname.value}</p>
            <p>Email: ${email.value}</p>
            <p>First Visit: ${firstVisit.value}</p>
            <p>Informative: ${informative.value}</p>
            <p>Updates: ${updates.value}</p>
            <p>Improvement: ${document.querySelector('textarea[name="improvement"]').value}</p>
            <p>Questions: ${document.querySelector('textarea[name="questions"]').value}</p>
            <p>Rating: ${document.querySelector('.star.selected') ? document.querySelector('.star.selected').getAttribute('data-value') : stars().ratingValue}</p>
            <p>${"Thank you!!"}</p>
        `;

        document.getElementById("feedbackData").innerHTML = feedbackData;
    }

    return false;
}

function checkInput(input) {
    const errorSpan = document.getElementById(input.name + "Error");
    if (input.value) {
        errorSpan.classList.remove('show');
    } else {
        errorSpan.classList.add('show');
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

var stars = document.querySelectorAll('.star');
var ratingValueDiv = document.getElementById('ratingValue');
stars.forEach(function(star) {
    star.addEventListener('click', function() {
        stars.forEach(function(s) {
            s.classList.remove('selected');
        });

        star.classList.add('selected');
        var value = star.getAttribute('data-value');
        for (var i = 0; i < value; i++) {
            stars[i].classList.add('selected');
        }
        ratingValueDiv.textContent = 'Selected Rating: ' + value;
    });
});

