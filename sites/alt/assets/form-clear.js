document.addEventListener("DOMContentLoaded", function () {
 
    const formButton = document.querySelectorAll('.feedback-btn');
    let colorSub = document.querySelectorAll('.input-substrate');
    const borderMail = document.querySelector('.input-substrate-email');
    const textareaColorSub = document.querySelector('.input-substrate-textarea');
    let checbox = document.querySelectorAll('.checkbox-input');

    formButton.forEach((item, i, arr) => {
        arr[i].addEventListener('click', function () {
            checbox.forEach(item => {
                item.classList.remove('checkbox-input_black');
                item.classList.remove('checkbox-input_green');
            });
            colorSub.forEach(item => {
                item.classList.remove('input-substrate-green');
            });
            borderMail.style.backgroundColor = '#0D0C0B';
            textareaColorSub.classList.remove('input-substrate-green');
        });
    });
});