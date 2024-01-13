document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
    const swiper = new Swiper('.services__swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        
      
      
        // Navigation arrows
        navigation: {
          nextEl: '.services-swiper-button-next',
          prevEl: '.services-swiper-button-prev',
        },
        breakpoints: {
          320: {
            spaceBetween: 20,
            slidesPerView: 1,
          },
          577: {
            spaceBetween: 20,
            slidesPerView: 'auto',
          },
          1024: {
            spaceBetween: 50,
            slidesPerView: 'auto',
           
          }
        }
      
      });
      const swiper2 = new Swiper('.practice__swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.practice-pagination',
          },
      });
      const swiper3 = new Swiper('.reviews__swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.reviews__btn-next',
            prevEl: '.reviews__btn-prev',
          },
          pagination: {
            el: '.reviews-pagination',
          },
          breakpoints: {
            320: {
              spaceBetween: 20,
              slidesPerView: 'auto',
            },
            576: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 50,
              slidesPerView: 4,
            }
          }
          
      
    
      
      });
      const swiper4 = new Swiper('.video__swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
            nextEl: '.video__btn-next',
            prevEl: '.video__btn-prev',
          },
          breakpoints: {
            320: {
              spaceBetween: 20,
              slidesPerView: 'auto',
            },
            576: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 50,
            }
          } 
      
    
      
      });

      let heroBtn = document.getElementById('hero__btn')
      let modal = document.getElementById('modal')
      let overlay = document.querySelector('.overlay')
      let modalClose = document.querySelector('.modal__close')

      heroBtn.addEventListener('click', function() {
        modal.style.display = 'block'
        overlay.style.display = 'block'
      })

      modalClose.addEventListener('click', function(){
        modal.style.display = 'none'
        overlay.style.display = 'none'
      })



})