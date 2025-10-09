const hamburger = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav-bar ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
