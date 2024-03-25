var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 9,
  direction: window.innerWidth <= 600 ? "vertical" : "horizontal",
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.addEventListener("resize", function () {
  swiper.changeDirection(window.innerWidth <= 600 ? "vertical" : "horizontal");
  swiper.params.slidesPerView = window.innerWidth <= 600 ? 1 : 3;
  swiper.update();
});

