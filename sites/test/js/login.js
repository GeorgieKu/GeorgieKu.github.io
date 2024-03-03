let modalOpen = document.getElementById('modalOpen')
let loginModal = document.getElementById('loginModal')
let loginOverflow = document.getElementById('loginOverflow')
let enterBtn = document.getElementById('enterBtn')
let registrBtn = document.getElementById('registrBtn')
let modalLoginForm = document.getElementById('modalLoginForm')
let modalRegiserForm = document.getElementById('modalRegisterForm')
let closeBtns = document.querySelectorAll('.modal__btn-3')
let loginBtn = document.getElementById('loginBtn')
let resetbtn = document.getElementById('resetBtn')
let passwodResetModal = document.getElementById('passwodResetModal')
let passwordResetBtn = document.getElementById('passwordResetBtn')
let modalRegistrBtn = document.getElementById('modalRegistrBtn')

modalOpen.addEventListener('click', function () {
    loginModal.style.display = 'block'
    loginOverflow.style.display = 'block'
})

registrBtn.addEventListener('click', function () {
    modalLoginForm.style.display = 'none'
    enterBtn.classList.remove('modal__btn_active')
    modalRegiserForm.style.display = 'block'
    registrBtn.classList.add('modal__btn_active')

})

enterBtn.addEventListener('click', function () {
    modalRegiserForm.style.display = 'none'
    registrBtn.classList.remove('modal__btn_active')
    modalLoginForm.style.display = 'block'
    enterBtn.classList.add('modal__btn_active')
})


closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
        loginModal.style.display = 'none'
        loginOverflow.style.display = 'none'
    })
})

resetbtn.addEventListener('click', function () {
    loginModal.style.display = 'none'
    passwodResetModal.style.display = 'block'
})


let cancelBtn = document.getElementById('cancelBtn')
            
                cancelBtn.addEventListener('click', function () {
                    passwodResetModal.style.display = 'none'
                  
                })


loginBtn.addEventListener('click', function () {
    let modalInputs = document.querySelectorAll('.modalLogin__form .modal__input');
    let bigError = document.getElementById('bigError')
    modalInputs.forEach(input => {
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error')) {
            errorElement = document.createElement('div');
            errorElement.classList.add('error');
            input.parentNode.insertBefore(errorElement, input.nextSibling);
            input.style.border = '1px solid #EC2A00'
            input.style.marginBottom = 'unset'
        }

        if (input.value.trim() === '') {
            errorElement.textContent = 'Это поле обязательно для заполнения';
            bigError.textContent = 'Заполните, пожалуйста, все поля'

        } else {
            errorElement.textContent = '';
            bigError.textContent = ''
            input.style.border = ''
            input.style.marginBottom = ''
        }
    });
});


(function () {
    'use strict';

    // Получаем все формы, к которым мы хотим применить пользовательские стили валидации Bootstrap
    var forms = document.querySelectorAll('.needs-validation');

    // Проходим по каждой форме и предотвращаем ее отправку в случае невалидности
    Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                let passwordText = document.querySelector('.password__text');
                passwordText.textContent = 'На указанную почту отправлена ссылка для восстановления пароля';

                let emailModal = document.getElementById('email')
                emailModal.style.display = 'none'
                passwordResetBtn.style.display = 'none'
                var passwordResetForm = document.querySelector('.password-reset-form');


                let cancelBtn = document.getElementById('cancelBtn')
                cancelBtn.textContent = 'Ок'
                cancelBtn.style.backgroundColor = '#000'
                cancelBtn.style.padding = '10.5px 0'
                cancelBtn.style.width = "100%"
                cancelBtn.style.color = '#fff'
                cancelBtn.addEventListener('click', function () {
                    passwodResetModal.style.display = 'none'
                    cancelBtn.textContent = 'Отменить'
                    cancelBtn.style.backgroundColor = ''
                    cancelBtn.style.padding = ''
                    cancelBtn.style.width = ""
                    cancelBtn.style.color = ''
                    passwordResetBtn.style.display = 'block'
                    passwordText.textContent = 'Введите почту, которую вы указывали при регистрации';
                })
            }

            form.classList.add('was-validated');
        }, false);
    });
})();

loginBtn.addEventListener('click', function () {
    let modalInputs = document.querySelectorAll('.modalLogin__form .modal__input');
    let bigError = document.getElementById('bigError')
    modalInputs.forEach(input => {
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error')) {
            errorElement = document.createElement('div');
            errorElement.classList.add('error');
            input.parentNode.insertBefore(errorElement, input.nextSibling);
            input.style.border = '1px solid #EC2A00'
            input.style.marginBottom = 'unset'
        }

        if (input.value.trim() === '') {
            errorElement.textContent = 'Это поле обязательно для заполнения';
            bigError.textContent = 'Заполните, пожалуйста, все поля'

        } else {
            errorElement.textContent = '';
            bigError.textContent = ''
            input.style.border = ''
            input.style.marginBottom = ''
        }
    });
});

modalRegistrBtn.addEventListener('click', function (event) {
    // Предотвращаем отправку формы по умолчанию

    let modalInputs = document.querySelectorAll('.modalRegiserForm .modal__input');
    let bigError = document.getElementById('bigError-2');
    let modalCheck = document.getElementById('modalCheck-2');
    let inputsChecked = true;

    modalInputs.forEach(input => {
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error')) {
            errorElement = document.createElement('div');
            errorElement.classList.add('error');
            input.parentNode.insertBefore(errorElement, input.nextSibling);
            input.style.border = '1px solid #EC2A00';
            input.style.marginBottom = 'unset';
        }

        if (input.value.trim() === '') {

            errorElement.textContent = 'Поле обязательно к заполнению';
            bigError.textContent = 'Заполните, пожалуйста, все поля';
            inputsChecked = false;
        } else {
            errorElement.textContent = '';
            input.style.border = '';
            input.style.marginBottom = '';
            bigError.textContent = ""
            inputsChecked = true;
        }
    });
    let modalInputRegistrPassword = document.getElementById('modalInputRegistrPassword').value
    let modalInputRegistrPasswordRepeat = document.getElementById('modalInputRegistrPasswordRepeat').value
    let errorMessage4 = document.getElementById('bigError-4')
    let passwordsSuccsess = false;
    if (modalInputRegistrPassword !== modalInputRegistrPasswordRepeat) {
        errorMessage4.textContent = 'Пароли не совпадают';
    }
    else {
        errorMessage4.textContent = '';
        passwordsSuccsess = true;
    }
    let errorMessage = document.getElementById('bigError-3')
    if (!modalCheck.checked) {
        errorMessage.textContent = 'Для регистрации необходимо принять согласие с политикой конфиденциальности';
    } else {
        errorMessage.textContent = '';
    }
    console.log(inputsChecked)
    console.log(modalCheck.checked)
    console.log(passwordsSuccsess)

    if (inputsChecked && modalCheck.checked && passwordsSuccsess) {
        loginModal.style.display = 'none'
        let succsessModal = document.getElementById('succsessModal');
        succsessModal.style.display = 'block';
        let cancelBtn2 = document.getElementById('cancelBtn-2')
        cancelBtn2.addEventListener('click', function () {
            succsessModal.style.display = 'none'
        })
    }
});