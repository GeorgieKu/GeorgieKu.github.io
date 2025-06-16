document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })

    const swiper = new Swiper('.catalog__swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 40,

    
        // Navigation arrows
        navigation: {
          nextEl: '.catalog-next',
          prevEl: '.catalog-prev',
        },

      });

      const swiper2 = new Swiper('.photo__swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 40,
        navigation: {
            nextEl: '.photo-next',
            prevEl: '.photo-prev',
          },
    


      });
      
      let callMeLabel = document.getElementById('callMe__label-1')
      let callMeCheckbox = document.getElementById('callMe__checkbox-1')

      callMeLabel.addEventListener('click', function() {
        callMeCheckbox.classList.toggle('checked')
      })

      let callMeLabel2 = document.getElementById('callMe__label-2')
      let callMeCheckbox2 = document.getElementById('callMe__checkbox-2')

      callMeLabel2.addEventListener('click', function() {
        callMeCheckbox2.classList.toggle('checked')
      })

      let calculationLabel = document.getElementById('calculation__label')
      let calculationCheckbox = document.getElementById('calculation__checkbox')

      calculationLabel.addEventListener('click', function() {
        calculationCheckbox.classList.toggle('checked')
      })
})

