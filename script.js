// Remove merge conflicts and improve dark mode
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌓 Toggle Theme';
themeToggle.classList.add('theme-toggle');
document.querySelector('.header').appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Set initial theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// Add analytics tracking
window.addEventListener('DOMContentLoaded', (event) => {
    // Google Analytics
    if (window.location.hostname !== 'localhost') {
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
        document.head.appendChild(gaScript);
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXX');
    }
    
    // Add copy DOI functionality
    document.querySelectorAll('.doi-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(link.textContent);
            alert('DOI copied to clipboard!');
        });
    });
});