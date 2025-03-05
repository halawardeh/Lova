document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".store-sections h2");
    sections.forEach((section) => {
        section.addEventListener("click", () => {
            alert("This section will be sorted dynamically!");
        });
    });
});
