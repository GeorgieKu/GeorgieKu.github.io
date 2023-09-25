const swiper = new Swiper('.review__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    autoHeight: true,
  
    // If we need pagination
    pagination: {
      el: '.review__pagination',
      clickable: true,
    },

  });


  var input = document.querySelector("#phone");
window.intlTelInput(input, {

  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});