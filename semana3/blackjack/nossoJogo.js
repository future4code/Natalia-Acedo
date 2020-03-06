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
 
// NÃO REMOVA ESTA LINHA

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
    console.log("vamos lá!")
    /* PRIMEIRA TENTATIVA
    const carta1 = comprarCarta()
    const carta2 = comprarCarta()
    const carta3 = comprarCarta()
    const carta4 = comprarCarta()
    const usuarioCarta = (carta1.texto) + " " + (carta2.texto)
    const usuarioValor = (carta1.valor) + (carta2.valor)
    const computadorCarta = (carta3.texto) + " " + (carta4.texto)
    const computadorValor = (carta3.valor) + (carta4.valor)
    console.log("Usuário - cartas: " + usuarioCarta + " - pontuação: " + usuarioValor)
    console.log("Computador - cartas: " + computadorCarta + " - pontuação: " + computadorValor)

    if (usuarioValor > computadorValor) {
       console.log("O usuário ganhou!")
    } else if (usuarioValor < computadorValor) {
       console.log("O computador ganhou!")
    } else {
       console.log("Empate!")
    }
    */

    // TENTATIVA DE REDUZIR O CÓDIGO
    const carta = [comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta()]
    const usuarioValor = (carta[0].valor + carta[1].valor)
    const computadorValor = (carta[2].valor + carta[3].valor)
    const cartaUsuario = "Usuário - cartas: " +  carta[0].texto + " " + carta[1].texto + " - pontuação: " + usuarioValor
    const cartaComputador = "Computador - cartas: " +  carta[2].texto + " " + carta[3].texto + " - pontuação: " + computadorValor
    console.log(cartaUsuario)
    console.log(cartaComputador)
    if (usuarioValor > computadorValor) {
      console.log("O usuário ganhou!")
   } else if (usuarioValor < computadorValor) {
      console.log("O computador ganhou!")
   } else {
      console.log("Empate!")
   }

 } else {
    console.log("O jogo acabou.")
 }
