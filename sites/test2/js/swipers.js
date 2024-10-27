var swiper1Mini = new Swiper(".firstSwiper-mini", {
    spaceBetween: 10,
    slidesPerView: 3, 
    centeredSlides: true, 
    slideToClickedSlide: true, 
    watchSlidesProgress: true,
    initialSlide: 1, 
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
    initialSlide: 1, 
    on: {
        slideChange: function() {
            const activeIndex = this.realIndex; 
            swiper1Mini.slideTo(activeIndex); 
        }
    }
});
  
  var swiper2Mini = new Swiper(".secondSwiper-mini", {
    spaceBetween: 10,
    slidesPerView: 3, 
    centeredSlides: true, 
    slideToClickedSlide: true, 
    watchSlidesProgress: true,
    initialSlide: 1, 
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
    initialSlide: 1, 
    on: {
        slideChange: function() {
            const activeIndex = this.realIndex; 
            swiper2Mini.slideTo(activeIndex); 
        }
    }
  });
  
  var swiper3Mini = new Swiper(".threeSwiper-mini", {
    spaceBetween: 10,
    slidesPerView: 3, 
    centeredSlides: true, 
    slideToClickedSlide: true, 
    watchSlidesProgress: true,
    initialSlide: 1, 
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
        swiper: swiper3Mini,
    },
    initialSlide: 1, 
    on: {
        slideChange: function() {
            const activeIndex = this.realIndex; 
            swiper3Mini.slideTo(activeIndex); 
        }
    }
  });
  
  var swiper4Mini = new Swiper(".fourSwiper-mini", {
    spaceBetween: 10,
    slidesPerView: 3, 
    centeredSlides: true, 
    slideToClickedSlide: true, 
    watchSlidesProgress: true,
    initialSlide: 1, 
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
        swiper: swiper4Mini,
    },
    initialSlide: 1, 
    on: {
        slideChange: function() {
            const activeIndex = this.realIndex; 
            swiper4Mini.slideTo(activeIndex); 
        }
    }
  });
  
  var swiper5Mini = new Swiper(".fiveSwiper-mini", {
    spaceBetween: 10,
    slidesPerView: 3, 
    centeredSlides: true, 
    slideToClickedSlide: true, 
    watchSlidesProgress: true,
    initialSlide: 1, 
  });
  var swiper5 = new Swiper(".fiveSwiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: ".five-swiper-button-next",
        prevEl: ".five-swiper-button-prev",
    },
    thumbs: {
        swiper: swiper5Mini,
    },
    initialSlide: 1, 
    on: {
        slideChange: function() {
            const activeIndex = this.realIndex; 
            swiper5Mini.slideTo(activeIndex); 
        }
    }
  });
  