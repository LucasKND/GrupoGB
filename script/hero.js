document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarLogo = document.querySelector('.navbar-logo');
    const heroContent = document.querySelector('.hero-content');
    
    navbar.classList.add('navbar-dark');
    
    // Add scroll event to handle navbar background change
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            navbarLogo.style.height = '60px';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = 'none';
            navbarLogo.style.height = '80px';
        }
    });
    
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
