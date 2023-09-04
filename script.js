const header=document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY>200)
});
const sr=ScrollReveal(
    {
        distance:'40px',
        duration:2050,
        delay:100,
        reset:true
    }
);
sr.reveal('.home-text',{origin:'top'});
sr.reveal('.about-text',{origin:'bottom'});
sr.reveal('.about-img',{origin:'bottom'});
sr.reveal('.service',{origin:'bottom'});
sr.reveal('.contact',{origin:'bottom'});
sr.reveal('.in',{origin:'left'});
sr.reveal('.right-contact',{origin:'right'});
let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');
menu.onclick=()=>{
    menu.classList.toggle('fa-solid-x');
    navlist.classList.toggle('open');
}
window.onscroll=()=>{
    menu.classList.remove('fa-solid-x');
    navlist.classList.remove('open');
}
