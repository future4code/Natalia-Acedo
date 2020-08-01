/*  
EXERCÍCIO 3. Escreva uma função recursiva que consiga imprimir todos os elementos de um array.
*/

const printArray = (arr: number[], i: number = arr.length - 1) => {
  if (i >= 0) {
    printArray(arr, i - 1);
    console.log(arr[i]);
  }
};


printArray([2, 5])