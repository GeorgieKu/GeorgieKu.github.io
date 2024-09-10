document.addEventListener('DOMContentLoaded', function () {

    //Аккардеон
    let toggleButtons = document.querySelectorAll('.acc');
    let contents = document.querySelectorAll('.content');
    let accBlocks = document.querySelectorAll('.faq__flex ul li');
    
    toggleButtons.forEach((toggleButton, index) => {
        let toggleArrow = toggleButton.querySelector('button');
        let accBlock = accBlocks[index];
        openAcc(toggleButton, contents[index], toggleArrow, accBlock);
    });
    
    function openAcc(toggleButton, content, toggleArrow, accBlock) {
        toggleButton.addEventListener('click', function () {
            content.classList.toggle('open');
            toggleArrow.classList.toggle('rotate');
    
            // Добавляем или убираем класс с бордером у accBlock
            if (content.classList.contains('open')) {
                accBlock.classList.add('has-border');
            } else {
                accBlock.classList.remove('has-border');
            }
        });
    }
    
    //Чекбоксы
    document.querySelectorAll('.custom-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', function (event) {
            event.preventDefault();

            const hiddenInput = this.querySelector('.hidden-checkbox');
            const checkboxElement = this.querySelector('.checkbox');

            if (hiddenInput.checked) {
                hiddenInput.checked = false;
                checkboxElement.classList.remove('active');
            } else {
                hiddenInput.checked = true;
                checkboxElement.classList.add('active');
            }
        });
    });

    //Слайдеры
    const sliderEl2 = document.querySelector("#range2");
    const sliderValue2 = document.querySelector(".value2");

    const updateSliderValue2 = (value) => {
        sliderValue2.textContent = value.toLocaleString('de-DE');
    };

    updateSliderValue2(Number(sliderEl2.value));

    sliderEl2.addEventListener("input", (event) => {
        const tempSliderValue = Number(event.target.value);
        updateSliderValue2(tempSliderValue);

        const progress = (tempSliderValue / sliderEl2.max) * 100;

        sliderEl2.style.background = `linear-gradient(to right, rgba(39, 191, 201, 1) ${progress}%, rgba(229, 231, 236, 1) ${progress}%)`;
    });


    const sliderEl3 = document.querySelector("#range3");
    const sliderValue3 = document.querySelector(".value3");

    const updateSliderValue3 = (value) => {
        const months = value;
        sliderValue3.textContent = `${months} Months`;
    };

    updateSliderValue3(Number(sliderEl3.value));

    sliderEl3.addEventListener("input", (event) => {
        const tempSliderValue = Number(event.target.value);
        updateSliderValue3(tempSliderValue);

        const progress = (tempSliderValue / sliderEl3.max) * 100;

        sliderEl3.style.background = `linear-gradient(to right, rgba(39, 191, 201, 1) ${progress}%, rgba(229, 231, 236, 1) ${progress}%)`;
    });
});