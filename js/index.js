const swiper = new Swiper('.reviews__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 48,
    
});

// Получить элементы input и span
const input = document.getElementById("calculation__input");
const span = document.getElementById("my-span");

// Добавить обработчик события "input" на input
input.addEventListener("input", function() {
  // Получить значение input и умножить его на 4
  const value = input.value * 4;
  
  // Вывести результат в span
  span.textContent = value;
});