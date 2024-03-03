// Получаем кнопки и блоки
const cityBtn = document.querySelector('.filter-city__btn');
const cityFlex = document.querySelector('.filter__city-flex');
const sportBtn = document.querySelector('.filter-sport__btn');
const sportFlex = document.querySelector('.filter__sport-flex');
const typeBtn = document.querySelector('.filter-type__btn');
const typeFlex = document.querySelector('.filter__type-flex');
const clearBtn = document.querySelector('.filter-btn-clear');

// Обработчики событий для кнопок
cityBtn.addEventListener('click', () => {
  // Показываем блок filter__city-flex
  cityFlex.style.display = 'flex';
  // Скрываем остальные блоки
  sportFlex.style.display = 'none';
  typeFlex.style.display = 'none';

});

sportBtn.addEventListener('click', () => {
  // Показываем блок filter__sport-flex
  sportFlex.style.display = 'flex';
  // Скрываем остальные блоки
  cityFlex.style.display = 'none';
  typeFlex.style.display = 'none';

});

typeBtn.addEventListener('click', () => {
  // Показываем блок filter__type-flex
  typeFlex.style.display = 'flex';
  // Скрываем остальные блоки
  cityFlex.style.display = 'none';
  sportFlex.style.display = 'none';

});

// Обработчики событий для кнопок внутри блока filter__city-flex
const cityButtons = document.querySelectorAll('.filter__city');
cityButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Получаем текст кнопки
    const buttonText = button.textContent;
    // Перемещаем текст кнопки в filter-city__btn
    cityBtn.textContent = buttonText;
    // Изменяем цвет кнопки на #8F8E00
    cityBtn.style.color = '#8F8E00';
    // Скрываем блок filter__city-flex
    cityFlex.style.display = 'none';
      clearBtn.style.display = 'flex'
  });
});

// Обработчики событий для кнопок внутри блока filter__city-flex
const typeButtons = document.querySelectorAll('.filter__type');
typeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Получаем текст кнопки
    const buttonText = button.textContent;
    // Перемещаем текст кнопки в filter-type__btn
    typeBtn.textContent = buttonText;
    // Изменяем цвет кнопки на #8F8E00
    typeBtn.style.color = '#8F8E00';
    // Скрываем блок filter__type-flex
    typeFlex.style.display = 'none';
      clearBtn.style.display = 'flex'
  });
});

// Обработчики событий для кнопок внутри блока filter__city-flex
const sportButtons = document.querySelectorAll('.filter__sport');
sportButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Получаем текст кнопки
    const buttonText = button.textContent;
    // Перемещаем текст кнопки в filter-sport__btn
    sportBtn.textContent = buttonText;
    // Изменяем цвет кнопки на #8F8E00
    sportBtn.style.color = '#8F8E00';
    // Скрываем блок filter__sport-flex
    sportFlex.style.display = 'none';
      clearBtn.style.display = 'flex'
  });
});

clearBtn.addEventListener('click', () => {
    cityBtn.textContent = 'Город';
    cityBtn.style.color = '#000';

    typeBtn.textContent = 'Тип соревнования';
    typeBtn.style.color = '#000';

    sportBtn.textContent = 'Вид спорта';
    sportBtn.style.color = '#000';
    clearBtn.style.display = 'none'
})

