var spanTexto = document.querySelector(".boas-vindas__maquina-de-escrever");
var texto = document.querySelector(".boas-vindas__maquina-de-escrever").textContent;
var textoSeparado = texto.split('')
var i = 0;

spanTexto.innerHTML = ""
window.onload = function(){

}

setTimeout(function(){
    var intervalo = setInterval(function(){
        spanTexto.innerHTML += textoSeparado[i]
        i++
        if(textoSeparado[i] == undefined){
            clearInterval(intervalo)
        }
    },150)
}, 1000)
