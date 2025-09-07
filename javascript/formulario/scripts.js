// Adiciona um evento de submit ao formulário
document.getElementById("meuFormulario").addEventListener("submit", function(event) {
  // Previne o comportamento padrão do formulário (recarregar a página)
  event.preventDefault(); /* Impede que o formulario recarregue */
  // Chama a função de validação do formulário
  validarFormulario();
});

// Função que valida o formulário
function validarFormulario() {
  // Pega os elementos do formulário
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let senha = document.getElementById("senha");
  let mensagem = document.getElementById("mensagem");

  // Variável que armazena se o formulário é válido ou não
  let valido = true;

  // Valida o campo nome
  if (nome.value === "") {
    // Adiciona a classe error ao elemento nome
    nome.classList.add("error");
    // Remove a classe success do elemento nome
    nome.classList.remove("success");
    // Exibe a mensagem de erro
    mensagem.textContent = "O campo nome é obrigatório!";
    // Muda a cor da mensagem para vermelho
    mensagem.style.color = "red";
    // Muda a variável valido para false
    valido = false;
  } else {
    // Adiciona a classe success ao elemento nome
    nome.classList.add("success");
    // Remove a classe error do elemento nome
    nome.classList.remove("error");
  }

  // Valida o campo email
  if (!email.value.includes("@")) {
    // Adiciona a classe error ao elemento email
    email.classList.add("error");
    // Remove a classe success do elemento email
    email.classList.remove("success");
    // Exibe a mensagem de erro
    mensagem.textContent = "Digite um email válido!";
    // Muda a cor da mensagem para vermelho
    mensagem.style.color = "red";
    // Muda a variável valido para false
    valido = false;
  } else {
    // Adiciona a classe success ao elemento email
    email.classList.add("success");
    // Remove a classe error do elemento email
    email.classList.remove("error");
  }

  // Valida o campo senha
  if (senha.value.length < 6) {
    // Adiciona a classe error ao elemento senha
    senha.classList.add("error");
    // Remove a classe success do elemento senha
    senha.classList.remove("success");
    // Exibe a mensagem de erro
    mensagem.textContent = "A senha deve ter pelo menos 6 caracteres!";
    // Muda a cor da mensagem para vermelho
    mensagem.style.color = "red";
    // Muda a variável valido para false
    valido = false;
  } else {
    // Adiciona a classe success ao elemento senha
    senha.classList.add("success");
    // Remove a classe error do elemento senha
    senha.classList.remove("error");
  }

  // Se o formulário for válido
  if (valido) {
    // Exibe a mensagem de sucesso
    mensagem.textContent = "Formulário enviado com sucesso!";
    // Muda a cor da mensagem para verde
    mensagem.style.color = "green";
  }
}

