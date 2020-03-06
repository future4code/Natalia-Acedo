//NÃO MEXER
/**
 * NÃO MEXAM NESTE AQUIVO EM HIPÓTESE ALGUMA
 */

function comprarCarta() {
   // Cria array de cartas
   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
 
   // Cria array de naipes
   const naipes = ["♦️", "♥️", "♣️", "♠️"]
 
   // Sorteia uma carta
   const numero = cartas[Math.floor(Math.random() * 13)]
 
   // Sorteia um naipe
   const naipe = naipes[Math.floor(Math.random() * 4)]
 
   let valor
 
   // Verifica se é uma das letras e coloca o valor correspondente na variável valor
   if (numero === "A") {
     valor = 11
   } else if (numero === "J" || numero === "Q" || numero === "K") {
     valor = 10
   } else { // Se nao for uma das letras, só converte a string para número
     valor = Number(numero)
   }
 
   // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
   const carta = {
     texto: numero + naipe,
     valor: valor
   }
 
   return carta
 }
 
/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")
 let novoJogo = confirm("Quer iniciar uma nova rodada?")


 if(novoJogo === true) {
    let carta = [comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta()]

    //cartas iniciais usuário e computador
    let cartaUsuario = [carta[0].texto, carta[1].texto]
    let usuarioValor = (carta[0].valor + carta[1].valor)
    let cartaComputador = [carta[2].texto, carta[3].texto]
    let computadorValor = (carta[2].valor + carta[3].valor)


    while((cartaUsuario[0]=== "A" && cartaUsuario[1] === "A") || (cartaComputador[2]=== "A" && cartaComputador[3] === "A")) {
      let carta = [comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta()]
      let cartaUsuario = [carta[0].valor, carta[1].valor]
      let cartaComputador = [carta[2].texto, carta[3].texto]
      console.log(cartaUsuario)
      console.log(cartaComputador)
    } 

    let novaCarta = confirm("Sua pontuação é " + usuarioValor + ". Suas cartas são " + cartaUsuario + ". A carta revelada do computador é " + cartaComputador[0] + "." + "\n" + "Deseja comprar mais uma carta?")

/* Versão ANTES de ler o enunciado 11

    while (novaCarta === true && usuarioValor < 21 && computadorValor < 21) {
       let novoSorteio = [comprarCarta(), comprarCarta()]
       cartaUsuario += novoSorteio[0].texto
       cartaComputador += novoSorteio[1].texto
       usuarioValor += novoSorteio[0].valor
       computadorValor +=novoSorteio[1].valor
       let novaCarta = confirm("Sua pontuação é " + usuarioValor + ". Suas cartas são " + cartaUsuario + ". A carta revelada do computador é " + cartaComputador[0] + "." + "\n" + "Deseja comprar mais uma carta?")
    } 

    if (usuarioValor === computadorValor) {
      alert("Suas cartas são " + cartaUsuario + ". Sua pontuação é " + usuarioValor + "\n" + "As cartas do computador são " + cartaComputador + ". A pontuação do computador é " + computadorValor + "\n" + "Foi empate")
   } else if (computadorValor === 21) {
    alert("Suas cartas são " + cartaUsuario + ". Sua pontuação é " + usuarioValor + "\n" + "As cartas do computador são " + cartaComputador + ". A pontuação do computador é " + computadorValor + "\n" + "O computador ganhou")
   } else if  (usuarioValor === 21) {
    alert("Suas cartas são " + cartaUsuario + ". Sua pontuação é " + usuarioValor + "\n" + "As cartas do computador são " + cartaComputador + ". A pontuação do computador é " + computadorValor + "\n" + "Você ganhou")
   } else if  (usuarioValor < computadorValor) {
    alert("Suas cartas são " + cartaUsuario + ". Sua pontuação é " + usuarioValor + "\n" + "As cartas do computador são " + cartaComputador + ". A pontuação do computador é " + computadorValor + "\n" + "Você ganhou")
   } else {
    alert("Suas cartas são " + cartaUsuario + ". Sua pontuação é " + usuarioValor + "\n" + "As cartas do computador são " + cartaComputador + ". A pontuação do computador é " + computadorValor + "\n" + "O computador ganhou")
   }
*/

//Versão DEPOIS de ler o enunciado 11

  while (novaCarta === true && usuarioValor < 21) {
     let novoSorteio = comprarCarta()
     cartaUsuario += novoSorteio.texto
     usuarioValor += novoSorteio.valor
     let novaCarta = confirm("Sua pontuação é " + usuarioValor + ". Suas cartas são " + cartaUsuario + ". A carta revelada do computador é " + cartaComputador[0] + "." + "\n" + "Deseja comprar mais uma carta?")
  } 

  alert("Vez do computador")


  while (computadorValor < usuarioValor) {
    let novoSorteio = comprarCarta()
    cartaComputador += novoSorteio.texto
    computadorValor +=novoSorteio.valor
 } 

 if (usuarioValor === computadorValor) {
   alert("Suas cartas são " + cartaUsuario + ". Sua pontuação é " + usuarioValor + "\n" + "As cartas do computador são " + cartaComputador + ". A pontuação do computador é " + computadorValor + "\n" + "Foi empate")
} else if (usuarioValor > 21) {
 alert("Suas cartas são " + cartaUsuario + ". Sua pontuação é " + usuarioValor + "\n" + "As cartas do computador são " + cartaComputador + ". A pontuação do computador é " + computadorValor + "\n" + "O computador ganhou")
} else if  (computadorValor > 21 && usuarioValor < 21) {
 alert("Suas cartas são " + cartaUsuario + ". Sua pontuação é " + usuarioValor + "\n" + "As cartas do computador são " + cartaComputador + ". A pontuação do computador é " + computadorValor + "\n" + "Você ganhou")
}

} else {
  console.log("O jogo acabou.")
}
