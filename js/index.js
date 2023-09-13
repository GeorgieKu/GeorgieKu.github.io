
document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { // объявляем функцию followCursor
      const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором
  
      window.addEventListener('mousemove', e => { // при движении курсора
        const target = e.target // определяем, где находится курсор
        if (!target) return
  
        if (target.closest('a')) { // если курсор наведён на ссылку
          el.classList.add('follow-cursor_active') // элементу добавляем активный класс
        } else { // иначе
          el.classList.remove('follow-cursor_active') // удаляем активный класс
        }
  
        el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
        el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
      })
    }
  
    followCursor() // вызываем функцию followCursor


  })


  const checkbox = document.querySelector('#checkbox1');
const body = document.querySelector('.body');
const titles = document.querySelectorAll('.title');
const subtitle = document.querySelector('.header__subtitle');
const lines = document.querySelectorAll('.header__line')
const expirienceTechs = document.querySelectorAll('.expirience__tech')

checkbox.addEventListener('change', function() {
if (this.checked) {
body.style.backgroundColor = 'rgb(15, 23, 42)'; // если переключатель включен, меняем цвет заголовка на белый
body.style.color = "rgb(148, 163, 184)"
titles.forEach(title => {
  title.style.color = 'rgb(226, 232, 240)'; // изменение цвета заголовка на черный
});
lines.forEach(line => {
  line.style.backgroundColor = 'rgb(226, 232, 240)'; 
});
expirienceTechs.forEach(expirienceTech => {
  expirienceTech.style.backgroundColor = 'rgba(45, 212, 191, 0.1);'; 
});
subtitle.style.color = "rgb(148, 163, 184)"

} else {
body.style.backgroundColor = '#ffefd5'; // если переключатель выключен, меняем цвет заголовка на черный

body.style.color = "#654321"
titles.forEach(title => {
  title.style.color = '#000'; // изменение цвета заголовка на черный
});
lines.forEach(line => {
  line.style.backgroundColor = '#000'; // изменение цвета заголовка на черный
});
expirienceTechs.forEach(expirienceTech => {
  expirienceTech.style.backgroundColor = 'rgba(0, 0, 128, 0.3)'; 
});
subtitle.style.color = "#654321"

}
});


