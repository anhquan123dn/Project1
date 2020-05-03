var mySwiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  loop: true,
  autoplay: true,
});
function flip_vertical_right(x) {
  x.style.animation =
    "flip-vertical-right 1.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both";
}
function normal(x) {
  x.style.animation =
    "flip-vertical-back 1.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both";
}
