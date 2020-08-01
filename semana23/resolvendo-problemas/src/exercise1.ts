/* 
Considere que a gente só possa fazer três operações com string: adicionar um caractere a ele, remover um caractere dele ou substituir um caractere por outro. Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma string é  'one edit' de outra.
*/

const verifyOneEdit = (source: string, comparision: string): boolean => {
  if (
    source.length > comparision.length + 1 ||
    source.length < comparision.length - 1
  ) {
    return false;
  }

  let communCharacterQuantity = 0;

  for (const character of comparision) {
    if (source.indexOf(character) !== -1) {
      communCharacterQuantity++;
    }
  }
  return (
    communCharacterQuantity <= source.length + 1 &&
    communCharacterQuantity >= source.length - 1
  );
};
