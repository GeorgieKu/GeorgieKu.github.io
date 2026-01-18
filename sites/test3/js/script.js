const heroSwiper = new Swiper('.hero__swiper', {
    // Optional parameters
    direction: 'horizontal',

    // If we need pagination
    pagination: {
        el: '.hero__pagination',
    },
});

const prdouctionSwiper = new Swiper('.production__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
        nextEl: '.production__btn-next',
        prevEl: '.production__btn-prev',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: "auto",
        }
    }

});

const reviewsSwiper = new Swiper('.reviews__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
        nextEl: '.reviews__btn-next',
        prevEl: '.reviews__btn-prev',
    },

});



const newsSwiper = new Swiper('.news__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
        nextEl: '.news__btn-next',
        prevEl: '.news__btn-prev',
    },

});

function openAcc(toggleButton, content, toggleArrow) {
    toggleButton.addEventListener('click', function () {
        content.classList.toggle('open');
        toggleArrow.classList.toggle('rotate');

    });
}

document.addEventListener('DOMContentLoaded', function () {
    let toggleButtons = document.querySelectorAll('.acc');
    let contents = document.querySelectorAll('.faq__question');

    toggleButtons.forEach((toggleButton, index) => {
        let toggleArrow = toggleButton.querySelector('svg');
        openAcc(toggleButton, contents[index], toggleArrow);
    });
});
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("burger").addEventListener("click", function () {
            document.querySelector("header").classList.toggle("open")
        })
    })