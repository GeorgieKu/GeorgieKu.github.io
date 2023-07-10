document.addEventListener("DOMContentLoaded", function () {
    let textInput = document.querySelectorAll('.text-input');
    const textarea = document.querySelector('.textarea-input');
    
    function getClassForFormInputs () {
        let colorSubstrat = document.querySelectorAll('.input-substrate');
        const textareaSubstrat = document.querySelector('.input-substrate-textarea');
        colorSubstrat.forEach((item, i, arr) => {
            arr[i].addEventListener('click', function () {
                item.classList.add('input-substrate-green');
            });
        });
        textarea.addEventListener('click', function () {
            textareaSubstrat.classList.add('input-substrate-green');
        });
        
    }
    getClassForFormInputs();
});