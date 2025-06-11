document.addEventListener('DOMContentLoaded', function() {
    const clientLogos = document.querySelectorAll('.client-logo');
    
    clientLogos.forEach((logo, index) => {
        logo.style.animationDelay = `${index * 0.1}s`;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    logo.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3
        });
        observer.observe(logo);
    });
    const trustBadge = document.querySelector('.trust-badge');
    if (trustBadge) {
        trustBadge.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        trustBadge.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    }
});
