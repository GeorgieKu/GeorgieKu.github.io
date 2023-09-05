const swiper = new Swiper('.slider__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
 
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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

  const element = document.querySelector('.select');
  const choices = new Choices(element, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: ''
  });