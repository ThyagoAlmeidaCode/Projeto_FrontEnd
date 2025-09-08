/* Exemplo de função declarada */

function soma() {
  return 2+4;
};

document.getElementById("mensagem").innerHTML = soma();

function soma(a,b) {
  return a+b;
};

document.getElementById("mensagem").innerHTML = soma(3,4);

/* Exemplo de função anônima atribuída a uma variável */
const cumprimentar = function(nome) {
  return "Olá, " + nome + "!";
};

/* document.getElementById("mensagem").innerHTML = cumprimentar("Maria"); */


/* function comprimentar(nome){    
    document.getElementById("mensagem").innerHTML = `Olá, ${nome}! Seja bem-vindo(a) ao curso de JavaScript!`;
} */

/* Arrow function */
/* const multiplicar = (a, b) => a * b;    
document.getElementById("mensagem").innerHTML = `Multiplicar 5 x 3: ${multiplicar(5, 3)}`; */


/* 

Crie uma função que receba dois números e retorne a soma deles. Exiba o resultado na página ao clicar em um botão.
Crie uma função que receba um número e verifique se ele é par ou ímpar. Exiba o resultado na página.
*/