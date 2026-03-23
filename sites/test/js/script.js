function openModal() {
    const dialog = document.getElementById('requestDialog');
    if (!dialog) return;

    // showModal доступен в большинстве современных браузеров
    if (typeof dialog.showModal === 'function') {
        if (!dialog.open) dialog.showModal();
    } else {
        dialog.setAttribute('open', '');
    }

    const closeBtn = dialog.querySelector('[data-close-dialog]');
    if (closeBtn) closeBtn.focus();
}

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.relaized__swiper', {
        loop: false,
        spaceBetween: 24,
        navigation: {
            nextEl: '.realized__btn_next',
            prevEl: '.realized__btn_prev',
        },
    });

    // Поддерживаем несколько одинаковых форм на одной странице
    document.querySelectorAll('.callback__form').forEach((form) => {
        const connectSelect = form.querySelector('select[name="connect"]');
        const contactLabel = form.querySelector('[data-contact-label]');
        const contactInput = form.querySelector('input[name="number"]');

        if (!connectSelect || !contactLabel) return;

        const updateLabel = () => {
            const isEmail = connectSelect.value === 'email';
            contactLabel.textContent = isEmail ? 'Почта:' : 'Телефон:';

            if (contactInput) {
                contactInput.placeholder = isEmail ? 'Почта' : 'Телефон';
            }
        };

        connectSelect.addEventListener('change', updateLabel);
        updateLabel(); // корректная подпись при первой отрисовке
    });

    // Управление dialog-окном (закрытие по крестику и клику по фону)
    const dialog = document.getElementById('requestDialog');
    if (dialog) {
        const closeBtn = dialog.querySelector('[data-close-dialog]');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                dialog.close();
            });
        }

        dialog.addEventListener('click', (e) => {
            if (e.target === dialog && typeof dialog.close === 'function') {
                dialog.close();
            }
        });
    }
});

    document.addEventListener("DOMContentLoaded", function () {
        const header = document.querySelector("header");
        const burger = document.getElementById("burger");

        if (burger) {
            burger.addEventListener("click", function () {
                header.classList.toggle("open");
            });
        }

    });    