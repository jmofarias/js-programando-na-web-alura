// mostra um pop up
// alert("Olá Mundo!");
// mostra no console do navegador
console.log("Olá!");
// o document serve para acessar o meu html por completo
console.log(document);
// quetySelector: função para pegar tag, classe ou id do html
// o querySelector só vai pegar um elemento, ele vai retornar um objeto
var titulo = document.querySelector(".titulo");
// textContent: para pegar o conteudo do texto da tag
titulo.textContent = "Aparecida Nutricionista";
// querySelectorAll: para pegar mais de um elemento de uma classe por exemplo
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura")
    
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if (!pesoEhValido) {
        console.log("Peso inválido!")
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        // alterando estilo diretamente no JS
        paciente.style.color = "white";
        paciente.style.backgroundColor = "red";
    }
    
    if (!alturaEhValida) {
        console.log("Altura inválida!")
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        // classList: propriedade que retorna todas as classes e métodos daquele objeto
        // método add: permite adicionar uma nova classe naquele objeto, nesse caso usando essa classe para fazer referência ao arquivo css
        paciente.classList.add("paciente-invalido");
    }
    
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        // toFixed: limita as casas decimais
        tdImc.textContent = imc;
    }
}


function validaPeso(peso) {
    if(peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}


function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

// .addEventListener: evento do JS que vai esperar um click para executar a função
titulo.addEventListener("click", mostraMensagem);


function mostraMensagem() {
    console.log("Olá! Eu fui clicado!");
}



