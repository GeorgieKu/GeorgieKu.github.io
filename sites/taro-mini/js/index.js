const swiper = new Swiper('.review__swiper', {

  // If we need pagination
  pagination: {
    el: '.review__pag',
  },

});

var input = document.querySelector("#phone");
window.intlTelInput(input, {

  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});