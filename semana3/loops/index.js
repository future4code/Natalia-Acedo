//Exercícios de INTERPRETAÇÃO 


/*
//EXERCÍCIO 1 (interpretação)

//O que o código abaixo está fazendo? Qual o resultado impresso no console?
//O código está somando à variável sum o valor de i toda vez que ele é executado. O resultado impresso no console é 105.

let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)


//EXERCÍCIO 2 (interpretação)
//a. O que o comando .push faz? 
//Adiciona um proximo número no array.
//b. Qual o valor impresso no console?
//[10, 15, 25, 30]
//c. Qual seria imprimido no console se a variável numero tivesse o valor de 3? E se tivesse o valor de 4?
//Imprimiria números divisíveis por 3 [12, 15, 18, 21, 27, 30], e números divisíveis por 4 [12]

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista){
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)
*/




//Exercícios de ESCRITA

//EXERCÍCIO 3
//a. Escreva um programa que devolva o maior e o menor números contidos no array original
/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = array [0]
let menor = array [0]

for(let i = 0; i < array.length; i++) {
  const elementoMaior = array[i]
  if (elementoMaior > maior) {
    maior = elementoMaior
  }
}
console.log(maior)

for(let i = 0; i < array.length; i++) {
  const elementoMenor = array [i]
  if (elementoMenor < menor) {
    menor =  elementoMenor
  }
}
console.log(menor)

//b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const array10 = []

for(let elemento of array) {
  elemento /= 10 
  array10.push(elemento)
}

console.log(array10)


//c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const arrayPares = []

for(let item of array) {
  if(item %2 === 0) {
    arrayPares.push(item)
  }
}

console.log(arrayPares)

//d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const arrayString = []

for(let i = 0; i < array.length; i++ ){
  let item = array[i]
  arrayString.push("O elemento " + i + " é " + item)
}

console.log(arrayString)

*/



//DESAFIOS


//DESAFIO 1 (interpretação)
//Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
/*
0
00
000
0000
*/
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
*/

//DESAFIO 2 (escrita) 
/*
const numeroPrimeiroJogador = Number(prompt("Escolha um número:"))
console.log("Vamos jogar!")

let numeroSegundoJogador = Number(prompt("Tente adivinhar!"))
console.log("O número chutado foi: " + numeroSegundoJogador)
let tentativas = []

while (numeroSegundoJogador !== numeroPrimeiroJogador) {
  if (numeroSegundoJogador > numeroPrimeiroJogador) {
    console.log("Errrrrrrrou, é menor")
  } else if (numeroSegundoJogador < numeroPrimeiroJogador){
    console.log("Errrrrrrrou, é maior")
  }
  numeroSegundoJogador = Number(prompt("Tente de novo!"))
  console.log("O número chutado foi: " + numeroSegundoJogador)
  tentativas.push(numeroSegundoJogador) 
}
const quantidadeTentativas = tentativas.length + 1
console.log("Acertou!!!")
console.log("O número de tentativas foi: " + quantidadeTentativas)
*/

//DESAFIO 3 (escrita) 

let numeroSorteio = Math.floor((Math.random() * 100) + 1);
console.log("Vamos jogar!")

let numeroJogador = Number(prompt("Tente adivinhar! Pode ser um número de 1 a 100"))
console.log("O número chutado foi: " + numeroJogador)
let tentativas = []


while (numeroJogador !== numeroSorteio) {
  if (numeroJogador > numeroSorteio) {
    console.log("Errrrrrrrou, é menor")
  } else if (numeroJogador < numeroSorteio){
    console.log("Errrrrrrrou, é maior")
  }
  numeroJogador = Number(prompt("Tente de novo!"))
  console.log("O número chutado foi: " + numeroJogador)
  tentativas.push(numeroJogador) 
}
const quantidadeTentativas = tentativas.length + 1
console.log("Acertou!!!")
console.log("O número de tentativas foi: " + quantidadeTentativas)