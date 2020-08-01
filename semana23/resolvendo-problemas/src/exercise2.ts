/* 
Implemente um método que performe uma compressão de string usando a contagem dos caracteres repetidos em sequência. Caso o resultado final tamanho maior do que a string inicial, seu programa deve retornar a string inicial.
*/

export const stringCompression = (input: string): string => {
  const substrings: string[] = [];
  let lastChar = input[0];
  let charCount = 0;

  for (const char of input) {
    if (char !== lastChar) {
      substrings.push(lastChar + charCount);
      lastChar = char;
      charCount = 0;
    }
    charCount++;
  }

  substrings.push(lastChar + charCount);
  let result = "";
  for (const key of substrings) {
    result += key;
  }

  return result.length > input.length ? input : result;
};
