// Seleciona todos os ícones das plantas
const plantIcons = document.querySelectorAll('.plant-icon');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-btn');

// Adiciona o evento de clique para cada ícone de planta
plantIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const modalId = icon.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
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
window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
