const dateInputs = document.querySelectorAll('.date__input');

dateInputs.forEach(function (dateInput) {

    dateInput.setAttribute('type', 'text');


    new AirDatepicker(dateInput, {
        dateFormat: 'dd.MM.yyyy',

        onSelect: function (formattedDate) {

        }
    });
});

document.querySelectorAll('.multiple-selection .custom-checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', function (event) {
        event.preventDefault();

        const hiddenInput = this.querySelector('.hidden-checkbox');
        const checkboxElement = this.querySelector('.checkbox');

        // Тоглим состояние чекбокса
        if (hiddenInput.checked) {
            hiddenInput.checked = false;
            checkboxElement.classList.remove('active');
        } else {
            hiddenInput.checked = true;
            checkboxElement.classList.add('active');
        }
    });
});

document.querySelectorAll('.custom-checkbox-group .custom-checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', function (event) {
        event.preventDefault();

        const hiddenInput = this.querySelector('.hidden-checkbox');
        const checkboxElement = this.querySelector('.checkbox');

        if (hiddenInput.checked) {
            hiddenInput.checked = false;
            checkboxElement.classList.remove('active');
        } else {
            // Снимаем выбор со всех чекбоксов в этой группе
            this.closest('.custom-checkbox-group').querySelectorAll('.hidden-checkbox').forEach(input => {
                input.checked = false;
                input.nextElementSibling.classList.remove('active');
            });

            hiddenInput.checked = true;
            checkboxElement.classList.add('active');
        }
    });
});

let yes = document.querySelector('.yes-answer')
let no = document.querySelector('.no-answer')
let yesBlock = document.querySelector('.yes__flex')


yes.addEventListener('click', function () {
    yesBlock.style.display = 'flex'
    document.querySelector('.grid-open').classList.add('open')
    document.querySelector('.forms__card-5 .custom-checkbox-group').style.marginBottom = '24px'
})

no.addEventListener('click', function () {

    document.querySelector('.grid-open').classList.remove('open')
    yesBlock.style.display = 'none'
    document.querySelector('.forms__card-5 .custom-checkbox-group').style.marginBottom = '0px'

})

const fileUpload = document.getElementById('file-upload');
const fileListContainer = document.getElementById('file-list-container');

// Обработчик изменения (выбора) файлов
fileUpload.addEventListener('change', function () {
    const files = fileUpload.files;

    // Для каждого выбранного файла создаем новый элемент в списке
    for (let i = 0; i < files.length; i++) {
        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');

        const fileName = document.createElement('span');
        fileName.textContent = files[i].name;

        const removeButton = document.createElement('button');
        removeButton.addEventListener('click', function () {
            fileItem.remove();
        });

        fileItem.appendChild(fileName);
        fileItem.appendChild(removeButton);
        fileListContainer.appendChild(fileItem);
    }

    // Очищаем input после добавления файлов, чтобы можно было загружать те же файлы снова
    fileUpload.value = '';
});

const hiddenSelect = document.getElementById('hiddenSelect');
const customSelect = document.querySelector('.custom-select');
const customTrigger = customSelect.querySelector('.custom-select__trigger');
const customOptions = customSelect.querySelector('.custom-options');
const customOptionItems = customOptions.querySelectorAll('.custom-option');

// Показать/скрыть выпадающий список кастомного селекта
customTrigger.addEventListener('click', function () {
    customOptions.style.display = customOptions.style.display === 'flex' ? 'none' : 'flex';
});

// Обработка выбора опции
customOptionItems.forEach(function (option) {
    option.addEventListener('click', function () {
        const selectedValue = this.getAttribute('data-value');

        // Обновляем кастомный селект
        customTrigger.textContent = this.textContent;
        customTrigger.style.color = '#000'

        // Обновляем скрытый селект
        hiddenSelect.value = selectedValue;
        console.log(hiddenSelect.value)

        // Закрываем кастомный список опций
        customOptions.style.display = 'none';
    });
});

// Закрыть кастомный список, если клик вне него
document.addEventListener('click', function (e) {
    if (!customSelect.contains(e.target)) {
        customOptions.style.display = 'none';
    }
});

const hiddenSelect2 = document.getElementById('hiddenSelect2');
const customSelect2 = document.querySelector('.custom-select2');
const customTrigger2 = customSelect2.querySelector('.custom-select__trigger2');
const customOptions2 = customSelect2.querySelector('.custom-options2');
const customOptionItems2 = customOptions2.querySelectorAll('.custom-option2');

// Показать/скрыть выпадающий список кастомного селекта
customTrigger2.addEventListener('click', function () {
    customOptions2.style.display = customOptions2.style.display === 'flex' ? 'none' : 'flex';
});

// Обработка выбора опции
customOptionItems2.forEach(function (option) {
    option.addEventListener('click', function () {
        const selectedValue = this.getAttribute('data-value');

        // Обновляем кастомный селект
        customTrigger2.textContent = this.textContent;
        customTrigger2.style.color = '#000'

        // Обновляем скрытый селект
        hiddenSelect2.value = selectedValue;
        console.log(hiddenSelect2.value)

        // Закрываем кастомный список опций
        customOptions2.style.display = 'none';
    });
});


document.addEventListener('click', function (e) {
    if (!customSelect2.contains(e.target)) {
        customOptions2.style.display = 'none';
    }
});

let whereToSendChecks = document.querySelectorAll('.forms__card-8 .custom-checkbox');
let allChecks = document.querySelector('.all')
let price = document.getElementById('price')

whereToSendChecks.forEach(function(whereToSendCheck) {
    whereToSendCheck.addEventListener('click', function() {
        price.textContent = '499'
    })
})

allChecks.addEventListener('click', function() {
    price.textContent = '799'
})

