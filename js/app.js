document.addEventListener("DOMContentLoaded", () => {
  // تحديد عنصر الشريط التنقل
  const navbar = document.getElementById("navbar");

  // تحديد الأقسام التي يجب إضافتها إلى الشريط التنقل
  const sections = ['HTML', 'CSS', 'JavaScript'];

  // إضافة كل قسم إلى الشريط التنقل
  sections.forEach((section) => {
      let li = document.createElement("li"); // إنشاء عنصر قائمة
      let link = document.createElement("a"); // إنشاء عنصر رابط

      // إعداد الرابط لكل قسم
      link.href = `#${section.toLowerCase()}`;
      link.textContent = section; // تعيين النص إلى اسم القسم

      // إضافة الرابط إلى عنصر القائمة، وإضافته إلى الشريط التنقل
      li.appendChild(link);
      navbar.appendChild(li);
  });
});
