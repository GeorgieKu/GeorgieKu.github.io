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

modalOpen.addEventListener('click', function() {
    loginModal.style.display = 'block'
    loginOverflow.style.display = 'block'
})

registrBtn.addEventListener('click', function() {
    modalLoginForm.style.display = 'none'
    enterBtn.classList.remove('modal__btn_active')
    modalRegiserForm.style.display = 'block'
    registrBtn.classList.add('modal__btn_active')
    
})

enterBtn.addEventListener('click', function() {
    modalRegiserForm.style.display = 'none'
    registrBtn.classList.remove('modal__btn_active')
    modalLoginForm.style.display = 'block'
    enterBtn.classList.add('modal__btn_active')
})


closeBtns.forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        loginModal.style.display = 'none'
        loginOverflow.style.display = 'none'
    })
})

resetbtn.addEventListener('click', function() {
    loginModal.style.display = 'none'
    passwodResetModal.style.display = 'block'
})



loginBtn.addEventListener('click', function() {
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
                let passwordResetForm = document.getElementById('passwordResetForm')
                let redirectBtn = document.createElement('a')
                redirectBtn.classList.add('modal__btn-2', 'btn-reset')
                redirectBtn.textContent = 'Ок'
                redirectBtn.removeAttribute('type')

                passwordResetForm.appendChild(redirectBtn)
                let cancel = document.getElementById('cancel')
                cancel.style.display = 'none'
                
                redirectBtn.addEventListener('click', function() {
                    window.location.href = './password-reset.html'
                })
            }

            form.classList.add('was-validated');
        }, false);
    });
})();

loginBtn.addEventListener('click', function() {
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

