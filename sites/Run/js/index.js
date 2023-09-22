// Получаем все элементы с классом "burg"
const burg = document.querySelector('.burg');


burg.addEventListener('click', () => {

  if (burg.classList.contains('clicked')) {
    burg.classList.remove('clicked');
  }
  else {
    burg.classList.add('clicked');
  }
  
 

  
})

if (document.body.classList.contains('.main-page')) {
  var mainBlock = document.getElementById('main');
  var btnUp = document.querySelector('.btn-up');
  
  // Функция для проверки видимости блока с id "main"
  function isMainBlockVisible() {
    var rect = mainBlock.getBoundingClientRect();
    var windowHeight = window.innerHeight;
  
    return (
      rect.top >= 0 &&
      rect.bottom <= windowHeight
    );
  }
  
  // Функция для обработки события прокрутки страницы
  function handleScroll() {
    if (isMainBlockVisible()) {
      btnUp.style.display = 'none';
    } else {
      btnUp.style.display = 'block';
    }
  }
  
  // Добавляем обработчик события прокрутки страницы
  window.addEventListener('scroll', handleScroll);
  
  // Скрываем кнопку изначально
  btnUp.style.display = 'none';
  
  // Добавляем обработчик события клика на кнопку
  btnUp.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

}

