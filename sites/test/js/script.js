
// Слайдеры детальной страницы врача.
// Swiper (js/libs/swiper-bundle.min.js) подгружается только когда слайдер
// приближается к экрану — так он не мешает первой отрисовке страницы.
(() => {
    const scriptSrc = document.currentScript ? document.currentScript.src : '';
    const swiperSrc = scriptSrc ? new URL('libs/swiper-bundle.min.js', scriptSrc).href : './js/libs/swiper-bundle.min.js';

    let swiperPromise = null;
    const loadSwiper = () => {
        if (typeof Swiper !== 'undefined') return Promise.resolve();
        if (!swiperPromise) {
            swiperPromise = new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = swiperSrc;
                script.onload = resolve;
                script.onerror = reject;
                document.head.append(script);
            });
        }
        return swiperPromise;
    };

    // общий загрузчик — им пользуются и другие блоки (например, главная)
    window.loadSwiper = loadSwiper;

    const sliders = document.querySelectorAll('[data-reviews-slider], [data-services-slider], [data-doctors-slider]');
    if (!sliders.length) return;

    const options = {
        reviews: {
            slidesPerView: 1.08,
            spaceBetween: 16,
            breakpoints: {
                577: { slidesPerView: 2, spaceBetween: 20 },
                1025: { slidesPerView: 3, spaceBetween: 30 },
            },
        },
        // по 5 услуг на слайде
        services: {
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: true,
        },
        doctors: {
            slidesPerView: 1.08,
            spaceBetween: 16,
            breakpoints: {
                577: { slidesPerView: 2, spaceBetween: 20 },
                1025: { slidesPerView: 3, spaceBetween: 30 },
                1440: { slidesPerView: 4, spaceBetween: 30 },
            },
        },
    };

    const initSlider = (el) => {
        const name = Object.keys(options).find((key) => el.hasAttribute(`data-${key}-slider`));
        if (!name || el.swiper) return;

        new Swiper(el, {
            speed: 500,
            watchOverflow: true,
            navigation: {
                prevEl: `[data-${name}-prev]`,
                nextEl: `[data-${name}-next]`,
            },
            ...options[name],
        });
    };

    const start = (el) => loadSwiper().then(() => initSlider(el));

    if (!('IntersectionObserver' in window)) {
        sliders.forEach(start);
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);
            start(entry.target);
        });
    }, { rootMargin: '300px 0px' });

    sliders.forEach((el) => observer.observe(el));
})();

// Переключатель «Взрослым / Детям» в фильтре врачей
(() => {
    document.querySelectorAll('[data-audience]').forEach((group) => {
        const buttons = group.querySelectorAll('.doctors__audience-btn');
        const input = group.querySelector('input[type="hidden"]');

        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                buttons.forEach((b) => {
                    const active = b === btn;
                    b.classList.toggle('is-active', active);
                    b.setAttribute('aria-pressed', String(active));
                });
                if (input) input.value = btn.value;
            });
        });
    });
})();

// Меню по кнопке «Меню» и поиск по кнопке-лупе
(() => {
    const header = document.querySelector('[data-header]');
    if (!header) return;

    const panels = {
        menu: { cls: 'is-menu-open', toggles: header.querySelectorAll('[data-menu-toggle]') },
        search: { cls: 'is-search-open', toggles: header.querySelectorAll('[data-search-toggle]') },
    };

    const isOpen = (name) => header.classList.contains(panels[name].cls);

    // картинки плиток меню грузим только при первом открытии
    const loadMenuImages = () => {
        header.querySelectorAll('.header__tile-img[data-src]').forEach((img) => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    };

    const setPanel = (name, open) => {
        if (name === 'menu' && open) loadMenuImages();
        header.classList.toggle(panels[name].cls, open);
        panels[name].toggles.forEach((btn) => btn.setAttribute('aria-expanded', String(open)));
    };

    const closeAll = () => Object.keys(panels).forEach((name) => setPanel(name, false));

    Object.keys(panels).forEach((name) => {
        panels[name].toggles.forEach((btn) => {
            btn.addEventListener('click', () => {
                const open = !isOpen(name);
                closeAll();
                setPanel(name, open);

                if (name === 'search' && open) {
                    const input = header.querySelector('.header__search-input');
                    if (input) setTimeout(() => input.focus(), 50);
                }
            });
        });
    });

    header.querySelectorAll('[data-menu-close]').forEach((el) => {
        el.addEventListener('click', closeAll);
    });

    // клик по пустому месту в открытом меню (мимо плиток и ссылок) — закрываем
    const menu = header.querySelector('.header__menu');
    if (menu) {
        menu.addEventListener('click', (e) => {
            if (!e.target.closest('.header__tile, .header__mnav, .header__menu-contacts')) closeAll();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAll();
    });

    // при открытии модалки из меню — закрываем меню
    header.querySelectorAll('.header__menu .header__cta').forEach((btn) => {
        btn.addEventListener('click', closeAll);
    });
})();

// Главная: слайдеры первого экрана, направлений, полезных ссылок и партнёров + видео.
// Swiper подгружается общим загрузчиком window.loadSwiper (blocks/doctor-page/doctor-page.js).
(() => {
    const load = () => (window.loadSwiper ? window.loadSwiper() : Promise.reject(new Error('loadSwiper не найден')));

    const sliders = {
        hero: {
            loop: true,
            speed: 700,
            autoplay: { delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true },
            pagination: { el: '[data-hero-dots]', clickable: true },
        },
        directions: {
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: true,
        },
        links: {
            slidesPerView: 'auto',
            spaceBetween: 40,
            breakpoints: { 1025: { spaceBetween: 93 } },
        },
        partners: {
            slidesPerView: 'auto',
            spaceBetween: 40,
            breakpoints: { 1025: { spaceBetween: 89 } },
        },
    };

    const init = (el, name) => {
        if (el.swiper) return;
        new Swiper(el, {
            speed: 500,
            watchOverflow: true,
            navigation: {
                prevEl: `[data-${name}-prev]`,
                nextEl: `[data-${name}-next]`,
            },
            ...sliders[name],
        });
    };

    const items = Object.keys(sliders)
        .map((name) => ({ name, el: document.querySelector(`[data-${name}-slider]`) }))
        .filter((item) => item.el);

    if (items.length) {
        // первый экран — сразу, остальные — когда приблизятся к экрану
        const start = ({ el, name }) => load().then(() => init(el, name)).catch(() => {});
        const hero = items.find((item) => item.name === 'hero');
        if (hero) start(hero);

        const rest = items.filter((item) => item.name !== 'hero');
        if (!('IntersectionObserver' in window)) {
            rest.forEach(start);
        } else {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    observer.unobserve(entry.target);
                    start(rest.find((item) => item.el === entry.target));
                });
            }, { rootMargin: '300px 0px' });
            rest.forEach((item) => observer.observe(item.el));
        }
    }

    // ---------- видео на первом экране ----------
    const box = document.querySelector('[data-hero-video]');
    if (!box) return;

    const video = box.querySelector('video');
    const toggle = box.querySelector('[data-video-toggle]');
    const label = box.querySelector('[data-video-label]');
    const fullscreen = box.querySelector('[data-video-fullscreen]');
    const hasSource = () => Boolean(video.currentSrc || video.querySelector('source'));

    const setState = (paused) => {
        box.classList.toggle('is-paused', paused);
        label.textContent = paused ? 'Смотреть' : 'Пауза';
    };

    // состояние кнопки берём из событий самого видео — так оно не расходится с реальностью
    video.addEventListener('play', () => setState(false));
    video.addEventListener('pause', () => setState(true));

    if (hasSource()) {
        setState(video.paused && !video.autoplay);
        const playing = video.play();
        if (playing) playing.catch(() => setState(true));
    } else {
        // без файла видео показываем постер и кнопку «Смотреть»
        setState(true);
    }

    toggle.addEventListener('click', () => {
        if (!hasSource()) return;
        if (video.paused) {
            const playing = video.play();
            if (playing) playing.catch(() => {});
        } else {
            video.pause();
        }
    });

    fullscreen.addEventListener('click', () => {
        const target = hasSource() ? video : box;
        if (target.requestFullscreen) target.requestFullscreen();
        else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
    });
})();

// Открыть модалку: onclick="openModal('modal-appointment')"
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal && !modal.open) modal.showModal();
}

// Закрыть модалку: onclick="closeModal(this)" внутри неё или closeModal('modal-appointment')
function closeModal(target) {
    const modal = typeof target === 'string' ? document.getElementById(target) : target.closest('dialog');
    if (modal) modal.close();
}

// Закрытие по клику на подложку (только если и нажали, и отпустили вне карточки)
let modalPointerTarget = null;
document.addEventListener('pointerdown', (e) => {
    modalPointerTarget = e.target;
});
document.addEventListener('click', (e) => {
    if (e.target.matches('dialog.modal') && modalPointerTarget === e.target) {
        e.target.close();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.querySelector('.news-detail__share');
    if (!shareBtn) return;

    shareBtn.addEventListener('click', async () => {
        const data = { title: document.title, url: window.location.href };

        if (navigator.share) {
            try {
                await navigator.share(data);
            } catch (e) {
                /* пользователь закрыл окно — ничего не делаем */
            }
            return;
        }

        try {
            await navigator.clipboard.writeText(data.url);
            shareBtn.classList.add('is-copied');
            setTimeout(() => shareBtn.classList.remove('is-copied'), 2000);
        } catch (e) {
            /* буфер обмена недоступен */
        }
    });
});
