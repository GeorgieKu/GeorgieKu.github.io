const swiper = new Swiper('.iren__swiper', {

  direction: 'horizontal',
  loop: false,
  

  pagination: {
    el: '.swiper-pagination',
  },

});

const swiper2 = new Swiper('.iren__swiper2', {

  direction: 'horizontal',
  loop: false,
  

  navigation: {
    nextEl: '.iren__swiper-button-next',
    prevEl: '.iren__swiper-button-prev',
  },

});

var input = document.querySelector("#phone");
window.intlTelInput(input, {

  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});

window.addEventListener('DOMContentLoaded', function() {
  var timerBlock = document.querySelector('.timer__block');
  var minuteSpan = timerBlock.querySelector('.timer__hour:first-child');
  var secondSpan = timerBlock.querySelector('.timer__hour:last-child');
  
  // Получаем текущее время и устанавливаем начальные значения таймера
  var currentTime = new Date();
  var endTime;
  var remainingTime;

  if (localStorage.getItem('timerEndTime')) {
    // Если время окончания таймера сохранено в localStorage, используем его
    endTime = new Date(localStorage.getItem('timerEndTime'));
    remainingTime = Math.max(endTime.getTime() - Date.now(), 0);
  } else {
    // В противном случае устанавливаем новое время окончания таймера
    endTime = new Date(currentTime.getTime() + 59 * 60 * 1000 + 59 * 1000); // Текущее время + 59 минут 59 секунд
    remainingTime = Math.max(endTime.getTime() - Date.now(), 0);
    localStorage.setItem('timerEndTime', endTime);
  }

  updateTimerDisplay();

  // Функция обновления отображения таймера
  function updateTimerDisplay() {
    var minutes = Math.floor(remainingTime / (60 * 1000));
    var seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

    minuteSpan.textContent = minutes.toString().padStart(2, '0');
    secondSpan.textContent = seconds.toString().padStart(2, '0');
  }

  // Функция запуска автоматического обратного отсчета
  function startTimer() {
    updateTimerDisplay();
    setInterval(function() {
      remainingTime = Math.max(remainingTime - 1000, 0);
      updateTimerDisplay();
      
      // Сохраняем время окончания таймера в localStorage
      localStorage.setItem('timerEndTime', endTime);
    }, 1000);
  }

  startTimer();
});



