document.addEventListener("DOMContentLoaded", function () {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const inputEmail = document.querySelector('.text-input-email');
    const borderEmail = document.querySelector('.input-substrate-email');
    const validationEmailText = document.createElement('div');
                validationEmailText.classList.add('error');
                validationEmailText.style.display = 'none';
                validationEmailText.textContent = "Please, enter your email";
                borderEmail.parentNode.append(validationEmailText);
    function onInput() {
            if (isEmailValid(inputEmail.value)) {
                borderEmail.style.backgroundColor = '#00FF38';
                validationEmailText.style.display = 'none';
            } else if(inputEmail.value == "") {
                borderEmail.style.backgroundColor = 'red';
                validationEmailText.style.display = 'block';
            } else {
                borderEmail.style.backgroundColor = 'red';
                validationEmailText.style.display = 'block';
            }
        }

        inputEmail.addEventListener('input', onInput);

        function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }
});