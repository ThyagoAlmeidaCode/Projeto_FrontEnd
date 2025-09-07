// script.js
const slides = document.querySelector('.slides');
const imagens = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let indice = 0;

// Função para mostrar o slide certo
function mostrarSlide() {
  slides.style.transform = `translateX(${-indice * 100}vw)`;
}

// Botão próximo
nextBtn.addEventListener('click', () => {
  indice++;
  if (indice >= imagens.length) {
    indice = 0; // Volta para o primeiro
  }
  mostrarSlide();
});

// Botão anterior
prevBtn.addEventListener('click', () => {
  indice--;
  if (indice < 0) {
    indice = imagens.length - 1; // Vai para o último
  }
  mostrarSlide();
});
