var swiper = new Swiper('#js-carousel', {  
    slidesPerView: 9,
    spaceBetween: 88,
    speed: 2000,
    loop: true,
    //allowTouchMove: false, // можно ещё отключить свайп
    autoplay: {
      delay: 0,
      disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия
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

  var swiper3 = new Swiper('.benefit__swiper', {  
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: false,
  });
