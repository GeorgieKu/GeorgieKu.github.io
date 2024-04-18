document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open")
    })
})

function openAcc(toggleButton, content, toggleArrow) {
    toggleButton.addEventListener('click', function() {
        content.classList.toggle('open');
        toggleArrow.classList.toggle('rotate');
        
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let toggleButtons = document.querySelectorAll('.acc');
    let contents = document.querySelectorAll('.content');
    
    toggleButtons.forEach((toggleButton, index) => {
        let toggleArrow = toggleButton.querySelector('svg');
        openAcc(toggleButton, contents[index], toggleArrow);
    });
});





let buttons = document.querySelectorAll('.button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Проверяем, есть ли у элемента класс 'checked'
        let isChecked = button.classList.contains('checked');

        if (!isChecked) {
            // Если элемент не был отмечен, добавляем класс 'checked'
            button.classList.add('checked');
            let gal = button.querySelector('.gal');
            gal.style.display = 'block';
        } else {
            // Если элемент был отмечен, удаляем класс 'checked'
            button.classList.remove('checked');
            let gal = button.querySelector('.gal');
            gal.style.display = 'none';
        }
    });
});

const swiper = new Swiper('.basic-swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 12,

  });

  document.addEventListener("DOMContentLoaded", function() {
    // Находим все элементы с классом "tooltip-trigger"
    const tooltipTriggers = document.querySelectorAll(".tooltip-trigger");

    // Перебираем все найденные элементы
    tooltipTriggers.forEach(function(trigger) {
        // Находим элемент с классом "tooltip-text" (подсказка)
        const tooltipText = trigger.nextElementSibling;

        // Добавляем обработчик события наведения мыши на элемент
        trigger.addEventListener("mouseover", function() {
            tooltipText.style.visibility = "visible";
            tooltipText.style.opacity = "1";
        });

        // Добавляем обработчик события ухода мыши с элемента
        trigger.addEventListener("mouseout", function() {
            tooltipText.style.visibility = "hidden";
            tooltipText.style.opacity = "0";
        });
    });
});