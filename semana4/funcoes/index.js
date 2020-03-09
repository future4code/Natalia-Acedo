//Exercícios de INTERPRETAÇÃO de código

/*
//EXERCÍCIO 1

const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}

//a. Indique qual será o resultado da função caso ela seja chamada como minhaFuncao(2)
//O resultado será um array vazio.

//b. Indique qual será o resultado da função caso ela seja chamada como minhaFuncao(5)
//[0,1, 0, 1, 2, 3]

//c. Indique qual será o resultado da função caso ela seja chamada como minhaFuncao(8)
//[0,1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]



//EXERCÍCIO 2


let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));

//a. Explicite quais são as saídas impressas no console
//0  2  undefined

//b. O código funcionaria se a lista fosse um array de números (ao invés de um array de string)  e o nome fosse um número, ao se chamar a função? Justifique sua resposta.
//Não funcionaria, porque o valor de i é um número e ao ser comparado com números aleatórios dificilmente serão iguais. Apenas daria certo se os número do array fossem [0, 1, 2, 3, 4]



//EXERCÍCIO 3

//O código abaixo mostra uma função que recebe um array e devolve outro array. Explique rapidamente o que ela faz e sugira um nome melhor para ela!

function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x; // 0+2=2; 2+3= 5
      resultadoB *= x;// 1*2=2; 2*3= 6
    }
  
    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
  }
 
 //Essa função recebe elementos em um primeiro array. Dentro da função há duas variáveis com valores numéricos e uma variavél que tem um segundo array sem elementos definidos. O "for" soma ou multiplica cada elemento do primeiro array ao valores das duas variáveis dentro da função. A função metodo retorna o arrayFinal com o valore novo do resultadoA e do resultadoB. Um nome para essa função poderia ser somarMultiplicarArray


 
//Exercícios de ESCRITA de código
//EXECÍCIO 4

//a. A função deve receber um número correspondente aos "anos humanos" que um cachorro tem e calcular a "idade de cachorro" dele. Considere que 1 ano humano equivale a 7 anos de cachorro

function calcularAnosHumanos (idadeCachorro) {
    let idadeHumana = idadeCachorro * 7

    return idadeHumana
}

let meuCachorro = calcularAnosHumanos(5)
console.log(meuCachorro)


//b.  Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), o endereço (string) e um boolean que representa se é estudante ou não. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

let nome = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade?")
let endereco = prompt("Qual seu endereço?")
let estudante = prompt("Você é estudante? (sim/não)")

function coletarInformacoes (nome, idade, endereco, estudante) {
    if (estudante) {
        return "Eu sou " + nome + ", tenho " + idade + " anos ,moro em " + endereco + " e sou estudante"
    } else {
        return "Eu sou " + nome + ", tenho " + idade + "anos , moro em " + endereco + " e não sou estudante"
    }
    }

    console.log(coletarInformacoes(nome, idade, endereco, estudante))
*/

//EXERCÍCIO 5

let ano = prompt("Qual ano você gostaria de descobrir o século?(Ano entre 1000dc até 2020dc)")

function determinarSeculo (ano){
    if (ano < 1101){
        return "O ano " + ano+ " pertence ao século X"
    } else if (ano > 1100 && ano < 1201){
        return "O ano " + ano+ " pertence ao século XI"
    } else if (ano > 1200 && ano < 1301){
        return "O ano " + ano+ " pertence ao século XII"
    }else if (ano > 1300 && ano < 1401){
        return "O ano " + ano+ " pertence ao século XIII"
    } else if (ano > 1400 && ano < 1501){
        return "O ano " + ano+ " pertence ao século XIV"
    } else if (ano > 1400 && ano < 1501){
        return "O ano " + ano+ " pertence ao século XV"
    } else if (ano > 1500 && ano < 1601){
        return "O ano " + ano+ " pertence ao século XVI"
    }  else if (ano > 1600 && ano < 1701){
        return "O ano " + ano+ " pertence ao século XVII"
    }  else if (ano > 1700 && ano < 1801){
        return "O ano " + ano+ " pertence ao século XVIII"
    }else if (ano > 1800 && ano < 1901){
        return "O ano " + ano+ " pertence ao século XIX"
    } else if (ano > 1900 && ano < 2001){
        return "O ano " + ano+ " pertence ao século XX"
    } else if (ano > 2000 && ano < 2101){
        return "O ano " + ano+ " pertence ao século XXI"
    } else {
        return "Ano fora do intervalo de 1000dc até 2020dc.";
    }
}

console.log(determinarSeculo(ano))