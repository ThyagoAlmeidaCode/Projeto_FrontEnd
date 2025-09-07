// script.js
// const btnMenu = document.getElementById("btnMenu");
//   - Pega o botão do menu pelo id "btnMenu"
const btnMenu = document.getElementById("btnMenu");

// const dropdown = document.getElementById("dropdown");
//   - Pega a lista de op es do menu pelo id "dropdown"
const dropdown = document.getElementById("dropdown");

// btnMenu.addEventListener("click", () => {
//   - Adiciona um evento de clique no botaoo do menu
//   - quando o botao  clicado, o evento  disparado
btnMenu.addEventListener("click", () => {
  // dropdown.classList.toggle("show");
  //   - Toggles (adiciona se n o existir, remove se existir) a classe "show" na lista de op es do menu
  dropdown.classList.toggle("show");
});

// window.addEventListener("click", (event) => {
//   - Adiciona um evento de clique na janela
//   - quando o clique  realizado fora do menu, o evento  disparado
window.addEventListener("click", (event) => {
  // if (!event.target.matches("#btnMenu")) {
  //   - Verifica se o alvo do clique n o  o bot o do menu
  if (!event.target.matches("#btnMenu")) {
    // dropdown.classList.remove("show");
    //   - Remove a classe "show" da lista de opçoes do menu
    dropdown.classList.remove("show");
  }
});

