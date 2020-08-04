/* 
O objetivo desse challenge é te fazer pensar como um método que a gente usa bastante com strings: .indexOf. Escreva uma função que simule o seu comportamento (sem utilizar esse método na sua implementação), que receba uma string source e um caracter que se deseja encontrar nela query e devolva o index em que esse caracter aparece pela primeira vez
*/


/* const indexOfCharacter = (source: string, query: string): number => {
  for (let i = 0; i < source.length; i++) {
    if (source[i] === query) {
      return i;
    }
  }
};

console.log(indexOfCharacter("natalia", "a"));

 */

export const indexOf = (
  source: string,
  query: string,
  mainIndex: number = 0,
  sourceIndex: number = 0,
  queryIndex: number = 0
): number => {
  if (sourceIndex > source.length) {
    return -1;
  }

  if (queryIndex >= query.length) {
    return mainIndex;
  }

  if (source[sourceIndex] === query[queryIndex]) {
    return indexOf(source, query, mainIndex, sourceIndex + 1, queryIndex + 1);
  } else {
    return indexOf(source, query, mainIndex + 1, mainIndex + 1, 0);
  }
};

console.log(indexOf("natalia", "p"));
