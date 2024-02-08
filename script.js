// script.js
document.addEventListener("DOMContentLoaded", function () {
    const movingButton = document.getElementById("movingButton");

    document.addEventListener("mousemove", function (event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const buttonRect = movingButton.getBoundingClientRect();
        const buttonX = buttonRect.left + buttonRect.width / 2;
        const buttonY = buttonRect.top + buttonRect.height / 2;

        const distanceX = mouseX - buttonX;
        const distanceY = mouseY - buttonY;

        movingButton.style.transition = "transform 0.3s ease";
        movingButton.style.transform = "translate(" + (-distanceX) + "px, " + (-distanceY) + "px)";
    });
});
