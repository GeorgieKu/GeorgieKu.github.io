// Получаем все кнопки "Подробнее"
var buttons = document.getElementsByClassName("practicePage__link");

// Перебираем все кнопки и добавляем обработчик события клика
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {


    if (this.innerText === "Подробнее") {
        // Находим элемент с классом "practicePage__text-4" внутри текущей карточки
    var textBlock = this.parentNode.querySelector(".practicePage__text-4");
    // Присваиваем ему значение "display: block"
    textBlock.style.display = "block";

    // Находим изображение с классом "practicePage__img" внутри текущей карточки
    var image = this.parentNode.parentNode.querySelector(".practicePage__img");
    // Увеличиваем размер изображения
    image.style.maxWidth = '50%'

    this.innerText = "Скрыть";
    } else {
            // Находим элемент с классом "practicePage__text-4" внутри текущей карточки
            var textBlock = this.parentNode.querySelector(".practicePage__text-4");
            // Присваиваем ему значение "display: block"
            textBlock.style.display = "none";
        
            // Находим изображение с классом "practicePage__img" внутри текущей карточки
            var image = this.parentNode.parentNode.querySelector(".practicePage__img");
            // Увеличиваем размер изображения
            image.style.maxWidth = '197px'

            this.innerText = "Подробнее";
        
    }
    
  });
}

document.getElementById("burger").addEventListener("click", function() {
  document.querySelector("header").classList.toggle("open")
})