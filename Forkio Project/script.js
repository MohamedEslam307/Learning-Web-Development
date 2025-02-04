
// Toggle mobile navigation
const hamburger = document.querySelector('.hamburger');
const navOptions = document.querySelector('.nav-options');

hamburger.addEventListener('click', () => {
    navOptions.classList.toggle('active');
});