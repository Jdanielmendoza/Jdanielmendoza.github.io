document.querySelector(".section1__image").addEventListener("click",desplegar); 
let menu=document.querySelector(".container-menu");
let hamb=document.querySelector(".section1__image");

function desplegar(){
    menu.classList.toggle("container-menu-active");
    hamb.classList.toggle("desactivate");
}