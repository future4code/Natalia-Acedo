/*  
EXERCÍCIO 2. Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n
*/

const calculateSum = (n: number, aux: number = 0): number => {
  if (n === 0) {
    return aux;
  }

  return calculateSum(n - 1, aux + n);
};

console.log(calculateSum(2));