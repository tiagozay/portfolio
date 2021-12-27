var links = document.querySelectorAll(".menu__link")
var btnAbrirMenu = document.querySelector(".btnAbrirMenu")
btnAbrirMenu.addEventListener("click", function(){
    links.forEach(function(link){
        link.classList.toggle("exibirLink")
    });
})