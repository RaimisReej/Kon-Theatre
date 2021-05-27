/* side nav*/
const btn = document.querySelector('.visit-btn');
const cont = document.querySelector('.visit-show');
const arrow = document.querySelector('.first');
const menuBtn = document.querySelector('.slide-menu');
const menu = document.querySelector('.toggle-menu');
/* modal */
const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementsByClassName('closeBtn')[0];

/* burger close-open animation*/

menuBtn.addEventListener('click', navToggle);
function navToggle(e) {
    if(!e.target.classList.contains('active')){
    e.target.classList.add('active')
    gsap.to('.line1', 0.5, {rotate: '45deg', y: 4})
    gsap.to('.line2', 0, {display: 'none'})
    gsap.to('.line3', 0.5, {rotate: '-45deg', y: -4})
    
    } else {
    e.target.classList.remove('active')
    gsap.to('.line1', 0.5, {rotate: '0', y: 0})
    gsap.to('.line2', 0, {display: 'block'})
    gsap.to('.line3', 0.5, {rotate: '-0', y: 0})
    }
}
menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('showT')
 })
/* side nav arrow */
 btn.addEventListener('click', ()=> {
     cont.classList.toggle('show')
     arrow.classList.toggle('rotate')
 })

 /* modal open/exit */
 modalBtn.addEventListener('click', ()=> {
    modal.style.display = 'block';
 });

 closeBtn.addEventListener('click', ()=> {
    modal.style.display = 'none';
 });
 
/* outside exit click */
window.addEventListener('click', outsideClick);
function outsideClick(e) {
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

