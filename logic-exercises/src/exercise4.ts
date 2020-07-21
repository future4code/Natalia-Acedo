/* 
EXERCÍCIO 4
a. Faça uma função que receba uma string e identifique se ela só possui números. Deve retornar false se possuir qualquer outro tipo de caracter; e true, se só possuir números.
*/

//a)

function verifyNumbers(input: any): boolean {

   return isNaN(input);
}


console.log(verifyNumbers("sferfer"))//true
console.log(verifyNumbers("-123.4"))//false