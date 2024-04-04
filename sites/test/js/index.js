document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
      document.querySelector("header").classList.toggle("open")
  })
})

const swiper = new Swiper('.reviews__swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 12,
  navigation: {
    nextEl: '.reviews__btn-next',
    prevEl: '.reviews__btn-prev',
  },

});

var swiper2 = new Swiper('.portfolio__swiper', {
  direction: 'horizontal',
  loop: false, // Отключить циклическую прокрутку
  slidesPerView: 1, // Показывать только один слайд
  spaceBetween: 20, // Промежуток между слайдами
  navigation: {
    nextEl: '.portfolio__btn-next',
    prevEl: '.portfolio__btn-prev',
  },
});



let footerBtn = document.querySelector('.footer__btn')

footerBtn.addEventListener('click', function() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
})

