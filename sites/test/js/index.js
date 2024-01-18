const swiper = new Swiper('.section__swiper', {
  // Optional parameters
  direction: 'horizontal',
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 20,

    },
    972: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  },

  // If we need pagination
  pagination: {
    el: '.section-pagination',

  },
  on: {
    init: function () {
      // Устанавливаем активные точки в соответствии с текущим слайдом
      for (var i = 0; i < this.params.slidesPerView; i++) {
        this.pagination.bullets[i].classList.add('swiper-pagination-bullet-active');
      }
    },
    slideChange: function () {
      // Сбрасываем все точки пагинации
      for (var i = 0; i < this.pagination.bullets.length; i++) {
        this.pagination.bullets[i].classList.remove('swiper-pagination-bullet-active');
      }

      // Устанавливаем активные точки в соответствии с текущим слайдом
      for (var i = 0; i < this.params.slidesPerView; i++) {
        this.pagination.bullets[this.activeIndex + i].classList.add('swiper-pagination-bullet-active');
      }
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.section-button-next',
    prevEl: '.section-button-prev',
  },

});

// Выбор темы
let lightTheme = document.getElementById('light-theme')
let darkTheme = document.getElementById('dark-theme')

lightTheme.addEventListener('click', function () {
  lightTheme.classList.add('create__btn_active')
  darkTheme.classList.remove('create__btn_active')

})

darkTheme.addEventListener('click', function () {
  darkTheme.classList.add('create__btn_active')
  lightTheme.classList.remove('create__btn_active')

})

// Выбор шрифта

let select = document.getElementById('select');
let phoneText = document.querySelector('.phone__text');
let phoneText2 = document.querySelector('.phone__text-2');
let phoneText3 = document.querySelector('.phone__text-3');
let phoneCoins = document.querySelector('.phone__coins')
let phoneBtns = document.querySelector('.phone__buttons')
let phoneCards = document.querySelector('.phone__cards')
let phoneCells = document.querySelector('.phone__cells')


select.addEventListener('change', function () {
  // Получаем выбранное значение
  let selectedFont = select.value;

  // Изменяем шрифт элемента phone__text
  phoneText.style.fontFamily = selectedFont;
  phoneText2.style.fontFamily = selectedFont;
  phoneText3.style.fontFamily = selectedFont;
  phoneCoins.style.fontFamily = selectedFont;
  phoneBtns.style.fontFamily = selectedFont;
  phoneCards.style.fontFamily = selectedFont;
  phoneCells.style.fontFamily = selectedFont;
});

//Расположение карточек

let gridBtn = document.getElementById('grid');
let listBtn = document.getElementById('list')
let phoneCard3 = document.querySelectorAll('.phone__card-3')
let phoneCell = document.querySelectorAll('.phone__cell')
let phoneMenu = document.querySelector('.phone__menu')
let createBtnSvg = document.querySelectorAll('.create__btn-svg path')
let createBtnSvg2 = document.querySelectorAll('.create__btn-svg-2 path')

gridBtn.addEventListener('click', function () {
  gridBtn.classList.add('create__btn_active')
  listBtn.classList.remove('create__btn_active')
  createBtnSvg.forEach(function (svg) {
    svg.style.fill = '#0B0B0B'
  })
  createBtnSvg2.forEach(function (svg2) {
    svg2.style.fill = '#CDCDCD'
  })
  phoneCells.style.flexDirection = ''
  phoneCells.style.alignItems = ''
  createBlock.style.overflow = ''
  phoneCells.style.maxWidth = ''
  phoneCard3.forEach(function (card3) {
    card3.style.width = ''
    card3.style.backgroundColor = ''
    card3.style.textAlign = ''
    card3.style.borderRadius = ''
  })
  phoneMenu.style.position = ''
  phoneMenu.style.bottom = ''
  phoneCell.forEach(function (cell) {
    cell.style.maxWidth = ''
    cell.style.width = ''
  })

})

listBtn.addEventListener('click', function () {
  listBtn.classList.add('create__btn_active')
  gridBtn.classList.remove('create__btn_active')
  createBtnSvg.forEach(function (svg) {
    svg.style.fill = '#CDCDCD'
  })
  createBtnSvg2.forEach(function (svg2) {
    svg2.style.fill = '#0B0B0B'
  })

  phoneCells.style.flexDirection = 'column'
  phoneCells.style.alignItems = 'center'
  createBlock.style.overflow = 'hidden'
  phoneCells.style.maxWidth = 'unset'
  phoneCard3.forEach(function (card3) {
    card3.style.width = '100%'
    card3.style.backgroundColor = '#F7F7F3'
    card3.style.textAlign = 'center'
    card3.style.borderRadius = '12px'
  })
  phoneMenu.style.position = 'absolute'
  phoneMenu.style.bottom = '0'
  phoneCell.forEach(function (cell) {
    cell.style.maxWidth = 'unset'
    cell.style.width = '100%'
  })

})

//Выбор цвета


let white = document.getElementById('white');
let gray = document.getElementById('gray');
let orange = document.getElementById('orange');
let blue = document.getElementById('blue');
let purple = document.getElementById('purple');

let createBlock = document.querySelector('.create__block');

// Функция для удаления класса active у всех элементов
function removeActiveClass() {
  white.classList.remove('create__color-btn_active');
  gray.classList.remove('create__color-btn_active');
  orange.classList.remove('create__color-btn_active');
  blue.classList.remove('create__color-btn_active');
  purple.classList.remove('create__color-btn_active');
}

white.addEventListener('click', function () {
  createBlock.style.backgroundColor = '#fff';
  removeActiveClass();
  white.classList.add('create__color-btn_active');
});

gray.addEventListener('click', function () {
  createBlock.style.backgroundColor = '#D0CDC0';
  removeActiveClass();
  gray.classList.add('create__color-btn_active');
});

orange.addEventListener('click', function () {
  createBlock.style.backgroundColor = '#FF9800';
  removeActiveClass();
  orange.classList.add('create__color-btn_active');
});

blue.addEventListener('click', function () {
  createBlock.style.backgroundColor = '#0691F2';
  removeActiveClass();
  blue.classList.add('create__color-btn_active');
});

purple.addEventListener('click', function () {
  createBlock.style.backgroundColor = '#A7A1F1';
  removeActiveClass();
  purple.classList.add('create__color-btn_active');
});

//Выбор радиуса


let inputNumber = document.querySelector('.create__input');
let phoneCard = document.querySelector('.phone__card');
let phoneCard2 = document.querySelector('.phone__card-2');
let phoneImgs = document.querySelectorAll('.phone__img');
let radiusShow = document.querySelector('.create__radius-show')

inputNumber.addEventListener('input', function () {
  // Получаем значение из инпута
  let borderRadiusValue = inputNumber.value + 'px';

  phoneCard.style.borderRadius = borderRadiusValue;
  phoneCard2.style.borderTopLeftRadius = borderRadiusValue;
  phoneCard2.style.borderBottomLeftRadius = borderRadiusValue;
  radiusShow.style.borderRadius = borderRadiusValue;

  phoneCard3.forEach(function (card3) {
    card3.style.borderRadius = borderRadiusValue;
  })

  phoneImgs.forEach(function (img) {
    img.style.borderRadius = borderRadiusValue;
  });

});