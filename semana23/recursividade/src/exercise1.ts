/* 
EXERCÍCIO 1. Escreva uma função recursiva que:
a) Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente
*/

const printNumbersAscendingOrder = (n: number): void => {
  if (n >= 0) {
    printNumbersAscendingOrder(n - 1);
    console.log(n);
  }
};

printNumbersAscendingOrder(5);

/* 
b) Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente
*/

const printNumbersDescendingOrder = (n: number): void => {
  if (n >= 0) {
    console.log(n);
    printNumbersDescendingOrder(n - 1);
  }
};
