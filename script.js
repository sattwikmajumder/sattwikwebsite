document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.2)";
            this.style.transition = "transform 0.3s ease";
        });

        link.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
