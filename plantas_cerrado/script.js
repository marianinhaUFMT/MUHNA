document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com data-modal (inclui .plant-icon e .curadoria-button)
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Adiciona o evento de clique para abrir modais
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'flex';
            }
        });
    });

    // Adiciona o evento de clique para fechar cada modal ao clicar no botão "Fechar"
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });

    // Fecha o modal se clicar fora do conteúdo
    modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Adiciona funcionalidade de tela cheia para imagens no modal
    const modalImages = document.querySelectorAll('.modal-content img');
    modalImages.forEach(img => {
        img.addEventListener('click', () => {
            // Cria o modal de tela cheia
            const fullscreenModal = document.createElement('div');
            fullscreenModal.classList.add('fullscreen-modal');

            // Cria a imagem em tela cheia
            const fullscreenImg = document.createElement('img');
            fullscreenImg.src = img.src;
            fullscreenModal.appendChild(fullscreenImg);

            // Cria o botão de fechar
            const closeBtn = document.createElement('button');
            closeBtn.classList.add('fullscreen-close-btn');
            closeBtn.innerText = '✖';
            fullscreenModal.appendChild(closeBtn);

            // Adiciona o modal ao body
            document.body.appendChild(fullscreenModal);

            // Exibe o modal
            fullscreenModal.style.display = 'flex';

            // Fecha o modal ao clicar no botão
            closeBtn.addEventListener('click', () => {
                fullscreenModal.remove();
            });

            // Fecha o modal ao clicar fora da imagem
            fullscreenModal.addEventListener('click', (e) => {
                if (e.target === fullscreenModal) {
                    fullscreenModal.remove();
                }
            });
        });
    });
});