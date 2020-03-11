function insereTarefa () {
    //variáveis do input
    const inputTarefa = document.getElementById("input-tarefa")
    const novaTarefa = inputTarefa.value

    //variáveis do select
    const seletorDiaSemana = document.getElementById("seletor-dia")
    const diaSemana = seletorDiaSemana.value

    if(novaTarefa === "" || novaTarefa === null) {
        alert("Digite um valor")
    } else {
        switch (diaSemana) {
            case "segunda":
            let listaSegunda = document.getElementById("segunda")
            listaSegunda.innerHTML += '<li  class="" onclick="riscarTarefa(event)">' + novaTarefa + '</li>'
            inputTarefa.value = ""
            break;
    
            case "terca":
            let listaTerca = document.getElementById("terca")
            listaTerca.innerHTML += '<li  class="" onclick="riscarTarefa(event)">' + novaTarefa + '</li>'
            inputTarefa.value = ""
            break;
    
            case "quarta":
            let listaQuarta = document.getElementById("quarta")
            listaQuarta.innerHTML += '<li  class="" onclick="riscarTarefa(event)">' + novaTarefa + '</li>'
            inputTarefa.value = ""
            break;
    
            case "quinta":
            let listaQuinta = document.getElementById("quinta")
            listaQuinta.innerHTML += '<li  class="" onclick="riscarTarefa(event)">' + novaTarefa + '</li>'
            inputTarefa.value = ""
            break;
    
            case "sexta":
            let listaSexta = document.getElementById("sexta")
            listaSexta.innerHTML += '<li  class="" onclick="riscarTarefa(event)">' + novaTarefa + '</li>'
            inputTarefa.value = ""
            break;
    
            case "sabado":
            let listaSabado = document.getElementById("sabado")
            listaSabado.innerHTML += '<li  class="" onclick="riscarTarefa(event)">' + novaTarefa + '</li>'
            inputTarefa.value = ""
            break;
    
            case "domingo":
            let listaDomingo = document.getElementById("domingo")
            listaDomingo.innerHTML += '<li  class="" onclick="riscarTarefa(event)">' + novaTarefa + '</li>'
            inputTarefa.value = ""
            break;
        }
    }
}

function riscarTarefa(event) {
    const riscar = event.target
    riscar.classList.toggle("feito") 
    console.log(riscar)
}

function apagarTarefas() {
  
}
