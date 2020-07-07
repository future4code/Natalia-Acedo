/* Exercício 2

a. Faça uma função que receba uma string e devolva um objeto com as informações: quantos caracteres a string possui, qual seu primeiro caracter e qual seu último caracter

b. Faça uma função que receba uma string e devolva um array com seus caracteres. Se o input for `escola`, a saída deve ser `[e, s, c, o, l, a]` */


// A)

function stringInfo (input: string): object {
    const stringLength = input.length
    const firstCharacter = input[0]
    const lastCharacter = input[stringLength - 1]

    return {stringLength, firstCharacter, lastCharacter}
}


// B)

function stringToArray (input: string): string[] {

    let stringArray = []

    for(let character of input){
        stringArray.push(character)
    }

    return stringArray
}

console.log(stringInfo("natalia"))

console.log(stringToArray("escola"))