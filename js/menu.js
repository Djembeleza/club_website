// DOM Elements
const mainNav = document.getElementsByClassName('main-nav');
const openBtn = document.getElementsByClassName('open');
const closeBtn = document.getElementsByClassName('close');
const clubTitle = document.getElementsByClassName('club-title');



// Open The Menu then hide the openBtn
openBtn[0].addEventListener('click', function () {
    mainNav[0].style.width = '100vw';
    openBtn[0].style.display = 'none';
    clubTitle[0].style.position = 'absolute';
    // clubTitle[0].style.top = '-3rem';


});

closeBtn[0].addEventListener('click', function () {
    mainNav[0].style.width = '0';

    setTimeout(function () {
        openBtn[0].style.display = 'inline-block';
    }, 800);

});