// اختيار جميع الأقسام وإنشاء روابط للتنقل
const sections = document.querySelectorAll('section');
const navList = document.querySelector('#navbar__list');

// إضافة أقسام التنقل ديناميكيًا
sections.forEach(section => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = section.getAttribute('data-nav');
    anchor.href = `#${section.id}`;
    anchor.classList.add('menu__link');
    listItem.appendChild(anchor);
    navList.appendChild(listItem);
});

// تفعيل القسم الحالي عند التمرير
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop >= 0 && sectionTop < 300) {
            document.querySelectorAll('.menu__link').forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`a[href="#${section.id}"]`);
            activeLink.classList.add('active');
        }
    });
});
