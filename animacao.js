// Função para verificar se o elemento está visível na janela
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar classe quando o elemento está visível
function animateOnScroll() {
    var mainContent = document.getElementById('animar-de-baixo');
    if (isElementInViewport(mainContent)) {
        mainContent.classList.add('show');
    } else {
        mainContent.classList.remove('show'); // Remova a classe se o elemento não estiver visível
    }
}

// Adiciona um listener de scroll para chamar a função de animação
window.addEventListener('scroll', animateOnScroll);

// Chama a função uma vez ao carregar a página para verificar a visibilidade inicial
animateOnScroll();
