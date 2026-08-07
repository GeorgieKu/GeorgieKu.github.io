function initAjaxForm(form) {
    const submitBtn = form.querySelector('button');
    const originalBtnText = submitBtn ? submitBtn.textContent : '';
    const checkboxInput = form.querySelector('.agreement input[type="checkbox"]');
    const customCheckbox = form.querySelector('.custom__checkbox');

    let message = form.querySelector('.form-message');
    if (!message) {
        message = document.createElement('span');
        message.className = 'form-message';
        form.appendChild(message);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        message.textContent = '';
        message.classList.remove('form-message_error', 'form-message_success');

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if (checkboxInput && !checkboxInput.checked) {
            message.textContent = 'Отметьте согласие на обработку персональных данных';
            message.classList.add('form-message_error');
            if (customCheckbox) {
                customCheckbox.classList.add('custom__checkbox_error');
            }
            return;
        }

        const formData = new FormData(form);

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Отправка...';
        }

        fetch(form.getAttribute('action'), {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                message.textContent = data.message || (data.success ? 'Заявка отправлена' : 'Ошибка отправки');
                message.classList.add(data.success ? 'form-message_success' : 'form-message_error');

                if (data.success) {
                    form.reset();
                    const activeCheckbox = form.querySelector('.custom__checkbox_active');
                    if (activeCheckbox) {
                        activeCheckbox.classList.remove('custom__checkbox_active');
                    }
                }
            })
            .catch(() => {
                message.textContent = 'Ошибка отправки, попробуйте позже';
                message.classList.add('form-message_error');
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }
            });
    });
}

document.querySelectorAll('.modal__form, .results__form').forEach(initAjaxForm);

const resultsSwiper = new Swiper('.results__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 13,

    // Navigation arrows
    navigation: {
        nextEl: '.results__btn-next',
        prevEl: '.results__btn-prev',
    },
});


const storiesSwiper = new Swiper('.stories__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 37,

    breakpoints: {
        993: {
            slidesPerView: 4,
        },
        320: {
            slidesPerView: 'auto',
        }
    }


});

const photoSwiper = new Swiper('.photo__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 24,

    breakpoints: {
        993: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 'auto',
        }
    },
    pagination: {
        el: '.photo__pagination',
    },


});


const reputationSwiper = new Swiper('.reputation__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 40,

    navigation: {
        nextEl: '.reputation__btn-next',
        prevEl: '.reputation__btn-prev',
    },


});

const modal2 = document.getElementById('videoModal');
const modalVideo = modal2.querySelector('video');
const closeBtn = modal2.querySelector('.video-modal__close');
const overlay = modal2.querySelector('.video-modal__overlay');

document.querySelectorAll('.about__play').forEach(button => {
    button.addEventListener('click', () => {
        const video = button.parentElement.querySelector('video');

        modalVideo.src = video.src;
        modalVideo.poster = video.poster;

        modal2.classList.add('active');

        modalVideo.play();
    });
});

function closeModal() {
    modalVideo.pause();
    modal2.classList.remove('active');

    setTimeout(() => {
        modalVideo.currentTime = 0;
        modalVideo.removeAttribute('src');
        modalVideo.load();
    }, 300);
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal2.classList.contains('active')) {
        closeModal();
    }
});
let agreements = document.querySelectorAll('.agreement');

let modal = document.querySelector('.modal')


agreements.forEach((agreement) => {
    let customCheckbox = agreement.querySelector('.custom__checkbox')
    let checkboxInput = agreement.querySelector('input[type="checkbox"]')
    agreement.addEventListener('click', function () {
        customCheckbox.classList.toggle('custom__checkbox_active')
        customCheckbox.classList.remove('custom__checkbox_error')
        checkboxInput.checked = customCheckbox.classList.contains('custom__checkbox_active')
    })
})


function openModal() {
    modal.showModal()
}

function modalClose() {
    modal.close()
}
