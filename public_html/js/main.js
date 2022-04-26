/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let ubicacionPrincipal= window.pageYOffset;
AOS.init();
window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }
    else{
        document.getElementsByTagName("nav")[0].style.top= "-100px"
    }
    
    ubicacionPrincipal = desplazamientoActual;
});

/*menu*/

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;
document.querySelectorAll(".hamburguer")[0].addEventListener("click",function(){
    if(semaforo)
    {
        document.querySelectorAll(".hamburguer")[0].style.color="#fff";
        semaforo = false;
    }
    else
    {
        document.querySelectorAll(".hamburguer")[0].style.color="#000";
        semaforo = true;
    }
    enlacesHeader.classList.toggle("menudos")
});

let check = document.querySelector(".check");
check.addEventListener("click",idioma);

function idioma(){
    let id =check.checked;
    if(id == true){
        location.href="en/index.html";
    }
    else{
        location.href="../index.html";
    }
}
