// Main JavaScript file
// Include section-specific JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load hero.js functionality
    const heroScript = document.createElement('script');
    heroScript.src = 'script/hero.js';
    document.head.appendChild(heroScript);
    
    // Load services.js functionality
    const servicesScript = document.createElement('script');
    servicesScript.src = 'script/services.js';
    document.head.appendChild(servicesScript);
      // Load whatsapp-button.js functionality
    const whatsappScript = document.createElement('script');
    whatsappScript.src = 'script/whatsapp-button.js';
    document.head.appendChild(whatsappScript);
    
    // Load contact.js functionality
    const contactScript = document.createElement('script');
    contactScript.src = 'script/contact.js';
    document.head.appendChild(contactScript);
});