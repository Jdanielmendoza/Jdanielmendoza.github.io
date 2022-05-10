document.querySelector(".hamb").addEventListener("click",desplegar);

var men=document.querySelector(".menu"); 

function desplegar(){
    men.classList.toggle("menu-desplegar");
}