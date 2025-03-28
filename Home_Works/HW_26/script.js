const navMenu = document.getElementById('navMenu');
const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const navMenuItems = document.querySelectorAll('.nav-menu-items');
const subMenu = document.querySelectorAll('.sub-menu');

const toggleMenu = () => {
    navMenu.classList.toggle('nav-menu-open');
    closeSubMenu();
}

function closeSubMenu() {
    subMenu.forEach(menu => {
        menu.classList.remove('active');
    })
}

openButton.addEventListener('click', (e) => {
    e.stopPropagation(); 
    toggleMenu();
});

closeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});


document.body.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && navMenu.classList.contains('nav-menu-open')) {
        navMenu.classList.remove('nav-menu-open');
    }
});


console.log(navMenuItems);
navMenuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        closeSubMenu();
        const subMenuNext = item.nextElementSibling;
        subMenuNext.classList.toggle('active');
    });
});





