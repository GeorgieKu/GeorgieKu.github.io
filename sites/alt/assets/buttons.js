document.addEventListener("DOMContentLoaded", function () {
    let checbox = document.querySelectorAll('.checkbox-input');
    const formButton = document.querySelectorAll('.feedback-btn');
    function chooseChec (trigger) {
        checbox.forEach((item, i, arr) => {
            arr[i].addEventListener(trigger , function () {
                item.classList.toggle('checkbox-input_black');
                item.classList.toggle('checkbox-input_green');
            });
        });
        
    }
    chooseChec('click');
    chooseChec('touched');
    function clearCheck (trigger) {
        formButton.forEach((item, i, arr) => {
            arr[i].addEventListener(trigger , function () {
                checbox.forEach(item => {
                    item.classList.remove('checkbox-input_black');
                    item.classList.remove('checkbox-input_green');
                });
            })
        })
        
    }

    clearCheck ('click');
    clearCheck ('touched');
}); 