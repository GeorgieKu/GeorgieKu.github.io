const swiper = new Swiper('.section__swiper', {
    // Optional parameters
    direction: 'horizontal',
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        577: {
            slidesPerView: 'auto',
            spaceBetween: 20,
        }
    },
  
    // If we need pagination
    pagination: {
      el: '.section-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.section-button-next',
      prevEl: '.section-button-prev',
    },
  
  });

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
  
  white.addEventListener('click', function() {
    createBlock.style.backgroundColor = '#fff';
    removeActiveClass();
    white.classList.add('create__color-btn_active');
  });
  
  gray.addEventListener('click', function() {
    createBlock.style.backgroundColor = '#D0CDC0';
    removeActiveClass();
    gray.classList.add('create__color-btn_active');
  });
  
  orange.addEventListener('click', function() {
    createBlock.style.backgroundColor = '#FF9800';
    removeActiveClass();
    orange.classList.add('create__color-btn_active');
  });
  
  blue.addEventListener('click', function() {
    createBlock.style.backgroundColor = '#0691F2';
    removeActiveClass();
    blue.classList.add('create__color-btn_active');
  });
  
  purple.addEventListener('click', function() {
    createBlock.style.backgroundColor = '#A7A1F1';
    removeActiveClass();
    purple.classList.add('create__color-btn_active');
  });

  let select = document.getElementById('select');
    let phoneText = document.querySelector('.phone__text');
    let phoneText2 = document.querySelector('.phone__text-2');
    let phoneText3 = document.querySelector('.phone__text-3');
    let phoneCoins = document.querySelector('.phone__coins')
    let phoneBtns = document.querySelector('.phone__buttons')
    let phoneCards = document.querySelector('.phone__cards')
    let phoneCells = document.querySelector('.phone__cells')


select.addEventListener('change', function() {
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

let inputNumber = document.querySelector('.create__input');
let phoneCard = document.querySelector('.phone__card');
let phoneCard2 = document.querySelector('.phone__card-2');
let phoneImgs = document.querySelectorAll('.phone__img');

inputNumber.addEventListener('input', function() {
  // Получаем значение из инпута
  let borderRadiusValue = inputNumber.value + 'px';

phoneCard.style.borderRadius = borderRadiusValue;
phoneCard2.style.borderTopLeftRadius = borderRadiusValue;
phoneCard2.style.borderBottomLeftRadius = borderRadiusValue;

phoneImgs.forEach(function(img) {
    img.style.borderRadius = borderRadiusValue;
  });

});