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


 btn.addEventListener('click', ()=> {
     cont.classList.toggle('show')
     arrow.classList.toggle('rotate')
 })

 menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('showT')
 })

 modalBtn.addEventListener('click', ()=> {
    modal.style.display = 'block';
 });

 closeBtn.addEventListener('click', ()=> {
    modal.style.display = 'none';
 });
 
/* outside click */
window.addEventListener('click', outsideClick);
function outsideClick(e) {
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

