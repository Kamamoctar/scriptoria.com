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