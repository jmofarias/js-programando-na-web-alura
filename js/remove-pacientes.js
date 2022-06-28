// acessando todos os pacientes
// var pacientes = document.querySelectorAll(".paciente");

// para todos os pacientes executar um evento de escuta de duplo click e rodar uma função que remove o paciente
// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("Fui clicado com um duplo click");
//         // this: faz referência ao elemento atual, nesse caso o elemento que está escutando o evento e foi clicado, o this é o dono do evento
//         this.remove();
//     })
// })

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    // setTimeout: função de tempo do JS que segura uma funcionalidade por um determinado tempo
    setTimeout(function(){
        // target: alvo do que foi clicado, vai ser exatamente o elemento que foi clicado
        // parentNode: pega o pai do elemento que foi clicado
        event.target.parentNode.remove();
    },500);
});


// .tagName: guarda uma string com o nome da tag do elemento