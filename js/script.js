const mobile = document.getElementById('mobile');
const nav = document.getElementById('nav');

function AcionaMenu(){

    nav.classList.toggle('active');
}

mobile.addEventListener('click', AcionaMenu);