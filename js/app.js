// app.js

/**
 * Dynamically generate the navigation bar based on sections.
 * Add event listeners for smooth scrolling and highlight the active section.
 */

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navbar = document.getElementById("navbar");

    // Build the navbar dynamically
    sections.forEach(section => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#${section.id}`;
        a.textContent = section.querySelector("h2").textContent;

        // Scroll to section smoothly on click
        a.addEventListener("click", (event) => {
            event.preventDefault();
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });

        li.appendChild(a);
        navbar.appendChild(li);
    });

    // Add scroll event listener to highlight active section
    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            // Check if the section is in the viewport
            if (rect.top >= -50 && rect.top <= 300) {
                // Add active class to section
                sections.forEach(sec => sec.classList.remove("active"));
                section.classList.add("active");

                // Highlight corresponding navbar link
                document.querySelectorAll("nav ul li a").forEach(a => {
                    a.classList.remove("active");
                    if (a.getAttribute("href").substring(1) === section.id) {
                        a.classList.add("active");
                    }
                });
            }
        });
    });
});
