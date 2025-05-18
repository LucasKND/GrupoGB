// Hero Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // The carousel is initialized automatically with data-bs-ride attribute    // Código para a barra estática - não precisa mais do efeito de scroll
    const navbar = document.querySelector('.navbar');
    
    // Aplicamos o estilo escuro por padrão, já que a barra está sobre uma imagem
    navbar.classList.add('navbar-dark');
    
    // Smooth scrolling for navbar links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', event => {
            if (link.hash !== '') {
                event.preventDefault();
                const hash = link.hash;
                const targetElement = document.querySelector(hash);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
