document.addEventListener('DOMContentLoaded', function (){
   document.querySelector('form').onsubmit= function () {
     const name =  document.querySelector('#fname').value;
     alert (`Thank you, ${name}, We will get back soon!`)
   }
})


const navMenu = document.getElementById("nav-menu"),
 toggleMenu = document.getElementById("toggle-menu"),
 closeMenu = document.getElementById("close-menu"),
 secondClose = document.getElementById("allbody")

toggleMenu.addEventListener('click',() => {
   navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click',() => {
    navMenu.classList.remove('show')
 })

 secondClose.addEventListener('click',() => {
    navMenu.classList.remove('show')
 })


let slides = document.querySelectorAll(".slide-container");
let index = 0;

//next function 

function next() {
    slides[index].classList.remove('acctive');
    index = (index + 1) % slides.length;
    slides[index].classList.add('acctive');
}

//previous function 
    function prev() {
        slides[index].classList.remove('acctive');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('acctive');
    }

    //autoplay

    setInterval(next, 7000);