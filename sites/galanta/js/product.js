var swiper = new Swiper(".product__swiper-2", {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".product__swiper", {
    loop: true,
    direction: 'horizontal',
    spaceBetween: 10,
    navigation: {
      nextEl: ".product__btn-next",
      prevEl: ".product__btn-prev",
      
    },
    pagination: {
        el: '.events-pagination',
      },
    thumbs: {
      swiper: swiper,
    },
  });