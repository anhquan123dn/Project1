// Slide of title
var swiper = new Swiper(".title_swiper-container", {
  loop: true,
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Slide of event
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
  spaceBetween: 30,
  slidesPerView: 2,
});

var swiper_wecannot = new Swiper(".wecannot-swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 2000,
  },
});

//Animation of explore
function flip_vertical_right(x) {
  x.style.animation =
    "flip-vertical-right 1.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both";
}
function normal(x) {
  x.style.animation =
    "flip-vertical-back 1.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both";
}
function animation_opacity_over(x) {
  document.getElementsByClassName("inner--red")[x].style.display = "block";
}
function animation_opacity_out(x) {
  x.style.display = "none";
}
