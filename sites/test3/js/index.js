let cityChose = document.getElementById('cityChose');
let cityModal = document.getElementById('cityModal');
let modalClose2 = document.getElementById('modalClose2')
let body = document.querySelector('body')


let overlay = document.getElementById('overlay');
let modal = document.getElementById('modal')
let modalClose = document.getElementById('modalClose');
let btns = document.querySelectorAll('.btn')
let modalBtn = document.querySelector('.modal__btn')
let modalTitle = document.getElementById('modalTitle')
let modalForm = document.querySelector('.modal__form')
let heroInput = document.querySelector('.hero__input').value
let modalTextarea = document.querySelector('.modal__textarea')

let heroBtns = document.querySelectorAll('.hero__btn')

cityChose.addEventListener('click', function() {

    cityModal.style.display = 'block'
    cityModal.style.animation = 'scaler .25s ease'
    overlay.style.display = 'block'
    body.style.overflow = 'hidden'
})

document.querySelectorAll('.city-modal__btn-2.district').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        
   
        document.querySelectorAll('.modal__list > li > ul').forEach(ul => {
            ul.classList.remove('active');
        });
        
        
        const targetUl = document.getElementById(targetId);
        if (targetUl) {
            targetUl.classList.add('active');
        }
    });
});

document.querySelectorAll('.city-modal__btn-2.region1').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        

        document.querySelectorAll('.cites').forEach(ul => {
            ul.classList.remove('active');
        });
        
     
        const targetUl = document.getElementById(targetId);
        if (targetUl) {
            targetUl.classList.add('active');
        }
    });
});


document.querySelectorAll('.district').forEach(function(district) {
    district.addEventListener('click', function() {

        document.querySelectorAll('.district').forEach(function(el) {
            el.classList.remove('active-district');
        });
        
   
        this.classList.add('active-district');
    });
});

document.querySelectorAll('.region1').forEach(function(region1) {
    region1.addEventListener('click', function() {
    
        document.querySelectorAll('.region1').forEach(function(el) {
            el.classList.remove('active-region1');
        });
        
   
        this.classList.add('active-region1');
    });
});

let cites = document.querySelectorAll('.cites button')

cites.forEach(function(city) {
    city.addEventListener('click', function() {
        cityModal.style.animation = 'scalerReverse .25s ease forwards';
        cityChose.textContent = city.textContent;
        setTimeout(() => {
            
            cityModal.style.display = 'none'
            overlay.style.display = 'none'
            body.style.overflow = 'auto'
        }, 300);

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
    cityModal.style.animation = 'scalerReverse .25s ease forwards'
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
    autoHeight: true,

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

  heroBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        overlay.style.display = 'block';
        modal.style.animation = 'scaler .25s ease';
        modal.style.display = 'block';
        body.style.overflow = 'hidden';

        
        transferValue2(btn.textContent);
    });
});

function transferValue2(text) {
    document.querySelector('.modal__textarea').value = text;
}

  function transferValue() {
    var heroInputValue = document.querySelector('.hero__input').value; 
    document.querySelector('.modal__textarea').value = heroInputValue;
}

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

overlay.addEventListener('click', function() {
    modal.style.animation = 'scalerReverse .25s ease forwards'
    cityModal.style.animation = 'scalerReverse .25s ease forwards';
    setTimeout(() => {
        overlay.style.display = 'none';
        modal.style.display = 'none';
        body.style.overflow = 'auto'
        cityModal.style.display = 'none';
        modalTitle.style.display = 'none'
        modalForm.style.display = 'flex'
    }, 300);
})




function sendFormData(event) {
    event.preventDefault(); 
        modalTitle.style.display = 'block'
        modalForm.style.display = 'none'

    const userText = document.querySelector('.modal__textarea').value;
    const userDate = document.querySelector('input[type="date"]').value;
    const userPhone = document.querySelector('input[data-target="phone"]').value;

    console.log('Phone:', userPhone);

    const telegramToken = '7158661251:AAEx49clSzviscV7xTHMnqwRdthek0kz7OE'; 
    const chatId = '469972293'; 

    const telegramMessage = `Запрос: ${userText}\nДата: ${userDate}\nТелефон: ${userPhone}`;

    fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
        })
    })
    .then(response => response.json())
    document.querySelector('.modal__textarea').value = '';
    document.querySelector('input[type="date"]').value = '';
    document.querySelector('input[name="phone"]').value = '';
}