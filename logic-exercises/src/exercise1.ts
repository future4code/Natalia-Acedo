/* 
Resolva os exercícios em arquivos typescript. Testes são bem-vindos.

a. Faça uma função que receba um `array` de números e devolva um objeto que contenha as informações: soma de todos os itens, quantidade de itens e multiplicação de todos os itens

b. Faça uma função que receba um `array` de números e devolve um objeto que contenha as informações: maior número e menor número
*/


//A)

const arrayNumbers: number[] = [-1, 2, 4, -2, 50, -20]

function sumAndMultiply (input: number[]): object{

    let sum = 0
    for(let number of input) {
        sum += number
    }

    const length = input.length

    let multiply = 1
    for(let number of input) {
        multiply *= number
    }

    return {sum, length, multiply}
}

console.log(sumAndMultiply(arrayNumbers))


//B)

function biggerAndSmallerNum(input: number[]): object {

    let bigger = -Infinity
    let smaller = Infinity

    for(let number of input){
        if(number > bigger) {
            bigger = number
        } else if(number < smaller){
            smaller = number
        }
    }

    return {bigger, smaller}

}

console.log(biggerAndSmallerNum(arrayNumbers))