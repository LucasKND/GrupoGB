document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function animateOnScroll() {
        serviceCards.forEach(card => {
            if (isInViewport(card) && !card.classList.contains('animated')) {
                card.classList.add('animated', 'fadeInUp');
            }
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);

    animateOnScroll();
});
