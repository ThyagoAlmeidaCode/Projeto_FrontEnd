/* const titulo = document.getElementById('titulo'); */
const titulo = document.getElementById('titulo');


const paragrafo = document.getElementById('paragrafo-intro');

console.log(titulo);    // Exibe o elemento <h1> no console
console.log(paragrafo); // Eto <p> no console/*    Alterar o texto do parágrafo */
titulo.innerText = 'Bem-vindo ao meu site!';

/*  Alterar o texto */
titulo.innerText = 'Bem-vindo ao meu site!';
paragrafo.innerText = 'Este é um parágrafo de introdução.';

/* Alterar css */
paragrafo.style.color = 'blue';
paragrafo.style.fontSize = '20px';

let valor_um = prompt("Informe um valor");
let valor_dois = prompt("Informe um valor");

let soma = parseInt(valor_um) + parseInt(valor_dois);
document.getElementById("soma").innerText = soma;