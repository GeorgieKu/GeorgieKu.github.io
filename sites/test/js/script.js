
// Слайдеры детальной страницы врача.
// Swiper (js/libs/swiper-bundle.min.js) подгружается только когда слайдер
// приближается к экрану — так он не мешает первой отрисовке страницы.
(() => {
    const sliders = document.querySelectorAll('[data-reviews-slider], [data-services-slider], [data-doctors-slider]');
    if (!sliders.length) return;

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
