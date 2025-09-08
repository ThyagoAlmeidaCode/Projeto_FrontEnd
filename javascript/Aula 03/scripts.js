const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
    if (mensagem.textContent === "") {
        mensagem.textContent = "Botão clicado!";
    } else {
        mensagem.textContent = "";
    }
});