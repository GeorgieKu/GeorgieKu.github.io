document.addEventListener("DOMContentLoaded", function () {
    // Инициализация airDatepicker без timepicker
    // Функция для заполнения <select> элементами
    function fillTimeSelect(select, start, end) {
        for (let i = start; i <= end; i++) {
            let value = i.toString().padStart(2, '0');
            let option = new Option(value, value);
            select.appendChild(option);
        }
    }

    // Заполняем селекты часами и минутами
    fillTimeSelect(document.getElementById('hour-start'), 0, 23);
    fillTimeSelect(document.getElementById('hour-end'), 0, 23);
    fillTimeSelect(document.getElementById('minute-start'), 0, 59);
    fillTimeSelect(document.getElementById('minute-end'), 0, 59);
});

const input = document.getElementById("datepicker-input");

document.addEventListener("DOMContentLoaded", function () {

    new AirDatepicker('#datepicker-container', {
        inline: false, // Календарь всегда видим
        isMobile: false, // Отключаем мобильную версию
        position: 'center', // Можно менять позицию, если нужно
        buttons: [
            {
                content: 'Отмена', // Твой текст для кнопки
                className: 'custom-cancel-btn',
                onClick: (dp) => dp.hide() // Действие при клике (скрыть календарь)
            },
            {
                content: 'Применить', // Твой текст для кнопки
                className: 'custom-apply-btn',
                onClick: (dp) => dp.update({selectedDates: dp.selectedDates}) // Применить выбор
            }
        ],
    });
});

let datepicker = document.getElementById('datepicker');

datepicker.addEventListener('click', function() {
    let datepickerContainer = document.getElementById('datepicker-container');
    datepickerContainer.style.display = 'block';

    let customApplyBtn = document.querySelector('.custom-apply-btn');

    customApplyBtn.addEventListener('click', function() {
        let datepickerContainer = document.getElementById('datepicker-container');
        datepickerContainer.style.display = 'none';
    
        // Получаем выбранный день
        let selectedDay = document.querySelector('.-selected-')?.textContent || "";
    
        // Получаем выбранный месяц и год
        let monthYearElement = document.querySelector('.air-datepicker-nav--title');
        let selectedMonthYear = monthYearElement ? monthYearElement.textContent : "";
    
        // Получаем выбранные часы и минуты для начала и конца
        let startHour = document.getElementById('hour-start').value || "00";
        let startMinute = document.getElementById('minute-start').value || "00";
        let endHour = document.getElementById('hour-end').value || "00";
        let endMinute = document.getElementById('minute-end').value || "00";
    
        // Вставляем в input дату и время
        const input = document.getElementById("datepicker");
        input.value = `${selectedDay} ${selectedMonthYear} ${startHour}:${startMinute} - ${endHour}:${endMinute}`;
    });

let customCancelBtn = document.querySelector('.custom-cancel-btn');
customCancelBtn.addEventListener('click', function() {
    let datepickerContainer = document.getElementById('datepicker-container');
    datepickerContainer.style.display = 'none';
})

})

