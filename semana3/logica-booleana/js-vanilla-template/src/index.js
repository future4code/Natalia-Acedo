/* 

EXERCÍCIOS DE INTERPRETAÇÃO:


const bool1 = true
const bool2 = false
const bool3 = !bool2 // true

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
//a. false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
//b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
//c. true 


resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
//d. false 

console.log("e. ", typeof resultado)
//e. boolean


let array
console.log('I. ', array)
//I. undefined

array = null
console.log('II. ', array)
//II. null


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)
//III. 11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])
//IV. 3 e 4


array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)
//V. 19 e 9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])
//VI. 3

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)
//VII. 1


//a. O que é `array` e como se declara em `JS`?
//Array é um conjunto que guarda e acessa mais de uma informação. Se declara com [] 

//b. Qual o index inicial de um `array`?
//0

//c. Como se determinar o tamanho do `array`?
//array.length

//d. Indique todas as mensagens impressas no console.

*/


/*
EXERCICIOS DE ESCRITA

//Exercício 1
let fahrenheit = 77
let kelvin = (fahrenheit- 32)*5/9 + 273.15
console.log(kelvin) 

let celsius = 80
fahrenheit = (celsius)*9/5 + 32
console.log(fahrenheit)

celsius = 30
fahrenheit = (celsius)*9/5 + 32
console.log(fahrenheit)
kelvin = (fahrenheit- 32)*5/9 + 273.15
console.log(kelvin)


celsius = Number(prompt("Quantos graus Celsius?"))
fahrenheit = (celsius)*9/5 + 32
console.log(fahrenheit)
kelvin = (fahrenheit- 32)*5/9 + 273.15
console.log(kelvin)


// Exercício 2

const nome = prompt("Qual seu nome?")
console.log(nome)

const cidade = prompt("Em qual cidade você mora?")
console.log(cidade)

const idade = prompt("Quantos anos você tem?")
console.log(idade)


const pets = prompt("Você tem animais de estimação?")
console.log(pets)

const irmaos = prompt("Você tem irmãos?")
console.log(irmaos)
*/


/*
// Exercício 2

const kWh = 0.05
const salarioMinimo = 1045
let consumo = Number(prompt("Qual a quantidade de quilowatts consumida?"))

//exercício a
//consumo = kWh*consumo
//console.log(consumo)

//exercício b
console.log(consumo)
consumo = (kWh*consumo) - (kWh*consumo)*0.15
console.log(consumo)

*/


/*
// DESAFIOS

//a. converter libra em kg
let libra = 20
let quilograma = (libra)*0.453592
console.log("20lb equivalem a " + quilograma + "kg")


//b. converter onça em kg
let oz = 10.5
let quilograma = (oz)*0.0283495
console.log("10.5oz equivalem a " + quilograma + "kg")


//c. converter milha em metro
let milha = 100
let metro = (milha)*1609.34
console.log("100mi equivalem a " + metro + "m")


//d. converter pés em metro
let ft = 50
let metro = (ft)*0.3048
console.log("50ft equivalem a " + metro + "m")


//e. converter galão em litro
let gal = 103.56
let litro = (gal)*3.78541
console.log("103.56gal equivalem a " + litro + "l")


//f. converter xícara em litro
let xic = 450
let litro = (xic)/4
console.log("450xic equivalem a " + litro + "l")
*/


//g. converter xícara em litro
let xic = Number(prompt("Quantas xícaras gostaria de converter em litros?"))
let litro = (xic)/4
console.log(xic + " xic equivalem a " + litro + "l")
