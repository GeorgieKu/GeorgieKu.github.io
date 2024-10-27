var swiper1Mini = new Swiper(".firstSwiper-mini", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper1 = new Swiper(".firstSwiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: ".first-swiper-button-next",
      prevEl: ".first-swiper-button-prev",
    },
    thumbs: {
      swiper: swiper1Mini,
    },
  });
  
  var swiper2Mini = new Swiper(".secondSwiper-mini", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".secondSwiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: ".second-swiper-button-next",
      prevEl: ".second-swiper-button-prev",
    },
    thumbs: {
      swiper: swiper2Mini,
    },
  });
  
  var swiper3Mini = new Swiper(".threeSwiper-mini", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper3 = new Swiper(".threeSwiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: ".three-swiper-button-next",
      prevEl: ".three-swiper-button-prev",
    },
    thumbs: {
      swiper: swiper2Mini,
    },
  });
  
  var swiper4Mini = new Swiper(".fourSwiper-mini", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper4 = new Swiper(".fourSwiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: ".four-swiper-button-next",
      prevEl: ".four-swiper-button-prev",
    },
    thumbs: {
      swiper: swiper2Mini,
    },
  });
  
  var swiper5Mini = new Swiper(".oneSwiper-mini", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper5 = new Swiper(".oneSwiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: ".one-swiper-button-next",
      prevEl: ".one-swiper-button-prev",
    },
    thumbs: {
      swiper: swiper2Mini,
    },
  });
  