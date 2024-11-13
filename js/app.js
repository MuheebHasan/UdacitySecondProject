// الحصول على جميع الأقسام وشريط التنقل
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

// إضافة مراقب التمرير لتحديد القسم النشط
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            current = section.getAttribute("id");
        }
    });

    // إزالة وتفعيل القسم النشط في شريط التنقل
    navLinks.forEach(link => {
        link.classList.remove("active-section");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active-section");
        }
    });
});
