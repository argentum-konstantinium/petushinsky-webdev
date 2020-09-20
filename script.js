var btn = document.querySelector('#menu-btn');

btn.addEventListener('click', activeToggler);

function activeToggler() {
    this.classList.toggle('active');

    document.querySelector('.navigation-menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
};