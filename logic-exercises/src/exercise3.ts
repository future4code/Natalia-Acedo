/*  Exercício 3
a. Faça uma função que receba duas strings e devolva se elas são iguais, **considerando** se os caracteres estão em maiúsculo ou minúsculo. Ex.: deve retornar `true` para as entradas `escola` e `escola`; mas retornar `false` para `escola` e `Escola`

b. Faça uma função que receba duas strings e devolva se elas são iguais, **ignorando** se os caracteres estão em maiúsculo ou minúsculo. Ex.: deve retornar `true` para as entradas `escola` e `Escola` ou `escola` e `EsCoLA`

*/

// A)

function compareStrings(a: string, b: string): boolean {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

//console.log(compareStrings("escola", "escolA"));

// B)

function compareTwoStrings(a: string, b: string): boolean {
  if (a.toLowerCase() === b.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}


//console.log(compareTwoStrings("escola", "eScOlA"))


const verifyExistence = (input: any) => {
  return input !== undefined && input !== null;
};


console.log(verifyExistence("teste"))
console.log(verifyExistence(undefined))