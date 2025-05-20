document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!name || !email || !message) {
                showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Por favor, insira um email válido.', 'error');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show a success message
            
            // Reset form and show success message
            contactForm.reset();
            showMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        });
    }
    
    // Show message function
    function showMessage(text, type) {
        const messageContainer = document.getElementById('formMessage');
        if (messageContainer) {
            messageContainer.textContent = text;
            messageContainer.className = 'form-message';
            
            if (type === 'success') {
                messageContainer.classList.add('success-message');
            } else if (type === 'error') {
                messageContainer.classList.add('error-message');
            }
            
            messageContainer.style.display = 'block';
            
            // Hide message after 5 seconds
            setTimeout(function() {
                messageContainer.style.display = 'none';
            }, 5000);
        }
    }
});
