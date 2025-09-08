let idade =10
let resultado = document.getElementById("resultado");

if (idade >= 18) {
    resultado.innerHTML = "Maior de idade";
} else if (idade === 18) {
    resultado.innerHTML = "Tem 18 anos";
} else {
    resultado.innerHTML = "Menor de idade";
}


let materia = "Matemática";
switch (materia) {
    case "Matemática":
        resultado.innerHTML += "<br>Matemática é a melhor matéria!";
        break;
    case "Português":
        resultado.innerHTML += "<br>Português é a melhor materia!";
        break;
    case "Geografia":
        resultado.innerHTML += "<br>Geografia é a melhor materia!";
        break;
    default:
        resultado.innerHTML += "<br>Qualquer outra materia!";
}



/* 
Crie uma página onde o usuário digite a nota final de 0 a 10. Se a nota for:

Menor que 5 → mostrar "Reprovado";

Entre 5 e 6.9 → mostrar "Recuperação";

7 ou mais → mostrar "Aprovado".

*/