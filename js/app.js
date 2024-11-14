// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = `#${section.id}`;
        anchor.textContent = `section ${index + 1}`;
        listItem.appendChild(anchor);
        navbar.appendChild(listItem);
    });

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const link = document.querySelector(`a[href="#${section.id}"]`);
            if (rect.top <= 100 && rect.bottom >= 100) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});
