 class despesa {
    constructor (gasto, tipo, descricao) {
        this.gasto = gasto,
        this.tipo = tipo,
        this.descricao = descricao
    }
}


//Função do BOTÃO ENVIAR CADASTRO

function enviarCadastro () {
    let gasto = document.getElementById("valor-gasto")
    let tipo = document.getElementById("seletor-tipo")
    let descricao = document.getElementById("descricao-gasto")

    if (gasto.value === "" ||
       gasto.value === null ||
       tipo.value === "" ||
       tipo.value === null ||
       descricao.value === "" ||
       descricao.value === null
       ) {
        alert("insira um valor")
    } else {

        const novaDespesa = new despesa (
            gasto.value,
            tipo.value,
            descricao.value
        )
        arrayGasto.push(gasto.value, tipo.value, descricao.value)

        gasto.value = ""
        tipo.value = ""
        descricao.value = ""
    }
}

let arrayGasto = []
console.log(arrayGasto)



function filtrarDespesas () {
    const divListaDespesas = document.getElementById("lista-despesas")

   arrayGasto.filter(
       (elemento, endex, array) =>
       {
           
       }
   )
}






