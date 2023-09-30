

// Получаем ссылки на кнопки навигации
const prevButton = document.querySelector('.swiper-prev');
const nextButton = document.querySelector('.swiper-next');

// Получаем экземпляр Swiper
const swiper = new Swiper('.swiper', {
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

// Получаем список всех элементов product__item
const productItems = document.getElementsByClassName('product__item');

// Получаем список всех блоков product__first-block
const productBlocks = document.getElementsByClassName('product__first-block');

// Скрываем все блоки, кроме первого, и удаляем класс active
for (let i = 1; i < productBlocks.length; i++) {
  const block = productBlocks[i];
  block.style.display = 'none';
  block.classList.remove('active');
}

// Обрабатываем клик по каждому элементу
for (let i = 0; i < productItems.length; i++) {
  const item = productItems[i];
  item.addEventListener('click', function() {
    // Удаляем класс active у всех элементов li
    for (let j = 0; j < productItems.length; j++) {
      productItems[j].classList.remove('active');
    }
    
    // Добавляем класс active только выбранному элементу li
    this.classList.add('active');
    
    // Получаем значение атрибута data-block-id для выбранного элемента
    const selectedBlockId = this.getAttribute('data-block-id');

    // Скрываем все блоки и удаляем класс active
    for (let j = 0; j < productBlocks.length; j++) {
      const block = productBlocks[j];
      block.style.display = 'none';
      block.classList.remove('active');
    }

    // Отображаем выбранный блок и добавляем класс active
    const selectedBlock = document.getElementById(selectedBlockId);
    selectedBlock.style.display = 'block';
    selectedBlock.classList.add('active');
  });
}