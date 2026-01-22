    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("burger").addEventListener("click", function () {
            document.querySelector("header").classList.toggle("open")
        })
    })

    document.addEventListener('DOMContentLoaded', () => {
        // Получаем все элементы с классом custom-checkbox
        const customCheckboxes = document.querySelectorAll('.custom-checkbox');

        customCheckboxes.forEach(wrapper => {
            // 1️⃣ Создаём скрытый чекбокс, если его ещё нет
            let checkbox = wrapper.querySelector('.real-check');
            if (!checkbox) {
                checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'real-check';
                checkbox.style.display = 'none';
                wrapper.insertBefore(checkbox, wrapper.firstChild);
            }

            // 2️⃣ Получаем ссылки на SVG‑элементы
            const outerRect = wrapper.querySelector('.outer-rect');
            const tumbler = wrapper.querySelector('.tumbler');

            // 3️⃣ Функция, которая синхронизирует вид с состоянием чекбокса
            const syncView = () => {
                if (checkbox.checked) {
                    wrapper.classList.add('checked');
                    // При желании можно менять атрибуты SVG напрямую:
                    // outerRect.setAttribute('fill', '#FF5C00');
                    // tumbler.setAttribute('x', '3');
                } else {
                    wrapper.classList.remove('checked');
                    // outerRect.setAttribute('fill', '#99A2AD');
                    // tumbler.setAttribute('x', '17');
                }
            };

            // 4️⃣ Первоначальная синхронизация (на случай, если чекбокс изначально checked)
            syncView();

            // 5️⃣ Обработчик клика по всему контейнеру
            wrapper.addEventListener('click', (e) => {
                // Игнорируем клик, если он был на ссылке внутри <span>
                if (e.target.closest('a')) return;

                // Инвертируем состояние чекбокса
                checkbox.checked = !checkbox.checked;

                // Обновляем визуал
                syncView();

                // Генерируем событие change, чтобы форма/скрипты могли отреагировать
                checkbox.dispatchEvent(new Event('change'));
            });
        });
    });


    const swiper = new Swiper('.projects__swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 40,

        // Navigation arrows
        navigation: {
            nextEl: '.projects__next',
            prevEl: '.projects__prev',
        },

        breakpoints: {
            320: {
                slidePerView: 1,
            },
            576: {
                slidePerView: 'auto'
            }
        }
    });

    function openAcc(toggleButton, content, toggleArrow) {
        toggleButton.addEventListener('click', function () {
            content.classList.toggle('open');
            toggleArrow.classList.toggle('rotate');

        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        let toggleButtons = document.querySelectorAll('.acc');
        let contents = document.querySelectorAll('.faq__qusetion');

        toggleButtons.forEach((toggleButton, index) => {
            let toggleArrow = toggleButton.querySelector('svg');
            openAcc(toggleButton, contents[index], toggleArrow);
        });
    });

    function openModal() {
        let modal = document.querySelector('.modal');
        modal.showModal();

        // Добавляем обработчик при открытии (если его нет)
        modal.addEventListener('click', handleOutsideClick);
    }

    function handleOutsideClick(event) {
        let modal = document.querySelector('.modal');
        if (event.target === modal) {
            modal.close();
        }
    }

    let scrollBtn = document.querySelector('.footer__btn-2');

    if (scrollBtn) {
        scrollBtn.addEventListener('click', function (event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }