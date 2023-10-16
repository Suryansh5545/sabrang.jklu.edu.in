var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    spaceBetween: 60,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    }
  });

// JavaScript for mobile menu toggle
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileNav = document.querySelector(".mobile-nav");

mobileMenuButton.addEventListener("click", function () {
    mobileNav.classList.toggle("active");
});