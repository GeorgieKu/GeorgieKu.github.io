const swiper = new Swiper('.hero__swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
  
    pagination: {
      el: '.hero__pagination',
    },
  

    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },

  });

  const swiper2 = new Swiper('.news__swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
  


    navigation: {
      nextEl: '.news__next',
      prevEl: '.news__prev',
    },

  });

  let swiper3 = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.modal-button-next',
        prevEl: '.modal-button-prev',
    },
});
