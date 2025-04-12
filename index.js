const menuBtn= document.querySelector('.menu-btn');
const navlinks= document.querySelector('.navbar-content');

menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})