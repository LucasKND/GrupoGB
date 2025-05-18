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
});