const swiper = new Swiper('.promotion__swiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 100,
    navigation: {
        nextEl: '.promotion-button-next',
        prevEl: '.promotion-button-prev',
    },
    
});

const swiper2 = new Swiper('.specialist__swiper', {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 100,
    navigation: {
        nextEl: '.specialist-button-next',
        prevEl: '.specialist-button-prev',
    },
    
});

const swiper3 = new Swiper('.services__swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 80,
    navigation: {
        nextEl: '.services-button-next',
        prevEl: '.services-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        2000: {
          slidesPerView: 3,
          spaceBetween: 80
        },
        1240: {
            slidesPerView: 'auto',
            spaceBetween: 30
        }
    }
    
});


const swiper4 = new Swiper('.review__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 71,
    navigation: {
        nextEl: '.review-button-next',
        prevEl: '.review-button-prev',
    },
    
});