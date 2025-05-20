// WhatsApp Button JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get the WhatsApp button element
    const whatsappBtn = document.querySelector('.whatsapp-button');
    
    // Function to show the button after scrolling down a bit
    function showWhatsAppButton() {
        if (window.scrollY > 300) {
            whatsappBtn.classList.add('visible');
        } else {
            whatsappBtn.classList.remove('visible');
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', showWhatsAppButton);
    
    // Initial check
    showWhatsAppButton();
});
