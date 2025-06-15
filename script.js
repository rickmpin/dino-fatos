// Animação de fade-in ao carregar
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Código do slideshow
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = null;

// Função para mostrar um slide específico
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? '1' : '0';
    });
}

// Função para obter o índice do slide visível
function getCurrentSlideIndex() {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].style.opacity === '1') {
            return i;
        }
    }
    // Caso não encontre, retorna o índice padrão
    return 0;
}

// Avançar para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Voltar ao slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Automático: troca de slide a cada 5 segundos
slideInterval = setInterval(nextSlide, 5000);

// Controle manual
document.getElementById('nextBtn').addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide, 5000);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    clearInterval(slideInterval);
    prevSlide();
    slideInterval = setInterval(nextSlide, 5000);
});

// Inicializa o primeiro slide
showSlide(currentSlide);

// Evento do botão "Aprender"
document.getElementById('abrirPagina').addEventListener('click', () => {
    const indexAtivo = getCurrentSlideIndex();
    const slideAtivo = slides[indexAtivo];
    const url = slideAtivo.getAttribute('data-url');
    if (url) {
        window.location.href = url;
    }
});