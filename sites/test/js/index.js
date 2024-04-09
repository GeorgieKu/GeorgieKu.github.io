document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })

    const swiper = new Swiper('.hero__swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        
        // Navigation arrows
        navigation: {
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        },
      
      });

      const swiper2 = new Swiper('.realized__swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        
        // Navigation arrows
        navigation: {
          nextEl: '.realized__swiper-btn-next',
          prevEl: '.realized__swiper-btn-prev',
        },
      
      });

      
      const swiper3 = new Swiper('.licenses-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 20,
        
        // Navigation arrows
        navigation: {
          nextEl: '.licenses__swiper-btn-next',
          prevEl: '.licenses__swiper-btn-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                autoHeight: true,
            },
            576: {
                slidesPerView: 'auto',
            },
        }
      
      });

      const swiper4 = new Swiper('.news-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 20,
        
        // Navigation arrows
        navigation: {
          nextEl: '.news__swiper-btn-next',
          prevEl: '.news__swiper-btn-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                autoHeight: true,
            },
            576: {
                slidesPerView: 'auto',
            },
        }
      
      });

      const swiper5 = new Swiper('.clients-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 20,
        
        // Navigation arrows
        navigation: {
          nextEl: '.clients__swiper-btn-next',
          prevEl: '.clients__swiper-btn-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                autoHeight: true,
            },
            576: {
                slidesPerView: 'auto',
            },
        }
      
      });
})


