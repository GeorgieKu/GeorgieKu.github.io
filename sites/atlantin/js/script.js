

  var thumbs = new Swiper(thumbsEl, {
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
  });

  new Swiper(mainEl, {
    spaceBetween: 16,
    slidesPerView: "auto",
    loop: true,
    pagination: {
      el: root.querySelector(".case-gallery__pagination"),
      clickable: true,
    },
    navigation: {
      nextEl: root.querySelector(".case-gallery__btn--next"),
      prevEl: root.querySelector(".case-gallery__btn--prev"),
    },
    thumbs: {
      swiper: thumbs,
    },
    keyboard: {
      enabled: true,
    },
  });

