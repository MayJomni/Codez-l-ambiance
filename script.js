document.addEventListener('DOMContentLoaded', function() {
    // Basculage de thème
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        // Changer le texte du bouton selon le thème
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Mode Clair';
        } else {
            themeToggle.textContent = 'Mode Sombre';
        }
    });
    
    // Animation des cartes au chargement
    const productCards = document.querySelectorAll('.product-card');
    
    // Déclencher l'animation pour chaque carte avec un délai
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
        }, index * 200);
    });
    
    // Effet de survol amélioré pour les boutons
    const buttons = document.querySelectorAll('button:not(.theme-toggle)');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});