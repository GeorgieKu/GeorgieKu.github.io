const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,



  // Navigation arrows
  navigation: {
    nextEl: '.modal-button-next',
    prevEl: '.modal-button-prev',
  },


});

// Получаем все кнопки
const buttons = document.querySelectorAll('.modal-open-btn');

// Получаем модальное окно
const modal = document.querySelector('.modal');



// Добавляем обработчик событий для каждой кнопки
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Получаем id кнопки
    const id = button.id;

    // Прокручиваем слайдер до нужного слайда
    swiper.slideTo(id - 1);

    // Открываем модальное окно
    modal.style.display = 'block';

    // Добавляем стили для класса .overflow, если модальное окно открыто
    const overflow = document.querySelector('.overflow');
    overflow.style.overflow = 'hidden';
    overflow.style.backdropFilter = 'blur(5px)';
    overflow.style.backgroundColor = 'rgba(0,0,0,0.5)';
    overflow.style.position = 'absolute';
    overflow.style.width = '100%';
    overflow.style.height = '100%';
  });
});

// Закрываем модальное окно при клике вне его области или на .overflow
window.addEventListener('click', (event) => {
  if (event.target === modal || event.target.classList.contains('overflow')) {
    modal.style.display = 'none';

    // Удаляем стили для класса .overflow, если модальное окно закрыто
    const overflow = document.querySelector('.overflow');
    overflow.style.overflow = '';
    overflow.style.backdropFilter = '';
    overflow.style.backgroundColor = '';
    overflow.style.position = '';
    overflow.style.width = '';
    overflow.style.height = '';
  }
});