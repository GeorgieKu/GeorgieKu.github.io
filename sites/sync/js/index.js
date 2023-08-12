const swiper = new Swiper('.hero__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 'auto',
  
    // If we need pagination
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.hero__button-next',
      prevEl: '.hero__button-prev',
    },

  });

  const swiper2 = new Swiper('.news__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 20,
  
  

  });

  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();

  
  const swiper3 = new Swiper('.advertising__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 20,
  
  

  });

  document.addEventListener('DOMContentLoaded', function() {
    var inputField = document.querySelector('.form-control');
    var modalBtn = document.querySelector('.modal__btn');
  
    inputField.addEventListener('input', function() {
      if (inputField.value.trim().length > 0) {
        modalBtn.removeAttribute('disabled');
        modalBtn.setAttribute('data-bs-toggle', 'modal');
        modalBtn.setAttribute('data-bs-target', '#formsend');
        modalBtn.setAttribute('aria-label', "Close");
        modalBtn.setAttribute('data-bs-dismiss', "modal");
        
        
      } else {
        modalBtn.setAttribute('disabled', 'disabled');
      }
    });
  });
  