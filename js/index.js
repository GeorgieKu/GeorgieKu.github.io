var swiper = new Swiper('.benefit__swiper', {  
    slidesPerView: 'auto',
    spaceBetween: 88,
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 0,
     
    }
  });

  var swiper2 = new Swiper(".offices__swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },

  });

  var swiper3 = new Swiper('.benefit__swiper1', {  
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: false,
  });

  var swiper4 = new Swiper(".table__swiper", {
    slidesPerView: "auto",
    
    });

  