const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    centeredSlides: 1,
    initialSlide: 1,
    slidesPerView: 'auto',
    spaceBetween: 50,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 0,
        modifier: 200,
        slideShadows : true,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        576: {
          spaceBetween: 10,
        },
    }
  });