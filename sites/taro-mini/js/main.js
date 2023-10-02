const swiper = new Swiper('.needles__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 55,
    autoHeight: true,
  
 
    // Navigation arrows
    navigation: {
      nextEl: '.needles-btn-next',
      prevEl: '.needles-btn-prev',
    },
  

  });

  const swiper2 = new Swiper('.video__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 40,
 
    // Navigation arrows
    navigation: {
      nextEl: '.video-swiper-button-next',
      prevEl: '.video-swiper-button-prev',
    },
  

  });

  const swiper4 = new Swiper('.video__swiper-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 40,
 
    // Navigation arrows
    navigation: {
      nextEl: '.video-swiper-button-next-2',
      prevEl: '.video-swiper-button-prev-2',
    },
  

  });

  const swiper3 = new Swiper('.reviews__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    spaceBetween: 40,
 
    // Navigation arrows
    navigation: {
      nextEl: '.review-swiper-button-next',
      prevEl: '.review-swiper-button-prev',
    },
  

  });
