const swiper = new Swiper('.taro__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var input = document.querySelector("#phone");
window.intlTelInput(input, {

  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});