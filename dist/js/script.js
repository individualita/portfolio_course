const burgerButton = document.querySelector('.burger');
const menuButton = document.querySelector ('.menu');
const closeElem = document.querySelector ('.menu__close');

burgerButton.addEventListener('click', function() {
    menuButton.classList.toggle('active');
});

closeElem.addEventListener('click', function() {
    menuButton.classList.toggle('active');
});

