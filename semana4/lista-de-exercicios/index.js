//Exercícios de INTERPRETAÇÃO de código


//1 
//O console retornará quanto é o valor em reais de 100 dólares

//2
//console.log(novoMontante) imprimirá 165
//console.log(segundoMontante) imprimirá o alert("TIPO DE INVESTIMENTO INFORMADO INCORRETO")

//3
//console.log("Quantidade total de números", numeros.length) imprimirá "Quantidade total de números" e o comprimento do array numeros(14).
//console.log(array1.length) imprimirá o comprimento do array1, que o array com os números pares do array "numeros"
//console.log(array2.length) imprimirá o comprimento do array2, que o array com os números ímpares do array "numeros"

//4
//console.log(numero1) imprimirá o maior numero do array "numeros", no caso 283.
//console.log(numero2) imprimirá o menor número do array "numeros", ou seja, -10.



//Exercícios de LÓGICA de Programação


//1

/* const array = [0, 1, 2, 3]
const arrayPares = []

for(let i = 0; i < 10; i++) {
    if(i %2 === 0) {
        arrayPares.push(i)
      }
}

for(let item of array) {
    if(item %2 === 0) {
        arrayPares.push(item)
      }
} 

let i = 0
while (i < array.length) {
    i++
    if(i %2 === 0) {
        arrayPares.push(i)
      }
}

console.log(arrayPares) */


//2 
//a) false
//b) false 
//c) true 
//d) true
//e) true


//3
//O código não funciona porque não foi declarado valor para a variável quantidadeDeNumerosPares. O valor multiplicado por 2 dever ser a variável quantidadeDeNumerosPares. i teria que ser apenas < que quantidadeDeNumerosPares e não <=. Além disso faltou a verificação se i é par ou não. 

/* let numeroN = Number(prompt("Digite um número"))

const quantidadeDeNumerosPares = []

let i = 0
while(i < numeroN*2) {
  if (i %2 === 0){
      quantidadeDeNumerosPares.push(i)
  }
  i++
}
console.log(quantidadeDeNumerosPares)
 */


 //4

/*  function verificarTriangulos (a, b, c) {
   if (a === b && b === c) {
     console.log("É equilátero")
   } else if (a === b || b === c || a=== c) {
    console.log("É isósceles")
   } else if (a !== b && b !== c && a !== c) {
    console.log("É escaleno")
   }
 } */


 //5


 /* function verificarMaior (n1, n2) {
   if (n1 > n2 ) {
     console.log ("O maior é " + n1)
   } else if (n1 < n2 ){
    console.log ("O maior é " + n2)
   } else {
    console.log ("São iguais")
   }
 }

 function verificarDivisivel(n1, n2) {
  if (n1 % n2 === 0) {
    console.log (n1 + " é divisível por " + n2)
  } else {
    console.log (n1 + " não é divisível por " + n2)
  } 

  if (n2 % n1 === 0) {
    console.log (n2 + " é divisível por " + n1)
  } else {
    console.log (n2 + " não é divisível por " + n1)
  } 
}

function verificarDiferenca (n1, n2) {
  if (n1 > n2 ) {
    let resultado = n1 - n2
    console.log("A diferença entre eles ", resultado)
  } else if (n1 < n2 ){
    let resultado = n2 - n1
    console.log("A diferença entre eles ", resultado)
  } else {
   console.log ("São iguais")
  }
}

verificarMaior(15, 30)
verificarDivisivel(15,30)
verificarDiferenca(15, 30) */



//Exercícios de FUNÇÕES

//1



//2

/* const minhafuncao = () => {
  alert("Hello Future4")
}

minhafuncao() */



//Exercícios de Objetos

//1.
//Arrays são variáveis que possuem mais de um elemento, e eles são ordenados. Usamos quando queremos fazer uma lista de coisas. Por exemplo, lista de numeros, lista de strings, numeros pares, etc.
//Objetos também são variáveis, mas possuem mais dados(propriedades). Um objeto tem chaves e cada chave recebe um valor de qualquer tipo. Diferente do array, eles não são ordenados. Os objetos são usados quando queremos usar mais de uma vez uma mesma propriedade. 

//2 

function criaRetangulo (lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
  console.log(retangulo)
}

criaRetangulo(10, 20)
