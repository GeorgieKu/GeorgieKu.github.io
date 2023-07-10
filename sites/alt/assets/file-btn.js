document.addEventListener("DOMContentLoaded", function () {
 
    const fileButton = document.querySelector('.input__file-button');
    const textOnFileButton = document.querySelector('.input__file-button-text');
    const inputFile = document.querySelector('.input__file');
    const formButton = document.querySelectorAll('.feedback-btn');
    // $("#file-partners").change(function(){
    //     var filename = $(this).val().replace(/.*\\/, "") || 'Upload resume';
    //     $(".input__file-button-text").html(filename);
    // });
    inputFile.addEventListener('change', function() {
        let fileName = this.value.replace(/.*\\/, "") ||'Upload resume';
        textOnFileButton.innerHTML = fileName;
    });

    function changeFileButton (trigger) {
        trigger.addEventListener('click', function () {
            fileButton.classList.add('input__file-button_green');
            textOnFileButton.classList.add('input__file-button-text_black');
        });
    }
    changeFileButton(inputFile);
    changeFileButton(textOnFileButton);
    formButton.forEach((item, i, arr) => {
        arr[i].addEventListener('click', function () {
            textOnFileButton.classList.remove('input__file-button-text_black');
            textOnFileButton.textContent = 'Upload resume';
            fileButton.classList.remove('input__file-button_green');
        });
    });
    
});