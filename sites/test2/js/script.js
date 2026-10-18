/* =========================================================
   ASBeauty — общие скрипты страницы
   ========================================================= */
(function () {
    'use strict';

    const ASB = (window.ASB = window.ASB || {});
    const qs = (sel, ctx = document) => ctx.querySelector(sel);
    const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
    const mqMobile = window.matchMedia('(max-width: 767.98px)');
    const mqTablet = window.matchMedia('(max-width: 1023.98px)');

    ASB.qs = qs;
    ASB.qsa = qsa;
    ASB.mqMobile = mqMobile;
    ASB.mqTablet = mqTablet;

    // Выполнить колбэк, когда элемент приблизится к экрану (ленивая инициализация)
    ASB.whenNear = function (el, cb, margin = '400px') {
        if (!el) return;
        if (!('IntersectionObserver' in window)) {
            cb();
            return;
        }
        const io = new IntersectionObserver((entries) => {
            if (entries.some((e) => e.isIntersecting)) {
                io.disconnect();
                cb();
            }
        }, { rootMargin: margin });
        io.observe(el);
    };

    // ---------- Блокировка скролла ----------
    let lockCount = 0;
    ASB.lockScroll = function (lock) {
        lockCount = Math.max(0, lockCount + (lock ? 1 : -1));
        const scrollbar = window.innerWidth - document.documentElement.clientWidth;
        if (lockCount > 0) {
            document.body.style.paddingRight = scrollbar > 0 ? scrollbar + 'px' : '';
            document.body.classList.add('is-locked');
        } else {
            document.body.style.paddingRight = '';
            document.body.classList.remove('is-locked');
        }
    };

    /* ---------- Модальные окна ---------- */
    let activeModal = null;
    let lastFocus = null;

    function openModal(name, payload = {}) {
        const modal = qs(`[data-modal="${name}"]`);
        if (!modal) return;
        if (activeModal) closeModal();

        const media = qs('[data-modal-media]', modal);
        if (name === 'video' && media) {
            const video = document.createElement('video');
            video.src = payload.src;
            if (payload.poster) video.poster = payload.poster;
            video.controls = true;
            video.autoplay = true;
            video.playsInline = true;
            video.setAttribute('playsinline', '');
            media.replaceChildren(video);
            const play = video.play();
            if (play && play.catch) play.catch(() => {});
        }
        if (name === 'image' && media) {
            const img = new Image();
            img.src = payload.src;
            img.alt = payload.alt || '';
            img.decoding = 'async';
            media.replaceChildren(img);
        }

        lastFocus = document.activeElement;
        activeModal = modal;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        ASB.lockScroll(true);

        const focusTarget = qs('input, [data-modal-close].modal__close', modal);
        setTimeout(() => focusTarget && focusTarget.focus({ preventScroll: true }), 60);
    }

    function closeModal() {
        if (!activeModal) return;
        const modal = activeModal;
        activeModal = null;
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        ASB.lockScroll(false);

        const media = qs('[data-modal-media]', modal);
        if (media) {
            const video = qs('video', media);
            if (video) video.pause();
            setTimeout(() => {
                if (!modal.classList.contains('is-open')) media.replaceChildren();
            }, 400);
        }
        if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    }

    ASB.openModal = openModal;
    ASB.closeModal = closeModal;

    document.addEventListener('click', (e) => {
        const videoBtn = e.target.closest('[data-video]');
        if (videoBtn) {
            e.preventDefault();
            openModal('video', { src: videoBtn.dataset.video, poster: videoBtn.dataset.poster });
            return;
        }
        const imageBtn = e.target.closest('[data-image]');
        if (imageBtn) {
            e.preventDefault();
            const img = qs('img', imageBtn);
            openModal('image', { src: imageBtn.dataset.image, alt: img ? img.alt : '' });
            return;
        }
        const opener = e.target.closest('[data-modal-open]');
        if (opener) {
            e.preventDefault();
            if (opener.hasAttribute('data-menu-close')) closeMenu();
            openModal(opener.dataset.modalOpen);
            return;
        }
        if (e.target.closest('[data-modal-close]')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (activeModal) closeModal();
            else closeMenu();
            qsa('[data-select].is-open').forEach(closeSelect);
        }
        // удерживаем фокус внутри открытого окна
        if (e.key === 'Tab' && activeModal) {
            const focusable = qsa('a[href], button:not([disabled]), input, video[controls]', activeModal)
                .filter((el) => el.offsetParent !== null);
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    });

    /* ---------- Шапка: мобильное меню и поиск ---------- */
    const menu = qs('[data-menu]');
    const menuToggle = qs('[data-menu-toggle]');
    const searchToggle = qs('[data-search-toggle]');
    const mSearch = qs('[data-msearch]');

    function openMenu() {
        if (!menu) return;
        closeSearch();
        menu.classList.add('is-open');
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.setAttribute('aria-label', 'Закрыть меню');
        document.documentElement.classList.add('is-menu-open');
        ASB.lockScroll(true);
    }

    function closeMenu() {
        if (!menu || !menu.classList.contains('is-open')) return;
        menu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Открыть меню');
        document.documentElement.classList.remove('is-menu-open');
        ASB.lockScroll(false);
    }

    function closeSearch() {
        if (!mSearch) return;
        mSearch.classList.remove('is-open');
        if (searchToggle) searchToggle.setAttribute('aria-expanded', 'false');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menu.classList.contains('is-open') ? closeMenu() : openMenu();
        });
    }

    if (menu) {
        menu.addEventListener('click', (e) => {
            if (e.target.closest('[data-menu-close]') && !e.target.closest('[data-modal-open]')) closeMenu();
            const sub = e.target.closest('[data-mmenu-sub]');
            if (sub) {
                const item = sub.closest('.mmenu__item');
                const open = item.classList.toggle('is-open');
                sub.setAttribute('aria-expanded', String(open));
            }
        });
    }

    if (searchToggle && mSearch) {
        searchToggle.addEventListener('click', () => {
            const open = mSearch.classList.toggle('is-open');
            searchToggle.setAttribute('aria-expanded', String(open));
            if (open) {
                closeMenu();
                const input = qs('input', mSearch);
                input && input.focus();
            }
        });
    }

    window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
        if (e.matches) closeMenu();
    });

    /* ---------- Выпадающие списки (мобильные табы) ---------- */
    function closeSelect(select) {
        select.classList.remove('is-open');
        const t = qs('[data-select-toggle]', select);
        t && t.setAttribute('aria-expanded', 'false');
    }

    ASB.setSelectValue = function (select, key, attr) {
        if (!select) return;
        const options = qsa('.select__option', select);
        let current = null;
        options.forEach((o) => {
            const on = o.dataset[attr] === key;
            o.classList.toggle('is-active', on);
            o.setAttribute('aria-selected', String(on));
            if (on) current = o;
        });
        if (current) {
            const label = qs('[data-select-label]', select);
            const count = qs('[data-select-count]', select);
            if (label) label.textContent = current.firstChild.textContent.trim();
            if (count && current.dataset.count) count.textContent = current.dataset.count;
        }
    };

    document.addEventListener('click', (e) => {
        const toggle = e.target.closest('[data-select-toggle]');
        qsa('[data-select].is-open').forEach((s) => {
            if (!toggle || s !== toggle.closest('[data-select]')) closeSelect(s);
        });
        if (toggle) {
            const select = toggle.closest('[data-select]');
            const open = select.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(open));
            return;
        }
        const option = e.target.closest('.select__option');
        if (option) closeSelect(option.closest('[data-select]'));
    });

    /* ---------- Табы (цены) ---------- */
    qsa('[data-tabs-root]').forEach((root) => {
        const panels = qsa('[data-tab-panel]', root);
        const buttons = qsa('[data-tab]', root);
        const select = qs('[data-select]', root);

        root.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-tab]');
            if (!btn) return;
            const key = btn.dataset.tab;
            buttons.forEach((b) => {
                if (b.classList.contains('select__option')) return;
                const on = b.dataset.tab === key;
                b.classList.toggle('is-active', on);
                b.setAttribute('aria-selected', String(on));
            });
            panels.forEach((p) => {
                p.hidden = p.dataset.tabPanel !== key;
            });
            ASB.setSelectValue(select, key, 'tab');
        });
    });

    /* ---------- Аккордеон (FAQ) ---------- */
    document.addEventListener('click', (e) => {
        const toggle = e.target.closest('[data-accordion-toggle]');
        if (!toggle) return;
        const item = toggle.closest('[data-accordion]');
        const open = item.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
    });

    /* ---------- Формы: маска телефона и валидация ---------- */
    function formatPhone(value) {
        let digits = value.replace(/\D/g, '');
        if (digits.startsWith('8')) digits = '7' + digits.slice(1);
        if (!digits.startsWith('7')) digits = '7' + digits;
        digits = digits.slice(0, 11);
        const d = digits.slice(1);
        let out = '+7';
        if (d.length) out += ' (' + d.slice(0, 3);
        if (d.length >= 3) out += ')';
        if (d.length > 3) out += ' ' + d.slice(3, 6);
        if (d.length > 6) out += '-' + d.slice(6, 8);
        if (d.length > 8) out += '-' + d.slice(8, 10);
        return out;
    }

    function phoneDigits(value) {
        return value.replace(/\D/g, '').length;
    }

    qsa('input[data-field="phone"]').forEach((input) => {
        input.addEventListener('focus', () => {
            if (!input.value) input.value = '+7 (';
        });
        input.addEventListener('blur', () => {
            if (phoneDigits(input.value) <= 1) input.value = '';
        });
        input.addEventListener('input', (e) => {
            if (e.inputType && e.inputType.startsWith('delete')) {
                // даём удалять форматирующие символы, но держим префикс
                if (phoneDigits(input.value) <= 1) input.value = '+7 (';
                return;
            }
            input.value = formatPhone(input.value);
        });
    });

    function validateField(input) {
        let valid = true;
        if (input.dataset.field === 'name') valid = input.value.trim().length >= 2;
        if (input.dataset.field === 'phone') valid = phoneDigits(input.value) === 11;
        if (input.dataset.field === 'agree') valid = input.checked;
        const wrap = input.closest('.field, .checkbox');
        if (wrap) wrap.classList.toggle('is-error', !valid);
        return valid;
    }

    qsa('[data-form]').forEach((form) => {
        const fields = qsa('[data-field]', form);
        fields.forEach((input) => {
            const evt = input.type === 'checkbox' ? 'change' : 'input';
            input.addEventListener(evt, () => {
                const wrap = input.closest('.field, .checkbox');
                if (wrap && wrap.classList.contains('is-error')) validateField(input);
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const valid = fields.map(validateField).every(Boolean);
            if (!valid) {
                const firstError = fields.find((f) => f.closest('.is-error'));
                firstError && firstError.focus();
                return;
            }
            // Точка интеграции с Bitrix: событие с данными формы
            form.dispatchEvent(new CustomEvent('asb:submit', { bubbles: true, detail: new FormData(form) }));

            const success = qs('.form__success', form);
            const submit = qs('[type="submit"]', form);
            form.reset();
            if (submit) submit.hidden = true;
            if (success) success.hidden = false;
            setTimeout(() => {
                if (submit) submit.hidden = false;
                if (success) success.hidden = true;
            }, 6000);
        });
    });

    /* ---------- Яндекс.Карта: грузим только рядом с экраном ---------- */
    qsa('[data-map]').forEach((box) => {
        ASB.whenNear(box, () => {
            const iframe = document.createElement('iframe');
            iframe.src = box.dataset.map;
            iframe.title = 'Карта: клиника ASBeauty';
            iframe.loading = 'lazy';
            iframe.allowFullscreen = true;
            iframe.addEventListener('load', () => {
                const label = qs('.footer__map-label', box);
                label && label.remove();
            });
            box.appendChild(iframe);
        }, '200px');
    });

    /* ---------- Появление блоков при скролле ---------- */
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const targets = qsa('main > section:not(.hero) .section-head, main > section:not(.hero) .js-reveal-item');
        const vh = window.innerHeight;
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -10% 0px' });

        targets.forEach((el) => {
            if (el.getBoundingClientRect().top > vh) {
                el.classList.add('js-reveal');
                io.observe(el);
            }
        });
    }
})();

/* =========================================================
   Слайдеры (Swiper) — инициализируются, когда блок рядом с экраном
   ========================================================= */
(function () {
    'use strict';

    const ASB = window.ASB;
    if (!ASB) return;

    const a11y = {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        firstSlideMessage: 'Первый слайд',
        lastSlideMessage: 'Последний слайд',
        paginationBulletMessage: 'Перейти к слайду {{index}}',
        slideLabelMessage: '{{index}} из {{slidesLength}}'
    };

    ASB.sliderBase = function (section) {
        return {
            speed: 600,
            rewind: true,
            watchOverflow: true,
            keyboard: { enabled: true, onlyInViewport: true },
            a11y,
            navigation: {
                prevEl: ASB.qs('[data-slider-prev], [data-works-prev]', section),
                nextEl: ASB.qs('[data-slider-next], [data-works-next]', section)
            },
            pagination: {
                el: ASB.qs('[data-slider-pagination], [data-works-pagination]', section),
                clickable: true,
                bulletElement: 'button'
            }
        };
    };

    const configs = {
        // Звёзды в клинике: 4 в ряд, листаем по 4
        stars: {
            slidesPerView: 'auto',
            spaceBetween: 12,
            breakpoints: {
                768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 24 }
            }
        },
        // Хирурги клиники
        doctors: {
            slidesPerView: 'auto',
            spaceBetween: 12,
            breakpoints: {
                768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 24 }
            }
        },
        // Пространство клиники: одна мозаика на слайд
        clinic: {
            slidesPerView: 1,
            spaceBetween: 12,
            breakpoints: {
                768: { spaceBetween: 24 }
            }
        }
    };

    function init() {
        if (typeof window.Swiper === 'undefined') return;

        ASB.qsa('[data-slider]').forEach((el) => {
            const name = el.dataset.slider;
            const section = el.closest('section');
            ASB.whenNear(section, () => {
                // eslint-disable-next-line no-new
                new window.Swiper(el, Object.assign(ASB.sliderBase(section), configs[name] || {}));
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

/* =========================================================
   «Первый шаг к желаемому результату»: видео играет прямо в кружке.
   Кольцо и точка показывают прогресс, бейдж — оставшееся время.
   Клик — пауза / продолжить; в конце ролик возвращается к обложке.
   ========================================================= */
(function () {
    'use strict';

    const ASB = window.ASB;
    const btn = ASB && ASB.qs('[data-booking-video]');
    if (!btn) return;

    const { qs } = ASB;
    const ring = qs('.booking__ring-progress', btn);
    const timeEl = qs('.booking__time', btn);
    const labelPlay = btn.getAttribute('aria-label');
    const labelPause = 'Пауза: видео Анастасии Борисенко';

    let video = null;
    let raf = 0;

    const fmt = (s) => {
        s = Math.max(0, Math.ceil(s || 0));
        return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
    };

    function setProgress(p) {
        btn.style.setProperty('--p', p);
        ring.style.strokeDasharray = (p * 100).toFixed(2) + ' 100';
    }

    function showRemaining() {
        if (video && video.duration) timeEl.textContent = fmt(video.duration - video.currentTime);
    }

    function tick() {
        if (video.duration) setProgress(video.currentTime / video.duration);
        showRemaining();
        raf = requestAnimationFrame(tick);
    }

    function stopTick() {
        cancelAnimationFrame(raf);
        raf = 0;
    }

    function createVideo(preload) {
        if (video) return video;
        video = document.createElement('video');
        video.className = 'cover booking__media';
        video.src = btn.dataset.bookingVideo;
        video.preload = preload;
        video.playsInline = true;
        video.setAttribute('playsinline', '');
        video.setAttribute('aria-hidden', 'true');
        video.disablePictureInPicture = true;
        qs('.booking__img', btn).after(video);

        video.addEventListener('loadedmetadata', showRemaining);
        video.addEventListener('playing', () => {
            btn.classList.remove('is-loading');
            btn.classList.add('is-active', 'is-playing');
            btn.setAttribute('aria-label', labelPause);
            btn.setAttribute('aria-pressed', 'true');
            if (!raf) tick();
        });
        video.addEventListener('pause', () => {
            btn.classList.remove('is-playing', 'is-loading');
            btn.setAttribute('aria-label', labelPlay);
            btn.setAttribute('aria-pressed', 'false');
            stopTick();
        });
        video.addEventListener('ended', reset);
        return video;
    }

    function reset() {
        stopTick();
        btn.classList.remove('is-active', 'is-playing', 'is-loading');
        btn.setAttribute('aria-label', labelPlay);
        btn.setAttribute('aria-pressed', 'false');
        ring.style.strokeDasharray = '';
        btn.style.removeProperty('--p');
        if (video) {
            video.currentTime = 0;
            showRemaining();
        }
    }

    function pause() {
        if (video && !video.paused) video.pause();
    }

    btn.addEventListener('click', () => {
        createVideo('auto');
        if (video.paused || video.ended) {
            btn.classList.add('is-loading');
            const p = video.play();
            if (p && p.catch) p.catch(() => btn.classList.remove('is-loading'));
        } else {
            video.pause();
        }
    });

    // реальная длительность ролика в бейдже — когда блок рядом с экраном
    ASB.whenNear(btn, () => createVideo('metadata'));

    // ушли с экрана или открыли другое видео — ставим на паузу
    if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => {
            if (!entries[0].isIntersecting) pause();
        }, { threshold: 0.15 }).observe(btn);
    }
    document.addEventListener('click', (e) => {
        if (e.target.closest('[data-video]')) pause();
    }, true);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) pause();
    });
})();

/* =========================================================
   Наши работы: табы направлений → вложенные табы процедур → слайдер
   Десктоп: страницы 3×2, планшет: 2×2, мобильный: список + «Показать ещё»
   ========================================================= */
(function () {
    'use strict';

    const ASB = window.ASB;
    const root = ASB && ASB.qs('[data-works]');
    if (!root) return;

    const { qs, qsa, mqMobile, mqTablet } = ASB;
    const source = qs('[data-works-source]', root);
    const sliderEl = qs('[data-works-slider]', root);
    const wrapper = qs('.swiper-wrapper', sliderEl);
    const list = qs('[data-works-list]', root);
    const empty = qs('[data-works-empty]', root);
    const foundEl = qs('[data-works-found]', root);
    const moreBtn = qs('[data-works-more]', root);
    const controls = qs('.works__controls', root);
    const select = qs('[data-select]', root);
    const tabs = qsa('.works__tab', root);
    const chipGroups = qsa('[data-works-chips]', root);

    const allItems = Array.from(source.content.querySelectorAll('.work-card'));
    const MOBILE_STEP = 2;

    const state = {
        tab: (tabs.find((t) => t.classList.contains('is-active')) || tabs[0]).dataset.worksTab,
        filter: 'all',
        visible: MOBILE_STEP
    };

    let swiper = null;
    let mode = null;

    const perPage = () => (mqTablet.matches ? 4 : 6);
    const currentMode = () => (mqMobile.matches ? 'list' : 'slider-' + perPage());

    function filtered() {
        return allItems.filter((item) =>
            item.dataset.tab === state.tab && (state.filter === 'all' || item.dataset.cat === state.filter));
    }

    function buildPages(items) {
        const size = perPage();
        const pages = [];
        for (let i = 0; i < items.length; i += size) {
            const page = document.createElement('div');
            page.className = 'swiper-slide';
            const grid = document.createElement('div');
            grid.className = 'works__page';
            items.slice(i, i + size).forEach((item) => grid.appendChild(item.cloneNode(true)));
            page.appendChild(grid);
            pages.push(page);
        }
        return pages;
    }

    function ensureSwiper() {
        if (swiper || typeof window.Swiper === 'undefined') return;
        swiper = new window.Swiper(sliderEl, Object.assign(ASB.sliderBase(root), {
            slidesPerView: 1,
            spaceBetween: 96,
            autoHeight: true
        }));
    }

    function render() {
        const items = filtered();
        foundEl.textContent = items.length;
        empty.hidden = items.length > 0;
        mode = currentMode();

        if (mode === 'list') {
            list.replaceChildren(...items.slice(0, state.visible).map((i) => i.cloneNode(true)));
            moreBtn.hidden = items.length <= state.visible;
            return;
        }

        moreBtn.hidden = true;
        const pages = buildPages(items);
        if (swiper) {
            // без модуля Manipulation: меняем слайды напрямую и обновляем Swiper
            wrapper.replaceChildren(...pages);
            swiper.update();
            if (swiper.pagination) {
                swiper.pagination.render();
                swiper.pagination.update();
            }
            swiper.slideTo(0, 0);
            swiper.updateAutoHeight(0);
        } else {
            wrapper.replaceChildren(...pages);
            ensureSwiper();
        }
        controls.style.visibility = items.length ? '' : 'hidden';
    }

    function renderAnimated() {
        if (mode === 'list' || !sliderEl.animate) {
            render();
            return;
        }
        sliderEl.classList.add('is-switching');
        setTimeout(() => {
            try {
                render();
            } finally {
                sliderEl.classList.remove('is-switching');
            }
        }, 220);
    }

    function setTab(key) {
        if (key === state.tab) return;
        state.tab = key;
        state.filter = 'all';
        state.visible = MOBILE_STEP;

        tabs.forEach((t) => {
            const on = t.dataset.worksTab === key;
            t.classList.toggle('is-active', on);
            t.setAttribute('aria-selected', String(on));
        });
        chipGroups.forEach((group) => {
            group.hidden = group.dataset.worksChips !== key;
            qsa('.chip', group).forEach((c) => c.classList.toggle('is-active', c.dataset.worksFilter === 'all'));
        });
        ASB.setSelectValue(select, key, 'worksTab');
        renderAnimated();
    }

    function setFilter(chip) {
        const key = chip.dataset.worksFilter;
        if (key === state.filter) return;
        state.filter = key;
        state.visible = MOBILE_STEP;
        qsa('.chip', chip.parentElement).forEach((c) => c.classList.toggle('is-active', c === chip));
        renderAnimated();
    }

    root.addEventListener('click', (e) => {
        const tab = e.target.closest('[data-works-tab]');
        if (tab) {
            setTab(tab.dataset.worksTab);
            return;
        }
        const chip = e.target.closest('[data-works-filter]');
        if (chip) {
            setFilter(chip);
            return;
        }
        if (e.target.closest('[data-works-more]')) {
            state.visible += MOBILE_STEP;
            render();
        }
    });

    function onResize() {
        if (currentMode() !== mode) render();
    }

    mqMobile.addEventListener('change', onResize);
    mqTablet.addEventListener('change', onResize);

    // первая отрисовка — когда блок рядом с экраном
    ASB.whenNear(root, render);
})();
