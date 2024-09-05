let heroSwiper = document.querySelector('.hero__swiper');
let newsSwiper = document.querySelector('.news__swiper');
let modalSwiper = document.querySelector('.modal-container');

if (heroSwiper) {
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
}

if (newsSwiper) {
  const swiper2 = new Swiper('.news__swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
  


    navigation: {
      nextEl: '.news__next',
      prevEl: '.news__prev',
    },

  });
}

if (modalSwiper) {
  let swiper3 = new Swiper('.modal-container', {
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.modal-button-next',
        prevEl: '.modal-button-prev',
    },
});
}


let page2CatalogSwiper = document.querySelector('.page-2-catalog__swiper');
let page2MetallSwiper = document.querySelector('.page-2-catalog__swiper');
let page2ReviewsSwiper = document.querySelector('.page-2-reviews__swiper');
let page2CompanySwiper = document.querySelector('.page-2-company__swiper');

if (page2CatalogSwiper) {
  const swiper = new Swiper('.page-2-catalog__swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
  
  
  
    navigation: {
      nextEl: '.page-2-catalog__next',
      prevEl: '.page-2-catalog__prev',
    },
  
  });
}

if (page2MetallSwiper) {
  const swiper2 = new Swiper('.page-2-metall__swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
  
  
  
    navigation: {
      nextEl: '.page-2-metall__next',
      prevEl: '.page-2-metall__prev',
    },
  
  });
}

if (page2ReviewsSwiper) {
  const swiper3 = new Swiper('.page-2-reviews__swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
  
  
  
    navigation: {
      nextEl: '.page-2-reviews__next',
      prevEl: '.page-2-reviews__prev',
    },
  
  });
}


if(page2CompanySwiper) {
  const swiper4 = new Swiper('.page-2-company__swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
  
  
  
    navigation: {
      nextEl: '.page-2-company__next',
      prevEl: '.page-2-company__prev',
    },
  
  });
}

