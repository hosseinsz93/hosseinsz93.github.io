<<<<<<< HEAD
// Dark mode toggle
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌓 Toggle Theme';
document.body.prepend(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
=======
hi
>>>>>>> c6aff4e17a46edeb15dac8f488d631ab6e0a360f
