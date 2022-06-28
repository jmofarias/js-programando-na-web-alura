var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    // função que previne um comportamento padrão, para usar ela tem que usar o event como parâmetro da função
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    console.log(erros);
    if(erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);    

    // limpando os campos do formulário depois de ter adicionado os elementos na tabela
    form.reset();

    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = criaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    // innerHTML: permite controlar o html interno de um elemento, nesse caso toda vez que eu exibir as mensagens de erro eu vou apagar as anteriores e exibir as novas
    ul.innerHTML = "";
    // forEach: para cada item do meu array você irá fazer alguma coisa
    // erro: nome dado para fazer referência ao elemento atual
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){
    // criando um objeto que vai receber as propriedades/características em comum que o paciente tem
    var paciente = {
        // .value: vai pegar o valor do elemento
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}


function criaTr(paciente){
        // createElement: vai criar um elemento ou tag html
        var pacienteTr = document.createElement("tr");

        // criando uma classe para esse elemento tr
        pacienteTr.classList.add("paciente");
    
        // .appendChild: coloca como filho alguma tag, nesse caso ele está colocando a função criaTd que retorna uma td como filho de pacienteTr que é uma tr
        pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));
    
        return pacienteTr;
}


function criaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


function validaPaciente(paciente){

    // criando um array para adicionar os erros que vão ser mostrados no html
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    // como o if só teria uma linha dentro do laço eu posso colocar tudo em uma linha só no JavaScript
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    return erros;
}