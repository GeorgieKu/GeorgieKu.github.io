document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("open-modal-btn").addEventListener("click", function() {
        document.getElementById("my-modal").classList.add("open")
    })
    
    // Закрыть модальное окно
    document.getElementById("close-my-modal-btn").addEventListener("click", function() {
        document.getElementById("my-modal").classList.remove("open")
    })
    
    // Закрыть модальное окно при нажатии на Esc
    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            document.getElementById("my-modal").classList.remove("open")
        }
    });
    
    // Закрыть модальное окно при клике вне его
    document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
        event._isClickWithInModal = true;
    });
    document.getElementById("my-modal").addEventListener('click', event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open');
    });
    
    });

    const leftMenuBtn = document.getElementById('left_menu_btn');
    const leftMenu = document.getElementById('left_menu');

    leftMenuBtn.addEventListener('click', () => {
        leftMenu.classList.toggle('active');
        leftMenuBtn.classList.toggle('cross');
    });

    $(document).ready(function() {
        $('.js-example-basic-single').select2();
    });

    const input = document.getElementById('In');
const minMaxUnFocus = document.getElementById('minMaxUnFocus');
const minMax = document.getElementById('minMax');

input.addEventListener('focus', () => {
  minMaxUnFocus.style.display = 'none';
  minMax.style.display = 'flex';
});

input.addEventListener('blur', () => {
  minMaxUnFocus.style.display = 'block';
  minMax.style.display = 'none';
});

const input2 = document.getElementById('Out');
const minMaxUnFocus2 = document.getElementById('minMaxUnFocus-2');
const minMax2 = document.getElementById('minMax-2');

input2.addEventListener('focus', () => {
  minMaxUnFocus2.style.display = 'none';
  minMax2.style.display = 'flex';
});

input2.addEventListener('blur', () => {
  minMaxUnFocus2.style.display = 'block';
  minMax2.style.display = 'none';
});

