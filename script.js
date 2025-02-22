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