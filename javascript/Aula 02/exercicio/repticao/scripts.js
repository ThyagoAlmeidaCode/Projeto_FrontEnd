/* let numero = 10;
let resultado = document.getElementById("resultado"); */


/* for (let i = 1; i <= 10; i++) {
    resultado.innerHTML += i + "<br>";
}
 */
 
/* let numero2 = 20;

while (numero2 >= 1) {
    resultado.innerHTML += numero2 + "<br>";
    numero2--;
}  */



/* do {
    resultado.innerHTML += numero + "<br>";
    numero++;
} while (numero <= 10); */



/* 
    Crie uma página que, ao clicar em um botão, mostre os números de 1 até 10 na tela.


    Crie uma página onde o usuário digite um número e, ao clicar no botão, apareça a tabuada desse número de 1 até 10.
*/

/* document.getElementById("btn").addEventListener("click", function() {
    const numero = document.getElementById("num").value;
    const resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        alert("Por favor, digite um número.");
    } else {
        for (let i = 1; i <= numero; i++) {
            resultado.innerHTML += "O resultado é:" + i + "<br>";
        }
    }
}) */


function  tabuada(){
    const numero = document.getElementById("num").value;
    const resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        alert("Por favor, digite um número.");
    } else {
        for (let i = 1; i <= 10; i++) {
            resultado.innerHTML += numero + "x" + i + "=" + (numero * i) + "<br>";
        }
    }
}