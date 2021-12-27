var informacoes = {
    'html': 'HTML: Abreviação para a expressão inglesa HyperText Markup Language, que significa: "Linguagem de Marcação de Hipertexto" é uma linguagem de marcação utilizada na construção de páginas na Web.',

    'css': 'CSS: Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.',

    'javaScript': 'JavaScript: É uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.',

    'bootstrap': 'Bootstrap: É um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.',

    'php': 'PHP: É uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web',

    'mysql': 'MYSQL:  É um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.',

    'git': 'GIT: É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo. ',

    'github': 'GitHub: É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.',

}


var tecnologias = document.querySelectorAll(".tecnologia")
var informacao = document.querySelector(".informacao")
tecnologias.forEach(function(tecnologia){   
    tecnologia.addEventListener("mouseenter", function(){

        informacao.textContent = informacoes[this.dataset.tecnologia]
        this.classList.add("sombra")
        this.classList.add("aumentarTamanho")
        this.classList.add("bordaClara")
    })
    tecnologia.addEventListener("mouseleave", function(){
        informacao.textContent = '*Passe o cursor no card para ler*'
        this.classList.remove("sombra")
        this.classList.remove("aumentarTamanho")
        this.classList.remove("bordaClara")
    })
})