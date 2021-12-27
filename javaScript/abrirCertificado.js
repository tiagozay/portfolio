var imgsCertificados = document.querySelectorAll(".certificado")
imgsCertificados.forEach(function(img){
    img.addEventListener("click", function(){
        abrirImg(this.getAttribute('src'))
    })
})

var containerModal = document.querySelector(".containerModal")
function abrirImg(caminho){
    var credencial = event.target.dataset.credencial

    containerModal.innerHTML += `
        <a class="ulrCredencial" target='blank' href='${credencial}'>${credencial}</a>
        <div class='conteudo'>
            <div class="telaSuperiorImg">
                <button onclick="fecharModal()" class='material-icons btnFecharCertificado'>close</button>
            </div>
            <img src='${caminho}' class='imgGrandeCertificado'>
        </div>
   
    `


    // var divCobertura = document.createElement("div")
    // divCobertura.classList.add("telaSuperiorImg")
    // divCobertura.innerHTML = `
    //     <button onclick="fecharModal()" class='material-icons btnFecharCertificado'>close</button>
    // `

    // var img = document.createElement("img")
    // img.setAttribute("src", caminho)
    // img.classList.add("imgGrandeCertificado")


    // containerModal.appendChild(divCobertura)
    // containerModal.appendChild(img)

    containerModal.classList.add("abrirModal")

    var img = document.querySelector(".imgGrandeCertificado")
    var divCobertura = document.querySelector(".telaSuperiorImg")

    var alturaImagem = img.clientHeight;
    var larguraImagem = img.clientWidth;

    divCobertura.style.width = larguraImagem+"px";
    divCobertura.style.height = alturaImagem+"px";

    console.log(alturaImagem)
} 

containerModal.onclick = function(){
    if(event.target.classList[0] != 'telaSuperiorImg'){
        fecharModal()
    }

}

document.onkeydown = function(event){
    if(event.keyCode == 27){
        fecharModal();
    }
}

function fecharModal(){
    limparModal()
    containerModal.classList.remove("abrirModal")
}

function limparModal(){
    containerModal.innerHTML = ""
}