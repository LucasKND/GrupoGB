// Services Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add animation effect on scroll
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to add animation class when element is visible
    function animateOnScroll() {
        serviceCards.forEach(card => {
            if (isInViewport(card) && !card.classList.contains('animated')) {
                card.classList.add('animated', 'fadeInUp');
            }
        });
    }
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Check on initial load
    animateOnScroll();
});
