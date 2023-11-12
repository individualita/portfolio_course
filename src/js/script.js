const burgerButton = document.querySelector('.burger');
const menuButton = document.querySelector ('.menu');
const closeElem = document.querySelector ('.menu__close');

burgerButton.addEventListener('click', function() {
    menuButton.classList.toggle('active');
});

closeElem.addEventListener('click', function() {
    menuButton.classList.toggle('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'); //чтобы обратиться ко всем элементам используем all
const lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
