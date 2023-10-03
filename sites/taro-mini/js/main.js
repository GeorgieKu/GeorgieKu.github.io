const swiper = new Swiper('.needles__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 55,
    autoHeight: true,
  
 
    // Navigation arrows
    navigation: {
      nextEl: '.needles-btn-next',
      prevEl: '.needles-btn-prev',
    },
  

  });

  const swiper2 = new Swiper('.video__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 40,
 
    // Navigation arrows
    navigation: {
      nextEl: '.video-swiper-button-next',
      prevEl: '.video-swiper-button-prev',
    },
  

  });

  const swiper4 = new Swiper('.video__swiper-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 40,
 
    // Navigation arrows
    navigation: {
      nextEl: '.video-swiper-button-next-2',
      prevEl: '.video-swiper-button-prev-2',
    },
  

  });

  const swiper3 = new Swiper('.reviews__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    spaceBetween: 40,
 
    // Navigation arrows
    navigation: {
      nextEl: '.review-swiper-button-next',
      prevEl: '.review-swiper-button-prev',
    },
  

  });

  window.addEventListener('DOMContentLoaded', function() {
    var hoursSpan = document.getElementById('hours');
    var minutesSpan = document.getElementById('minutes');
    // Получаем текущее время и устанавливаем начальные значения таймера
    var currentTime = new Date();
    var endTime;
    var remainingTime;

    // Проверяем, есть ли значения в localStorage
    if (localStorage.getItem('endTime')) {
        endTime = new Date(localStorage.getItem('endTime'));
    } else {
        endTime = new Date(currentTime.getTime() + 12 * 60 * 60 * 1000);
    }

    updateTimerDisplay();

    // Функция обновления отображения таймера
    function updateTimerDisplay() {
        var currentTime = new Date();
        remainingTime = Math.max(endTime.getTime() - currentTime.getTime(), 0);
        var hours = Math.floor(remainingTime / (60 * 60 * 1000));
        var minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
        hoursSpan.textContent = hours;
        minutesSpan.textContent = minutes.toString().padStart(2, '0');
    }

    // Функция запуска автоматического обратного отсчета
    function startTimer() {
        updateTimerDisplay();
        setInterval(function() {
            remainingTime = Math.max(remainingTime - 60000, 0);
            updateTimerDisplay();
        }, 60000);
    }

    startTimer();

    // Сохраняем значение endTime в localStorage
    localStorage.setItem('endTime', endTime);
});

if (window.innerWidth > 576) {
  var playBtn = document.querySelector('.play-btn');
  var video = document.getElementById('video1');
  playBtn.addEventListener('click', function() {
    video.play();
    playBtn.style.display = 'none';
  });
  video.addEventListener('play', function() {
    playBtn.style.display = 'none';
  });
  video.addEventListener('pause', function() {
    playBtn.style.display = 'block';
  });

  var playBtn2 = document.querySelector('.play-btn2');
  var video2 = document.getElementById('video2');
  playBtn2.addEventListener('click', function() {
    video2.play();
    playBtn2.style.display = 'none';
  });
  video2.addEventListener('play', function() {
    playBtn2.style.display = 'none';
  });
  video2.addEventListener('pause', function() {
    playBtn2.style.display = 'block';
  });

  var playBtn3 = document.querySelector('.play-btn3');
  var video3 = document.getElementById('video3');
  playBtn3.addEventListener('click', function() {
    video3.play();
    playBtn3.style.display = 'none';
  });
  video3.addEventListener('play', function() {
    playBtn3.style.display = 'none';
  });
  video3.addEventListener('pause', function() {
    playBtn3.style.display = 'block';
  });

  var playBtn4 = document.querySelector('.play-btn4');
  var video4 = document.getElementById('video4');
  playBtn4.addEventListener('click', function() {
    video4.play();
    playBtn4.style.display = 'none';
  });
  video4.addEventListener('play', function() {
    playBtn4.style.display = 'none';
  });
  video4.addEventListener('pause', function() {
    playBtn4.style.display = 'block';
  });

  var playBtn5 = document.querySelector('.play-btn5');
  var video5 = document.getElementById('video5');
  playBtn5.addEventListener('click', function() {
    video5.play();
    playBtn5.style.display = 'none';
  });
  video5.addEventListener('play', function() {
    playBtn5.style.display = 'none';
  });
  video5.addEventListener('pause', function() {
    playBtn5.style.display = 'block';
  });

  var playBtn6 = document.querySelector('.play-btn6');
  var video6 = document.getElementById('video6');
  playBtn6.addEventListener('click', function() {
    video6.play();
    playBtn6.style.display = 'none';
  });
  video6.addEventListener('play', function() {
    playBtn6.style.display = 'none';
  });
  video6.addEventListener('pause', function() {
    playBtn6.style.display = 'block';
  });

  var playBtn7 = document.querySelector('.play-btn7');
  var video7 = document.getElementById('video7');
  playBtn7.addEventListener('click', function() {
    video7.play();
    playBtn7.style.display = 'none';
  });
  video7.addEventListener('play', function() {
    playBtn7.style.display = 'none';
  });
  video7.addEventListener('pause', function() {
    playBtn7.style.display = 'block';
  });
}

if (window.innerWidth < 576) {
  var video1 = document.getElementById('video1');
  var video2 = document.getElementById('video2');
  var video3 = document.getElementById('video3');
  var video4 = document.getElementById('video4');
  var video5 = document.getElementById('video5');
  var video6 = document.getElementById('video6');
  var video7 = document.getElementById('video7');

  video1.setAttribute('controls', 'controls');
  video2.setAttribute('controls', 'controls');
  video3.setAttribute('controls', 'controls');
  video4.setAttribute('controls', 'controls');
  video5.setAttribute('controls', 'controls');
  video6.setAttribute('controls', 'controls');
  video7.setAttribute('controls', 'controls');
}
