
  let cardsAmount = document.getElementById('cardsAmount');

  function decreaseCardsAmount() {
    let currentAmount = parseInt(localStorage.getItem('cardsAmount')) || 0;
    if (currentAmount > 0) {
      currentAmount--;
      localStorage.setItem('cardsAmount', currentAmount);
      cardsAmount.textContent = currentAmount;
    }
  }
  
  function startCountdown() {
    setInterval(decreaseCardsAmount, 7000);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    let storedAmount = localStorage.getItem('cardsAmount');
    if (storedAmount) {
      cardsAmount.textContent = storedAmount;
    } else {
      localStorage.setItem('cardsAmount', 36); // Начальное значение cardsAmount
      cardsAmount.textContent = 36;
    }
    
    startCountdown();
  });

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})

function openAcc(toggleButton, content, toggleArrow) {
    toggleButton.addEventListener('click', function() {
        content.classList.toggle('open');
        toggleArrow.classList.toggle('rotate');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let toggleButtons = document.querySelectorAll('.deatails__btn');
    let contents = document.querySelectorAll('.content');
    let toggleArrows = document.querySelectorAll('.deatails__btn img');
    
    toggleButtons.forEach((toggleButton, index) => {
        openAcc(toggleButton, contents[index], toggleArrows[index]);
    });
});

// Получаем информацию о стране пользователя
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    // Получаем код страны пользователя
    const countryCode = data.country_code.toUpperCase();
    console.log(countryCode)
    
    // Создаем элемент img для отображения флага
    const flagImg = document.getElementById('flag');
    flagImg.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    
 
  })
  .catch(error => {
    console.error('Ошибка получения информации о стране:', error);
  });
  
  // Получаем информацию о стране пользователя
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    // Получаем код страны пользователя
    const countryCode = data.country_code.toUpperCase();
    console.log(countryCode)
    
    // Создаем элемент img для отображения флага
    const flagImg = document.getElementById('flag2');
    flagImg.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    
 
  })
  .catch(error => {
    console.error('Ошибка получения информации о стране:', error);
  });

  const swiper = new Swiper('.reviews__swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerView: 'auto',
    // autoHeight: true,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev',
    },
  
  });

let openCartModalBtn = document.getElementById('openCartModal')
let cartmodal = document.getElementById('cartModal')
let body = document.querySelector('body')
let closeBtn = document.getElementById('close')

openCartModalBtn.addEventListener('click', function() {
    body.style.overflow = 'hidden'
    cartmodal.style.display = 'block'
})


function closeModal() {
    body.style.overflow = 'auto'
    cartmodal.style.display = 'none'
}

function waitOn() {
  let text = "Wait"
  let pointCount = 0
  var i = setInterval(function () {
      var newText = text
      for (let i = 0; i <= pointCount; i++) {
          newText += "."
      }
      document.getElementById("startBtn").text = newText;
      pointCount++
      if (pointCount > 3) {
          pointCount = 0
      }
  }, 200);
}

let notification = document.querySelector('.notification');
let notificationClose = document.querySelector('.notification__closeIcon')

window.addEventListener('load', function() {
  setTimeout(() => {
    notification.style.display = 'block'
    notification.style.animation = 'fadeIn 1s ease'
   
  }, 5000);
  setTimeout(() => {
    notification.style.animation = 'fadeOut 1s ease'
   
  }, 10000);
  setTimeout(() => {
    notification.style.display = 'none'
   
  }, 11000);
  notificationClose.addEventListener('click', function() {
    notification.style.display = 'none'

  })
})