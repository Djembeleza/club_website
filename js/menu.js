// DOM Elements
const mainNav = document.getElementsByClassName('main-nav');
const openBtn = document.getElementsByClassName('open');
const closeBtn = document.getElementsByClassName('close');



// Open The Menu then hide the openBtn
openBtn[0].addEventListener('click', function () {
    mainNav[0].style.width = '100vw';
    openBtn[0].style.display = 'none';

});

closeBtn[0].addEventListener('click', function () {
    mainNav[0].style.width = '0';
    setTimeout(function () {
        openBtn[0].style.display = 'inline-block';
    }, 800)

});