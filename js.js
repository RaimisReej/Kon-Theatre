const btn = document.querySelector('.visit-btn');
const cont = document.querySelector('.visit-show');
const arrow = document.querySelector('.first');
const menuBtn = document.querySelector('.slide-menu');
const menu = document.querySelector('.toggle-menu');


 btn.addEventListener('click', ()=> {
     cont.classList.toggle('show')
    arrow.classList.toggle('rotate')
 })

 menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('showT')
 })