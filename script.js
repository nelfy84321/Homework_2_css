const navbar = document.querySelector('navbar');
const burger = document.querySelector('.menu-btn');

// Function for showing navbar on res <768 and changing view of navbar icon(burger icon to cross)
function toActiveNav() {
    if (!navbar.classList.value) {
        navbar.classList.add('active');
        burger.classList.add('active-btn');
    } else {
        navbar.classList.remove('active');
        burger.classList.remove('active-btn');
    }
};

burger.onclick = toActiveNav;

