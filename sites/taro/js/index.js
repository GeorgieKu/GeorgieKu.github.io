const swiper = new Swiper('.iren__swiper', {

    direction: 'horizontal',
    loop: false,
    
  
    pagination: {
      el: '.swiper-pagination',
    },
  
  });

  const swiper2 = new Swiper('.iren__swiper2', {

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