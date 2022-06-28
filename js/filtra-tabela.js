var campoFiltro = document.querySelector("#filtrar-tabela");

// input: evento que vai ouvir o que é digitado
campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    // pegando todos os pacientes para comparar com o filtro
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            // criando uma expressao regular, com new e usando o objeto RegExp, aí posso passar dentro desse objeto duas coisas, ([o que vc quer que ela busque], [como vc quer que ela busque]), o "i" serve para buscar tanto pelos caracteres maiusculo ou minisculo
            var expressao = new RegExp(this.value, "i"); 

            // .test: função para testar se no meu nome vai ter pelo menos uma parte do que tem na minha expressao
            // se não bater o caractere adiciono a classe css .invisivel, caso contrario eu removo
            if(!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }

    } else {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});