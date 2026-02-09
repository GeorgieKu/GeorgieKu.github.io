

const swiper1 = new Swiper('.news-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.news-pag',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

});



// Получаем ссылки на кнопки навигации
const prevButton = document.querySelector('.swiper-prev');
const nextButton = document.querySelector('.swiper-next');

// Получаем экземпляр Swiper
const swiper = new Swiper('.swiper-index', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pag',
    clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
},

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

});

// Обработчик события для кнопки "Prev"
prevButton.addEventListener('click', () => {
  swiper.slidePrev();
});

// Обработчик события для кнопки "Next"
nextButton.addEventListener('click', () => {
  swiper.slideNext();
});