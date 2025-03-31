document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll("nav ul li a");

    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.2)";
            this.style.transition = "transform 0.3s ease";
        });

        button.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
