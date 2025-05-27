// Footer JavaScript functions
document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year dynamically
    const currentYear = new Date().getFullYear();
    const copyrightYearElement = document.querySelector('.copyright script');
    
    if (copyrightYearElement) {
        copyrightYearElement.parentNode.innerHTML = copyrightYearElement.parentNode.innerHTML.replace(
            '<script>document.write(new Date().getFullYear())</script>',
            currentYear
        );
    }

    // Smooth scroll for footer navigation links
    const footerLinks = document.querySelectorAll('.footer-links a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only apply to links that point to anchors on the same page
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Adjust for header height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
