    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("burger").addEventListener("click", function () {
            document.querySelector("header").classList.toggle("open")
        })
    })

    let slider = document.querySelector('.slider')

    if (slider) {
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 30,
            loop: true,

            // Navigation arrows
            navigation: {
                nextEl: '.slider__next',
                prevEl: '.slider__prev',
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                }
            }

        });
    }