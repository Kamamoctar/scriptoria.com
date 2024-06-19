// Script pour des interactions basiques ou des améliorations comme des animations de scrolling doux, etc.
// Exemple : affichage d'un message de confirmation après l'envoi du formulaire

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi du formulaire pour démo
    alert('Merci, votre message a été envoyé.');
});

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('ModeSombreHautDroit');
    
    // Optionally set the initial mode based on user preference or system preference
    const currentMode = localStorage.getItem('darkMode') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        
        const isDarkMode = document.body.classList.toggle('dark-mode');
        
        // Save this preference to localStorage
        localStorage.setItem('darkMode', isDarkMode ? 'dark' : 'light');
    });
});