const lists = document.querySelector('.slider .list');
const items = document.querySelectorAll('.slider .list .itemt');
const nuts = document.querySelectorAll('.slider .nuts li');

let active = 0;

const updateSlider = () => {
    const checkLeft = items[active].offsetLeft;
    lists.style.left = -checkLeft + 'px';
    updateNuts();
};

const updateNuts = () => {
    nuts.forEach((nut, index) => {
        nut.classList.toggle('active', index === active);
    });
};

const nextSlide = () => {
    active = (active + 1) % items.length;
    updateSlider();
};

const prevSlide = () => {
    active = (active - 1 + items.length) % items.length;
    updateSlider();
};


document.querySelector('.nuts').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        active = Array.from(nuts).indexOf(event.target);
        updateSlider();
    }
});
setInterval(nextSlide, 3000);

//toggle Navigation
function Menu() {
    var navLinks = document.getElementById("navLinks");
    var menuIcon = document.getElementById("menuIcon");

    if (navLinks.style.left === "-400px") {
        navLinks.style.left = "0";
        menuIcon.setAttribute("name", "close");
    } else {
        navLinks.style.left = "-400px";
        menuIcon.setAttribute("name", "menu");
    }
    return this;
}