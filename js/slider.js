const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 20,
  allowTouchMove: false,   // заборона свайпу
  speed: 10000,            // швидкість прокрутки (чим більше — повільніше)
  autoplay: {
    delay: 0,              // без паузи
    disableOnInteraction: false,
  },
});






