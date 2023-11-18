//NAVIGATION

let bar = document.querySelector('.bars'),
navItem = document.querySelector('.nav-items');

bar.addEventListener('click', () => {
    navItem.classList.toggle('active');
});

// PARALAX

let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);

// MOONS

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let mountains_front = document.getElementById('mountains_front');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
});

//common reveal options to create reveal animations

ScrollReveal({ 
    // reset: true,
    distance:'60px',
    duration: 2500,
    delay:400
});

//target elements, and specify options to create reveal animations

ScrollReveal().reveal('.main-title, .section-title', { delay: 500, origin:'left' });
ScrollReveal().reveal('.sec-01 .imagemoon, .info', { delay: 600, origin:'bottom' });
ScrollReveal().reveal('.text-box', { delay: 700, origin:'right' });
ScrollReveal().reveal('.media-icons i', { delay: 500, origin:'bottom', interval: 200 });
ScrollReveal().reveal('.sec-02 .imagemoon, .sec-03 .imagemoon', { delay: 500, origin:'top'});
ScrollReveal().reveal('.media-info li', { delay: 500, origin:'left', interval: 200 });