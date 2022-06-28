var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    // XMLHttpRequest: objeto do JS que faz requisições HTTP
    var xhr = new XMLHttpRequest();

    // open: função que abre a conexão com o endereço que queremos fazer, passando o tipo de requisição e o endereço
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacie34ntes");

    // evento para avisar ao xhr que quando a resposta estiver carregada, executar uma função
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            // responseText: pegando o texto da resposta
            var resposta = xhr.responseText;
            // converte um texto em JSON para um objetos JS
            var pacientes = JSON.parse(resposta);
    
            // para cada paciente, vou pegar ele e chamar a função para adicionar na tabela
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);

            erroAjax.classList.remove("invisivel");
        }
    });

    // técnica AJAX: fazer uma requisição com JS de modo assíncrono, sem parar o fluxo JS

    // pega a requisição que criamos e envia
    xhr.send();
});