document.addEventListener("DOMContentLoaded", function () {
  // تحديد كافة الأقسام في الصفحة
  const sections = document.querySelectorAll("section");
  const navList = document.getElementById("navbar"); // تغيير عنصر التنقل ليكون حسب معرف `id`

  sections.forEach(section => {
      // إنشاء عنصر <li> جديد لكل قسم
      const listItem = document.createElement("li");
      // إدراج رابط القسم في عنصر التنقل
      listItem.innerHTML = `<a href="#${section.id}">${section.dataset.nav}</a>`;
      // إضافة العنصر إلى قائمة التنقل
      navList.appendChild(listItem);
  });
});
