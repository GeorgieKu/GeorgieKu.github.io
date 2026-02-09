document.addEventListener('DOMContentLoaded', function() {

  var navbarToggler = document.querySelector('.navbar-toggler');
  var header = document.querySelector('.header');
  var navbarSvg = document.querySelector('.navbar-svg');

  function checkNavbarToggler() {
    var isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      header.style.backgroundColor = '#9FCFBC';
      navbarSvg.style.display = 'block';
    } else {
      // Если кнопка не удовлетворяет условиям, уберем цвет фона
      header.style.backgroundColor = '';
      navbarSvg.style.display = 'none';
    }
  }

  checkNavbarToggler(); // Проверяем состояние кнопки во время загрузки страницы

  navbarToggler.addEventListener('click', checkNavbarToggler);

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

 
     
    var inputField = document.querySelector('.form-control');
    var modalBtn = document.querySelector('.modal__btn');

    
  
  
    inputField.addEventListener('input', function() {
      if (inputField.value.trim().length > 0) {
        modalBtn.removeAttribute('disabled');
        modalBtn.setAttribute('data-bs-toggle', 'modal');
        modalBtn.setAttribute('data-bs-target', '#formsend');
        modalBtn.setAttribute('aria-label', "Close");
        modalBtn.setAttribute('data-bs-dismiss', "modal");
        
        modalBtn.addEventListener('click', function(event) {
          event.preventDefault();
        })
      } else {
        modalBtn.setAttribute('disabled', 'disabled');
      }
    });

    
    var form = document.querySelector('.fonoteka__form');
    var modalBtn1 = document.querySelector('.modal__btn-new');
  
    form.addEventListener('input', function() {
      var isValid = true; // Флаг для проверки валидности полей
  
      // Проверяем каждое поле формы на заполнение
      var inputFields = form.querySelectorAll('.modal__input');
      for (var i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value.trim() === '') {
          isValid = false;
          break;
        }
      }

      modalBtn1.addEventListener('click', function(event) {
        event.preventDefault();
      })
  
      if (isValid) {
        modalBtn1.setAttribute('data-bs-toggle', 'modal');
        modalBtn1.setAttribute('data-bs-target', '#formsend');
        modalBtn1.setAttribute('data-bs-dismiss', 'modal');
        modalBtn1.setAttribute('aria-label', 'Close');
      } else {
        modalBtn1.removeAttribute('data-bs-toggle');
        modalBtn1.removeAttribute('data-bs-target');
        modalBtn1.removeAttribute('data-bs-dismiss');
        modalBtn1.removeAttribute('aria-label');
      }
    });



      var formSendBtn = document.querySelector('.formsend__btn');

   
      formSendBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Можно добавить свою логику обработки нажатия кнопки здесь
    });

   
    });


  
  
