// Espera o conteúdo da página carregar completamente
        document.addEventListener('DOMContentLoaded', function() {
            // Seleciona elementos importantes do carrossel
            const container = document.querySelector('.carrossel-container'); // Container das imagens
            const slides = document.querySelectorAll('.carrossel-slide'); // Cada slide individual
            const prevBtn = document.querySelector('.carrossel-btn.prev'); // Botão anterior
            const nextBtn = document.querySelector('.carrossel-btn.next'); // Botão próximo
            const indicadores = document.querySelectorAll('.indicador'); // Bolinhas indicadoras
            const totalSlides = slides.length; // Número total de slides
            
            // Variável para controlar qual slide está visível
            let slideAtual = 0;
            
            // Função para atualizar a posição do carrossel
            function atualizarCarrossel() {
                // Move o container horizontalmente para mostrar o slide atual
                container.style.transform = `translateX(-${slideAtual * 100}%)`;
                
                // Atualiza os indicadores (bolinhas)
                indicadores.forEach((indicador, index) => {
                    if (index === slideAtual) {
                        indicador.classList.add('ativo'); // Destaca o indicador ativo
                    } else {
                        indicador.classList.remove('ativo'); // Remove destaque dos outros
                    }
                });
            }
            
            // Função para ir para o próximo slide
            function proximoSlide() {
                slideAtual = (slideAtual + 1) % totalSlides; // Avança, voltando ao primeiro se estiver no último
                atualizarCarrossel(); // Atualiza a exibição
            }
            
            // Função para ir para o slide anterior
            function slideAnterior() {
                slideAtual = (slideAtual - 1 + totalSlides) % totalSlides; // Retrocede, indo para o último se estiver no primeiro
                atualizarCarrossel(); // Atualiza a exibição
            }
            
            // Adiciona evento de clique no botão "próximo"
            nextBtn.addEventListener('click', proximoSlide);
            
            // Adiciona evento de clique no botão "anterior"
            prevBtn.addEventListener('click', slideAnterior);
            
            // Adiciona eventos de clique nos indicadores (bolinhas)
            indicadores.forEach((indicador, index) => {
                indicador.addEventListener('click', () => {
                    slideAtual = index; // Define o slide atual com base no indicador clicado
                    atualizarCarrossel(); // Atualiza a exibição
                });
            });
            
            // Opcional: avançar automaticamente os slides a cada 5 segundos
            setInterval(proximoSlide, 5000);
            
            // Inicializa o carrossel
            atualizarCarrossel();
        });