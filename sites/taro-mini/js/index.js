const swiper = new Swiper('.hero__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
  });

  const swiper2 = new Swiper('.reviews__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    pagination: {
        el: '.review-pag',
      },
  });