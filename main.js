const menuBtn =  document.querySelector('.menu-btn');
const mobNav =  document.querySelector('.mobile-nav');
const homeBtn =  document.querySelector('.home-btn');
const aboutBtn =  document.querySelector('.about-btn');
const serviceBtn =  document.querySelector('.service-btn');
const contactBtn =  document.querySelector('.contact-btn');

let menuOpen = false;
let mobNavOpen = false;
let homeBtnOpen = true;
let aboutBtnOpen = true;
let serviceBtnOpen = true;
let contactBtnOpen = true;

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open'); 
        mobNav.classList.add('open');
        menuOpen = true;

    } else {
        menuBtn.classList.remove('open');
        mobNav.classList.remove('open');
        menuOpen = false;
    }
});

homeBtn.addEventListener('click', () => {
    if(!homeBtnOpen){
        menuBtn.classList.remove('open'); 
        mobNav.classList.remove('open');
        homeBtnOpen = true;

    } else {
        menuBtn.classList.remove('open');
        mobNav.classList.remove('open');
        menuOpen = false;
    }
});

aboutBtn.addEventListener('click', () => {
    if(!aboutBtnOpen){
        menuBtn.classList.remove('open'); 
        mobNav.classList.remove('open');
        aboutBtnOpen = true;

    } else {
        menuBtn.classList.remove('open');
        mobNav.classList.remove('open');
        menuOpen = false;
    }
});

serviceBtn.addEventListener('click', () => {
    if(!serviceBtnOpen){
        menuBtn.classList.remove('open'); 
        mobNav.classList.remove('open');
        serviceBtnOpen = true;

    } else {
        menuBtn.classList.remove('open');
        mobNav.classList.remove('open');
        menuOpen = false;
    }
});

contactBtn.addEventListener('click', () => {
    if(!contactBtnOpen){
        menuBtn.classList.remove('open'); 
        mobNav.classList.remove('open');
        contactBtnOpen = true;

    } else {
        menuBtn.classList.remove('open');
        mobNav.classList.remove('open');
        menuOpen = false;
    }
});