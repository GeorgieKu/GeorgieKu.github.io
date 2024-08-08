let cityChose = document.getElementById('cityChose');
let cityModal = document.getElementById('cityModal');
let cityModalClose = document.getElementById('cityModalClose');
let cityModalClose2 = document.getElementById('cityModalClose2');
let body = document.querySelector('body')


let overlay = document.getElementById('overlay');
let modal = document.getElementById('modal')
let modalClose = document.getElementById('modalClose');
let btns = document.querySelectorAll('.btn')
let modalBtn = document.querySelector('.modal__btn')
let modalTitle = document.getElementById('modalTitle')
let modalForm = document.querySelector('.modal__form')

cityChose.addEventListener('click', function() {
    cityModal.style.display = 'block'
    overlay.style.display = 'block'
    body.style.overflow = 'hidden'
})

document.querySelectorAll('.city-modal__btn-2.district').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        
        // Скрываем все списки регионов
        document.querySelectorAll('.modal__list > li > ul').forEach(ul => {
            ul.classList.remove('active');
        });
        
        // Показываем нужный список регионов
        const targetUl = document.getElementById(targetId);
        if (targetUl) {
            targetUl.classList.add('active');
        }
    });
});

document.querySelectorAll('.city-modal__btn-2.region1').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        
        // Скрываем все списки городов
        document.querySelectorAll('.cites').forEach(ul => {
            ul.classList.remove('active');
        });
        
        // Показываем нужный список городов
        const targetUl = document.getElementById(targetId);
        if (targetUl) {
            targetUl.classList.add('active');
        }
    });
});


document.querySelectorAll('.district').forEach(function(district) {
    district.addEventListener('click', function() {
        // Убираем класс active-district со всех элементов .district
        document.querySelectorAll('.district').forEach(function(el) {
            el.classList.remove('active-district');
        });
        
        // Добавляем класс active-district к текущему элементу
        this.classList.add('active-district');
    });
});

document.querySelectorAll('.region1').forEach(function(region1) {
    region1.addEventListener('click', function() {
        // Убираем класс active-region1 со всех элементов .region1
        document.querySelectorAll('.region1').forEach(function(el) {
            el.classList.remove('active-region1');
        });
        
        // Добавляем класс active-region1 к текущему элементу
        this.classList.add('active-region1');
    });
});

let cites = document.querySelectorAll('.cites button')

cites.forEach(function(city) {
    city.addEventListener('click', function() {
        cityChose.textContent = city.textContent;
        cityModal.style.display = 'none'
        overlay.style.display = 'none'
           body.style.overflow = 'auto'
    })
})

let cityModalBtns = document.querySelectorAll('.city-modal__btn');

cityModalBtns.forEach(function(cityModalBtn) {
    cityModalBtn.addEventListener('click', function() {
        cityChose.textContent = cityModalBtn.textContent;
        cityModal.style.display = 'none'
        overlay.style.display = 'none'
           body.style.overflow = 'auto'
    })
})

modalClose2.addEventListener('click', function() {
    modal.style.animation = 'scalerReverse .25s ease forwards'
    setTimeout(() => {
        overlay.style.display = 'none';
        cityModal.style.display = 'none';
           body.style.overflow = 'auto'
    }, 300);
})

const swiper = new Swiper('.reviews__swiper', {
    slidesPerView: 5, 
    centeredSlides: true, 
    loop: true, 
    slideToClickedSlide: true, 
    spaceBetween: 36,

    navigation: {
        nextEl: '.reviews__btn-next',
        prevEl: '.reviews__btn-prev',
      },
      breakpoints: {
        1500: {
            slidesPerView: 5, 
        },
        992: {
            slidesPerView: 3, 
        },
        320: {
            slidesPerView: 'auto', 
        }
      }
  });

 




  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        overlay.style.display = 'block';
        modal.style.animation = 'scaler .25s ease'
        modal.style.display = 'block';
           body.style.overflow = 'hidden'
    })
  });

  modalClose.addEventListener('click', function() {
    modal.style.animation = 'scalerReverse .25s ease forwards'
    setTimeout(() => {
        overlay.style.display = 'none';
        modal.style.display = 'none';
        body.style.overflow = 'auto'

         modalTitle.style.display = 'none'
            modalForm.style.display = 'flex'
    }, 300);
})

modalBtn.addEventListener('click', function() {
    event.preventDefault();
    modalTitle.style.display = 'block'
    modalForm.style.display = 'none'
})