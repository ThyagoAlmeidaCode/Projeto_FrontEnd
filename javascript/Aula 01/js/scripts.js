/* alert("Ola mundo!"); */ 
document.write("Minha Idade é:") /* Não recomendado */
document.write("Ola mundo!");
console.log("Ola mundo");

/* Variaáveis - São como caixas onde guardamos coisas (Informação) */
/* var - forma mais antiga */
var nome = "Thiago";

/* let - forma mais atual */
let sobrenome = "Silva";
let sobrenome_um = prompt("Qual seu sobrenome?");
/* const - constante  - variaveis cujo valor não pode ser trocados*/
const idade = 25;
console.log("Ola " + nome + sobrenome) ;

/* Tipos de dados  */

/* String  - texto*/
/* Number - numeros*/
/* Boolean - true ou false*/

let classificação = 25;
console.log(typeof classificação);

/* Operdaores */
/*
Operadores
Operadores nos permitem manipular e comparar dados.

Aritméticos: + (adição), - (subtração), * (multiplicação), / (divisão).

De Comparação: == (igualdade de valor), === (igualdade de valor e tipo), != (diferente de valor), !== (diferente de valor e tipo).

Lógicos: && (E), || (OU), ! (NÃO).


 */

let num1 = 20;
let num2 = "20";
console.log(num1 === num2);