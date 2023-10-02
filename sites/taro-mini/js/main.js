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

  function countdown() {
    var hoursElement = document.getElementById("hours");
    var minutesElement = document.getElementById("minutes");

    var hours = parseInt(hoursElement.textContent);
    var minutes = parseInt(minutesElement.textContent);

    if (minutes === 0) {
        if (hours === 0) {
            // Отсчет завершен
            return;
        } else {
            hours--;
            minutes = 59;
        }
    } else {
        minutes--;
    }

    hoursElement.textContent = hours.toString().padStart(2, "0");
    minutesElement.textContent = minutes.toString().padStart(2, "0");

    // Сохраняем значения таймера в localStorage только при изменении
    if (minutes !== parseInt(localStorage.getItem("timerMinutes"))) {
        localStorage.setItem("timerHours", hours);
        localStorage.setItem("timerMinutes", minutes);
    }

    if (hours === 0 && minutes === 0) {
        // Если достигнуто значение 00:00, останавливаем таймер
        return;
    }

    setTimeout(countdown, 60000); // Обновление каждую минуту (60 000 миллисекунд)
}

// Извлекаем значения таймера из localStorage при загрузке страницы
var storedHours = localStorage.getItem("timerHours");
var storedMinutes = localStorage.getItem("timerMinutes");

if (storedHours !== null && storedMinutes !== null) {
    document.getElementById("hours").textContent = storedHours;
    document.getElementById("minutes").textContent = storedMinutes;
}

countdown();

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
