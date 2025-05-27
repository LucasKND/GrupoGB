// Clients Section Script
document.addEventListener('DOMContentLoaded', function() {
    // Add animation delay to client logos for staggered effect
    const clientLogos = document.querySelectorAll('.client-logo');
    
    clientLogos.forEach((logo, index) => {
        // Add a small delay for each logo to create a staggered entrance
        logo.style.animationDelay = `${index * 0.1}s`;
        
        // Add an observer to animate logos when they come into view
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
    
    // Add hover animation for trust badge
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
