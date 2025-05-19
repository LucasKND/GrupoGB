document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    navbar.classList.add('navbar-dark');
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
