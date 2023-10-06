// JavaScript for mobile menu toggle
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileNav = document.querySelector(".mobile-nav");

mobileMenuButton.addEventListener("click", function () {
    mobileNav.classList.toggle("active");
});