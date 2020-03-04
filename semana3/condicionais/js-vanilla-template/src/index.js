//Exercícios de INTERPRETAÇÃO 
/*
//EXERCÍCIO 1

const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos, a mensagem é "Não passou no teste"?
//Esse código verifica se o número digitado pelo usuário é par (o resto da divisão por 2 é igual a zero) ou ímpar (o resto da divisão por 2 é diferente de 0). Caso, os números sejam pares será impresso no console "passou no teste", caso sejam ímpares será impresso "não passou no teste".



//EXERCÍCIO 2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a. Para que serve o código acima?
//O código serve para verificar o preço de acordo com a fruta escolhida pelo usuário. 

//b. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//O preço da fruta Maçã é R$ 2.25

//c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
//Pagaria R$ 24,55

//d. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do deafult (o break indicado pelo comentário "BREAK PARA O ITEM d.")?
//O preço da fruta Pêra é R$ 5


//EXERCÍCIO 3

const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)

//Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.
//Não será impressa nenhuma mensagem no terminal, pois haverá um erro. Este erro ocorre porque os valores das variáveis mensagem nos escopos filhos não são acessados pelo "console.log(mensagem)", que está fora do bloco e possui escopo diferente. 
*/


/*
//Exercícios de ESCRITA
//a. Crie um programa que receba dois números do usuário através do prompt e imprima-os na ordem decrescente. O que acontece com o seu programa se os 2 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)
//O console imprime a primeira condição. 

const primeiroNumero = Number(prompt("Digite um número: "))
const segundoNumero = Number(prompt("Digite outro número: "))

if (primeiroNumero > segundoNumero) {
  console.log("Ordem decrescente: " + primeiroNumero + " ; " + segundoNumero)
} else {
  console.log("Ordem decrescente: " + segundoNumero + " ; " + primeiroNumero)
}


//b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem decrescente. O que acontece como seu programa se os 3 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)
//o console não imprimiu nenhuma mensagem

//c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente.

const num1 = Number(prompt("Digite um número"))
const num2 = Number(prompt("Digite outro número"))
const num3 = Number(prompt("Digite mais um número"))

if ((num1 > num2) && (num2 > num3)) {
  console.log("Ordem decrescente: " + num1 + " ; " + num2 + " ; " + num3)
} else if ((num1 > num3) && (num3 > num2)){
  console.log("Ordem decrescente: " + num1 + " ; " + num3 + " ; " + num2)
} else if ((num2 > num1) && (num1 > num3)){
  console.log("Ordem decrescente: " + num2 + " ; " + num1 + " ; " + num3)
} else if ((num2 > num3) && (num3 > num1)){
  console.log("Ordem decrescente: " + num2 + " ; " + num3 + " ; " + num1)
} else if ((num3 > num1) && (num1 > num2)){
  console.log("Ordem decrescente: " + num3 + " ; " + num1 + " ; " + num2)
} else if ((num3 > num2) && (num2 > num1)){
  console.log("Ordem decrescente: " + num3 + " ; " + num2 + " ; " + num1)
} else if((num1 === num2) && (num2 === num3)) {
  alert("Insira ao menos um número diferente")
}
*/

//EXERCÍCIO 5

//a. https://drive.google.com/open?id=1GyDSUB0QLuUJy8RbaTbzO5mFJqcxhR_1


//b . Escreva um programa que realize estas perguntas  e indique a classificação final considerada. As opções são: ser humano; mamífero não humano; ave; réptil; anfíbio; peixe ou é invertebrado 


let vertebras = prompt("O animal tem vértebras? (s/n)")

if (vertebras === "s") {
    //Vertebrados
    let pelos = prompt("Tem pelos? (s/n)") 
    if (pelos === "s") {
      let racional = prompt("É racional? (s/n)")
       //Humano
      if (racional === "s") {
      alert("É ser humano.")
      }else {
        alert ("É um mamífero não humano.")
      }

    // NÃO mamíferos
    } else { 
    let penas = prompt ("Tem penas? (s/n)")

    //Ave
    if (penas === "s") {
      alert ("É uma ave.")
    } else {
      let terrestre = prompt ("É terrestre? (s/n)")
      if (terrestre === "s"){
        let ambAquatico = prompt ("Passa parte da vida em ambiente aquático? (s/n)")
        if (ambAquatico === "s") {
          alert("É um anfíbio")
        } else {
          alert("É um réptil")
        }
      } else {
        alert("É peixe.")
      }
    }
    }
} else { 
  alert("É invertebrado.")
}
