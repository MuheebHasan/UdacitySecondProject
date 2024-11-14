// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');

    // إنشاء عناصر القائمة وإضافتها إلى شريط التنقل
    sections.forEach((section, index) => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = `#${section.id}`;
        anchor.textContent = `قسم ${index + 1}`;
        listItem.appendChild(anchor);
        navbar.appendChild(listItem);
    });

    // إضافة تنسيق خاص للقسم النشط أثناء التمرير
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
