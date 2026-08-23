
// свайперы, которые нужны только на мобильной вёрстке:
// создаём и уничтожаем по медиазапросу, чтобы на десктопе теги просто переносились строками
function createResponsiveSwiper(selector, mediaQuery, options) {
    if (!document.querySelector(selector)) return;

    const media = matchMedia(mediaQuery);
    let instance = null;

    function toggle() {
        if (media.matches && !instance) {
            instance = new Swiper(selector, options)
        } else if (!media.matches && instance) {
            instance.destroy(true, true)
            instance = null
        }
    }

    toggle()
    media.addEventListener('change', toggle)
}

// «С какой задачей вы пришли?»: тег выбирает ролик из папки video.
// Меняем src у превью и data-video у кнопки play, чтобы модалка открыла тот же ролик
document.addEventListener('DOMContentLoaded', function () {
    const tabs = Array.from(document.querySelectorAll('.services__tab'));
    const block = document.querySelector('.services__video-block');

    if (!tabs.length || !block) return;

    const preview = block.querySelector('video');
    const playButton = block.querySelector('.services__play');

    function setVideo(src, title) {
        if (preview && preview.getAttribute('src') !== src) {
            // прячем кадр на время загрузки: размеры блока держит CSS, поэтому вёрстка не двигается
            preview.classList.add('is-loading')

            preview.addEventListener('loadeddata', function () {
                preview.classList.remove('is-loading')
            }, {
                once: true
            })

            preview.addEventListener('error', function () {
                preview.classList.remove('is-loading')
            }, {
                once: true
            })

            preview.setAttribute('src', src)
            preview.load()
        }

        if (playButton) {
            playButton.dataset.video = src
            playButton.setAttribute('aria-label', 'Смотреть видео: ' + title)
        }
    }

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (item) {
                const active = item === tab;

                item.classList.toggle('services__tag_active', active)
                item.setAttribute('aria-pressed', String(active))
            })

            setVideo(tab.dataset.video, tab.textContent.trim())
        })
    })

    const initial = tabs.find(function (tab) {
        return tab.classList.contains('services__tag_active')
    }) || tabs[0];

    setVideo(initial.dataset.video, initial.textContent.trim())
});

// пороги совпадают с медиазапросами в стилях
createResponsiveSwiper('.services__swiper', '(max-width: 993px)', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 10,
})

createResponsiveSwiper('.results__swiper', '(max-width: 768px)', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 10,
})

const resultsSwiper2 = new Swiper('.results__swiper-2', {
    direction: 'horizontal',
    loop: false,
    // на мобилке слайд чуть уже экрана, чтобы был виден край следующего
    slidesPerView: 1.1,
    spaceBetween: 10,

    breakpoints: {
        769: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
    navigation: {
        nextEl: '.results__btn-next',
        prevEl: '.results__btn-prev',
    },
});

// «Результаты пациенток»: теги фильтруют слайды по data-category.
// Слайды не удаляем, а прячем классом и пересчитываем свайпер — так работают
// и стрелки, и ленивая загрузка картинок
document.addEventListener('DOMContentLoaded', function () {
    const tabs = Array.from(document.querySelectorAll('.results__tag'));
    const slides = Array.from(document.querySelectorAll('.results__slide'));
    const empty = document.querySelector('.results__empty');
    const navigation = document.querySelector('.results__navigation');

    if (!tabs.length || !slides.length) return;

    function applyFilter(category) {
        let visible = 0;

        slides.forEach(function (slide) {
            const match = category === 'all' || slide.dataset.category === category;

            slide.classList.toggle('results__slide_hidden', !match)

            if (match) visible++
        })

        if (empty) empty.hidden = visible > 0
        // одна работа — листать нечего, стрелки прячем
        if (navigation) navigation.hidden = visible < 2

        resultsSwiper2.update()
        resultsSwiper2.slideTo(0, 0)
    }

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (item) {
                const active = item === tab;

                item.classList.toggle('services__tag_active', active)
                item.setAttribute('aria-pressed', String(active))
            })

            applyFilter(tab.dataset.category)
        })
    })

    const initial = tabs.find(function (tab) {
        return tab.classList.contains('services__tag_active')
    }) || tabs[0];

    applyFilter(initial.dataset.category)
});

const storiesSwiper2 = new Swiper('.stories__swiper', {
    direction: 'horizontal',
    loop: false,
    // на мобилке слайд чуть уже экрана, чтобы был виден край следующего
    slidesPerView: 'auto',
    spaceBetween: 18,

    breakpoints: {
        769: {
            slidesPerView: 'auto',
            spaceBetween: 50,
        },
    },
    navigation: {
        nextEl: '.stories__btn-next',
        prevEl: '.stories__btn-prev',
    },
});

const doctorSwiper2 = new Swiper('.docotor__swiper', {
    direction: 'horizontal',
    loop: false,
    // на мобилке слайд чуть уже экрана, чтобы был виден край следующего
    slidesPerView: 'auto',
    spaceBetween: 12,

    breakpoints: {
        769: {
            slidesPerView: 4,
            spaceBetween: 36,
        },
    },

});

const reviewsSwiper = new Swiper('.reviews__swiper', {
    direction: 'horizontal',
    loop: false,
    // на мобилке слайд чуть уже экрана, чтобы был виден край следующего
    slidesPerView: 'auto',
    spaceBetween: 36,

    navigation: {
        nextEl: '.reviews__btn-next-2',
        prevEl: '.reviews__btn-prev-2',
    },

});

// внутренние слайдеры отзывов: по одному на каждую площадку.
// Строковый селектор взял бы только первый блок, поэтому инициализируем каждый
// со своими стрелками — иначе на 2ГИС и ydoc.kz листать было бы нечем
const reviewsSwipers = Array.from(document.querySelectorAll('.reviews__swiper-2')).map(function (el) {
    return new Swiper(el, {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 12,

        navigation: {
            nextEl: el.querySelector('.reviews__btn_next'),
            prevEl: el.querySelector('.reviews__btn_prev'),
        },
    })
});

// отзывы обрезаны по 8 строк — под теми, что не влезли, показываем «Читать полностью».
// Кнопки создаём здесь, чтобы они появлялись и у отзывов, добавленных в разметку позже
document.addEventListener('DOMContentLoaded', function () {
    const texts = Array.from(document.querySelectorAll('.reviews__swiper-2 p'));

    if (!texts.length) return;

    const toggles = new Map();

    function isClipped(text) {
        return text.scrollHeight > text.clientHeight + 1;
    }

    function setState(text, opened) {
        const button = toggles.get(text);

        text.classList.toggle('reviews__text_full', opened)

        if (button) {
            button.textContent = opened ? 'Свернуть' : 'Читать полностью'
            button.setAttribute('aria-expanded', String(opened))
        }

        // высота слайда изменилась — свайперу нужно пересчитать размеры
        const swiperEl = text.closest('.reviews__swiper-2');

        if (swiperEl && swiperEl.swiper) swiperEl.swiper.update()
    }

    function createToggle(text) {
        const button = document.createElement('button');

        button.type = 'button'
        button.className = 'reviews__more'
        button.textContent = 'Читать полностью'
        button.setAttribute('aria-expanded', 'false')

        button.addEventListener('click', function () {
            setState(text, !text.classList.contains('reviews__text_full'))
        })

        text.insertAdjacentElement('afterend', button)
        toggles.set(text, button)

        return button;
    }

    // кнопка нужна только там, где текст реально не помещается в 8 строк
    function refresh() {
        texts.forEach(function (text) {
            if (text.classList.contains('reviews__text_full')) return;

            const button = toggles.get(text) || (isClipped(text) ? createToggle(text) : null);

            if (button) button.hidden = !isClipped(text)
        })
    }

    refresh()

    // шрифты меняют высоту строк, поэтому пересчитываем после их загрузки
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh)

    let resizeTimer = null;

    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer)
        resizeTimer = setTimeout(refresh, 150)
    })

    // при листании отзывов в карточке сворачиваем раскрытый текст обратно
    document.querySelectorAll('.reviews__swiper-2').forEach(function (el) {
        if (!el.swiper) return;

        el.swiper.on('slideChange', function () {
            el.querySelectorAll('p.reviews__text_full').forEach(function (text) {
                setState(text, false)
            })
            refresh()
        })
    })
});

// аккордеон: контент ищем по aria-controls, порядок в разметке — запасной вариант
function getAccContent(toggleButton, fallback) {
    const controlled = toggleButton.getAttribute('aria-controls');

    return (controlled && document.getElementById(controlled)) || fallback || null;
}

// иконка «плюс/минус» переключается в CSS по aria-expanded
function setAccState(toggleButton, content, isOpen) {
    content.classList.toggle('open', isOpen);
    toggleButton.setAttribute('aria-expanded', String(isOpen));
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.acc');
    const contents = document.querySelectorAll('.content');

    toggleButtons.forEach((toggleButton, index) => {
        const content = getAccContent(toggleButton, contents[index]);

        if (!content) return;

        toggleButton.addEventListener('click', function () {
            setAccState(toggleButton, content, !content.classList.contains('open'))
        })
    });
});

// «Раскрыть всю таблицу»: разворачиваем все пункты и снимаем ограничение по высоте
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('price-toggle');
    const accordions = document.getElementById('price-accordions');

    if (!toggle || !accordions) return;

    const items = Array.from(accordions.querySelectorAll('.acc'));
    const label = toggle.querySelector('.price__btn-text');
    const arrow = toggle.querySelector('svg');
    const texts = {
        open: 'Раскрыть всю таблицу',
        close: 'Свернуть таблицу',
    };

    function isAllOpen() {
        return items.length > 0 && items.every(function (item) {
            return item.getAttribute('aria-expanded') === 'true'
        })
    }

    // подпись и стрелка кнопки всегда отражают текущее состояние таблицы
    function syncToggle() {
        const expanded = isAllOpen();

        toggle.setAttribute('aria-expanded', String(expanded))
        toggle.setAttribute('aria-label', expanded ? texts.close : texts.open)

        if (label) label.textContent = expanded ? texts.close : texts.open
        if (arrow) arrow.classList.toggle('rotate', expanded)
    }

    toggle.addEventListener('click', function () {
        const expand = !isAllOpen();

        items.forEach(function (item) {
            const content = getAccContent(item);

            if (content) setAccState(item, content, expand)
        })

        accordions.classList.toggle('price__accardeons_expanded', expand)
        syncToggle()

        // при сворачивании возвращаем пользователя к началу таблицы
        if (!expand) {
            window.scrollTo({
                top: accordions.getBoundingClientRect().top + window.pageYOffset - 120,
                behavior: 'smooth'
            })
        }
    })

    // одиночное раскрытие пункта тоже снимает обрезку, чтобы текст не прятался
    items.forEach(function (item) {
        item.addEventListener('click', function () {
            if (item.getAttribute('aria-expanded') === 'true') {
                accordions.classList.add('price__accardeons_expanded')
            } else if (!items.some(function (el) {
                    return el.getAttribute('aria-expanded') === 'true'
                })) {
                accordions.classList.remove('price__accardeons_expanded')
            }

            syncToggle()
        })
    })

    syncToggle()
});

const operationsSwiper = new Swiper('.operations__swiper', {
    direction: 'horizontal',
    loop: false,
    // на мобилке слайд чуть уже экрана, чтобы был виден край следующего
    slidesPerView: 1.2,
    spaceBetween: 12,

    breakpoints: {
        576: {
            slidesPerView: 1,

        },
    },

    navigation: {
        nextEl: '.operations__btn-next',
        prevEl: '.operations__btn-prev',
    },

});
let modal = document.querySelector('.modal');
let videoModal = document.querySelector('.video-modal');
let resetModalValidation = null;


function openModal() {
    modal.showModal()
}

function closeModal() {
    modal.close()

    if (resetModalValidation) resetModalValidation()
}

// видео берём из data-video кнопки, иначе — из <video> рядом с ней
function openVideoModal(button) {
    if (!videoModal) return;

    const player = videoModal.querySelector('.video-modal__video');
    // превью лежит в одном контейнере с кнопкой: и в услугах, и в историях, и в реабилитации
    const block = button.closest('.services__video-block, .stories__relative, .reabilitation__relative') ||
        button.parentElement;
    const preview = block ? block.querySelector('video') : null;
    const src = button.dataset.video || (preview ? preview.getAttribute('src') : '') || '';
    const poster = preview ? preview.getAttribute('poster') : '';

    // у ролика без своего постера постер снимаем, иначе останется кадр от предыдущего
    if (poster) {
        player.setAttribute('poster', poster)
    } else {
        player.removeAttribute('poster')
    }

    if (src && player.getAttribute('src') !== src) {
        player.setAttribute('src', src)
        player.load()
    }

    videoModal.showModal()

    const played = src ? player.play() : null;

    // автоплей может быть заблокирован браузером — тогда пользователь запустит ролик кнопкой плеера
    if (played && typeof played.catch === 'function') played.catch(function () {})
}

function closeVideoModal() {
    if (!videoModal) return;

    const player = videoModal.querySelector('.video-modal__video');

    player.pause()
    player.currentTime = 0
    videoModal.close()
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.modal__form');

    if (!form) return;

    const errorMessage = form.querySelector('.modal__form-error');
    const fields = Array.from(form.querySelectorAll('input[required]'));
    const formBlock = document.querySelector('.modal__form-block');
    const success = document.querySelector('.modal__success');

    // ссылки внутри label чекбокса не должны переключать сам чекбокс
    form.querySelectorAll('.checkbox a').forEach(function (link) {
        link.addEventListener('click', function (evt) {
            evt.stopPropagation()
        })
    })

    // рамку подсвечиваем у обёртки поля, а у чекбокса — у самого квадрата
    function getFieldBox(field) {
        return field.type === 'checkbox' ?
            field.closest('.custom-checkbox') :
            field.closest('.modal__input-wrapper')
    }

    function isFilled(field) {
        return field.type === 'checkbox' ? field.checked : field.value.trim() !== ''
    }

    function setFieldError(field, hasError) {
        const box = getFieldBox(field);

        if (box) box.classList.toggle('error', hasError)
    }

    function resetValidation() {
        fields.forEach(function (field) {
            setFieldError(field, false)
        })
        errorMessage.classList.remove('visible')
    }

    // возвращаем модалку к исходному состоянию: снова форма, без ошибок и старых значений
    function resetModal() {
        resetValidation()
        form.reset()
        formBlock.classList.remove('hidden')
        success.classList.remove('visible')
    }

    // после успешной отправки вместо формы показываем блок «Ваша заявка отправлена»
    function showSuccess() {
        formBlock.classList.add('hidden')
        success.classList.add('visible')
    }

    // как только поле заполнили — снимаем с него подсветку
    fields.forEach(function (field) {
        field.addEventListener(field.type === 'checkbox' ? 'change' : 'input', function () {
            if (!isFilled(field)) return;

            setFieldError(field, false)

            if (!form.querySelector('.error')) {
                errorMessage.classList.remove('visible')
            }
        })
    })

    form.addEventListener('submit', function (evt) {
        let firstInvalid = null;

        fields.forEach(function (field) {
            const invalid = !isFilled(field);

            setFieldError(field, invalid)

            if (invalid && !firstInvalid) firstInvalid = field
        })

        evt.preventDefault()

        if (firstInvalid) {
            errorMessage.classList.add('visible')
            firstInvalid.focus()
            return;
        }

        errorMessage.classList.remove('visible')

        // TODO: отправка данных формы на сервер
        showSuccess()
    })

    // видео-модалка: закрытие по клику на подложку и остановка ролика по Esc
    if (videoModal) {
        videoModal.addEventListener('click', function (evt) {
            if (evt.target === videoModal) closeVideoModal()
        })

        videoModal.addEventListener('cancel', function () {
            const player = videoModal.querySelector('.video-modal__video');

            player.pause()
            player.currentTime = 0
        })
    }

    // при закрытии модалки сбрасываем форму и блок успеха
    resetModalValidation = resetModal;

    if (modal) {
        modal.addEventListener('close', resetModal)
        modal.addEventListener('cancel', resetModal)

        // клик по подложке закрывает окно записи
        modal.addEventListener('click', function (evt) {
            if (evt.target === modal) closeModal()
        })
    }
})

const headerEl = document.querySelector('.header');
const burgerBtn = document.getElementById('burger');

function setBurgerState(isOpen) {
    if (!headerEl) return;

    headerEl.classList.toggle('open', isOpen)
    // при открытом меню страница под ним не должна прокручиваться
    document.body.classList.toggle('menu-open', isOpen)

    if (burgerBtn) {
        burgerBtn.setAttribute('aria-expanded', String(isOpen))
        burgerBtn.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню')
    }
}

function closeBurger() {
    setBurgerState(false)
}

document.addEventListener('DOMContentLoaded', function () {
    if (!headerEl || !burgerBtn) return;

    burgerBtn.addEventListener('click', function () {
        setBurgerState(!headerEl.classList.contains('open'))
    })

    // после перехода по якорю бургер-меню закрываем, иначе оно перекрывает секцию
    headerEl.querySelectorAll('.menu__link, .header__contact a').forEach(function (link) {
        link.addEventListener('click', closeBurger)
    })

    document.addEventListener('keydown', function (evt) {
        if (evt.key === 'Escape' && headerEl.classList.contains('open')) closeBurger()
    })
})
