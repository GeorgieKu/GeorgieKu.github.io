(function () {
    const STORAGE_KEY = 'orthospace_cart';

    const readCart = () => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const data = raw ? JSON.parse(raw) : [];
            return Array.isArray(data) ? data : [];
        } catch (e) {
            return [];
        }
    };

    const writeCart = (items) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch (e) { }
    };

    let cart = readCart();

    const formatPrice = (value) => {
        const fixed = (Math.round(value * 100) / 100).toFixed(2);
        const [int, dec] = fixed.split('.');
        const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return `${grouped},${dec} ₽`;
    };

    const parsePrice = (text) => {
        if (!text) return 0;
        const clean = text.replace(/[\s ]/g, '').replace('₽', '').replace(',', '.');
        const num = parseFloat(clean);
        return isNaN(num) ? 0 : num;
    };

    const slugify = (str) => (str || '')
        .toLowerCase()
        .replace(/[^a-zа-я0-9]+/gi, '-')
        .replace(/^-+|-+$/g, '') || 'item';

    const getCount = () => cart.reduce((sum, i) => sum + i.qty, 0);
    const getSubtotal = () => cart.reduce((sum, i) => sum + i.price * i.qty, 0);

    const addItem = (item, qty) => {
        const amount = Math.max(1, qty || 1);
        const existing = cart.find((i) => i.id === item.id);
        if (existing) {
            existing.qty += amount;
        } else {
            cart.push({ ...item, qty: amount });
        }
        writeCart(cart);
        render();
    };

    const setQty = (id, qty) => {
        const item = cart.find((i) => i.id === id);
        if (!item) return;
        item.qty = qty;
        if (item.qty <= 0) {
            cart = cart.filter((i) => i.id !== id);
        }
        writeCart(cart);
        render();
    };

    const removeItem = (id) => {
        cart = cart.filter((i) => i.id !== id);
        writeCart(cart);
        render();
    };

    const renderHeader = () => {
        const total = document.querySelector('.header__total');
        if (total) total.textContent = formatPrice(getSubtotal());

        document.querySelectorAll('.header__badge').forEach((badge) => {
            const count = getCount();
            badge.textContent = count;
            badge.hidden = count === 0;
        });
    };

    const renderDrawer = () => {
        const list = document.querySelector('[data-cart-list]');
        const empty = document.querySelector('[data-cart-empty]');
        const template = document.getElementById('cartItemTemplate');
        if (!list || !template) return;

        list.innerHTML = '';
        const isEmpty = cart.length === 0;
        if (empty) empty.hidden = !isEmpty;
        list.hidden = isEmpty;

        cart.forEach((item) => {
            const node = template.content.firstElementChild.cloneNode(true);
            node.dataset.cartItem = item.id;
            const img = node.querySelector('.cart__item-img');
            img.src = item.image || '';
            img.alt = item.title || 'Товар';
            node.querySelector('.cart__item-title').textContent = item.title || '';
            node.querySelector('.cart__item-cat').textContent = item.category || '';
            node.querySelector('.cart__item-price').textContent = formatPrice(item.price * item.qty);
            node.querySelector('[data-cart-qty]').textContent = item.qty;
            list.appendChild(node);
        });

        const subtotal = document.querySelector('[data-cart-subtotal]');
        const total = document.querySelector('[data-cart-total]');
        const count = document.querySelector('[data-cart-count]');
        if (subtotal) subtotal.textContent = formatPrice(getSubtotal());
        if (total) total.textContent = formatPrice(getSubtotal());
        if (count) count.textContent = getCount();

        const checkout = document.querySelector('.cart__checkout');
        if (checkout) checkout.disabled = isEmpty;
    };

    const renderCheckout = () => {
        const list = document.querySelector('[data-checkout-list]');
        if (!list) return;
        list.innerHTML = '';

        cart.forEach((item) => {
            const li = document.createElement('li');
            li.className = 'checkout__item';
            li.innerHTML =
                '<div class="checkout__item-media">' +
                '<img class="checkout__item-img" src="" alt="Товар">' +
                '<span class="checkout__item-badge"></span>' +
                '</div>' +
                '<div class="checkout__item-body">' +
                '<span class="checkout__item-name"></span>' +
                '<span class="checkout__item-price"></span>' +
                '</div>';
            const img = li.querySelector('.checkout__item-img');
            img.src = item.image || '';
            img.alt = item.title || 'Товар';
            li.querySelector('.checkout__item-badge').textContent = item.qty;
            li.querySelector('.checkout__item-name').textContent = item.title || '';
            li.querySelector('.checkout__item-price').textContent = formatPrice(item.price * item.qty);
            list.appendChild(li);
        });

        const subtotal = document.querySelector('[data-checkout-subtotal]');
        const total = document.querySelector('[data-checkout-total]');
        if (subtotal) subtotal.textContent = formatPrice(getSubtotal());
        if (total) total.textContent = formatPrice(getSubtotal());
    };

    const render = () => {
        renderHeader();
        renderDrawer();
        renderCheckout();
    };

    const itemFromCatalogCard = (card) => {
        const title = card.querySelector('.catalog__title')?.textContent.trim() || '';
        const category = card.querySelector('.catalog__text')?.textContent.trim() || '';
        const price = parsePrice(card.querySelector('.catalog__price')?.textContent);
        const image = card.querySelector('.catalog__img')?.getAttribute('src') || '';
        return { id: slugify(title), title, category, price, image };
    };

    const itemFromProductPage = () => {
        const title = document.querySelector('.product__title')?.textContent.trim() || '';
        const category = document.querySelector('.product__cat')?.textContent.trim() || '';
        const priceText = document.querySelector('.product__price')?.childNodes[0]?.textContent || '';
        const price = parsePrice(priceText);
        const image = document.querySelector('.product__slide-img')?.getAttribute('src') || '';
        return { id: slugify(title), title, category, price, image };
    };

    const bindAddButtons = () => {
        document.querySelectorAll('.catalog__btn-2').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const card = btn.closest('.catalog__card');
                if (!card) return;
                addItem(itemFromCatalogCard(card), 1);
                openCart();
            });
        });

        const productForm = document.querySelector('.product__buy');
        if (productForm) {
            productForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const qty = parseInt(productForm.querySelector('.product__qty')?.value, 10) || 1;
                addItem(itemFromProductPage(), qty);
                openCart();
            });
        }
    };

    const openCart = () => {
        const trigger = document.querySelector('[data-modal="cartModal"]');
        if (trigger) trigger.click();
    };

    const closeDialog = (dialog) => {
        if (!dialog || !dialog.open) return;
        dialog.classList.remove('is-open');

        const panel = dialog.querySelector('.modal__drawer, .modal__window');
        const done = () => {
            dialog.close();
            if (!document.querySelector('dialog.modal.is-open')) {
                document.body.classList.remove('modal-open');
            }
        };

        if (panel) {
            let finished = false;
            const handler = () => {
                if (finished) return;
                finished = true;
                panel.removeEventListener('transitionend', handler);
                done();
            };
            panel.addEventListener('transitionend', handler);
            setTimeout(handler, 450);
        } else {
            done();
        }
    };

    const bindDrawerControls = () => {
        const list = document.querySelector('[data-cart-list]');
        if (!list) return;

        list.addEventListener('click', (e) => {
            const row = e.target.closest('[data-cart-item]');
            if (!row) return;
            const id = row.dataset.cartItem;
            const item = cart.find((i) => i.id === id);
            if (!item) return;

            if (e.target.closest('[data-cart-plus]')) setQty(id, item.qty + 1);
            else if (e.target.closest('[data-cart-minus]')) setQty(id, item.qty - 1);
            else if (e.target.closest('[data-cart-remove]')) removeItem(id);
        });
    };

    const bindCheckoutOpen = () => {
        const btn = document.querySelector('.cart__checkout');
        if (!btn) return;
        btn.addEventListener('click', () => {
            closeDialog(document.getElementById('cartModal'));
        });
    };

    const bindCheckoutBack = () => {
        const btn = document.querySelector('[data-checkout-back]');
        if (!btn) return;
        btn.addEventListener('click', () => {
            closeDialog(document.getElementById('checkoutModal'));
            openCart();
        });
    };

    const bindPromo = () => {
        const btn = document.querySelector('.cart__promo');
        if (!btn) return;
        btn.addEventListener('click', () => {
            btn.classList.toggle('is-open');
        });
    };

    document.addEventListener('DOMContentLoaded', () => {
        bindAddButtons();
        bindDrawerControls();
        bindCheckoutOpen();
        bindCheckoutBack();
        bindPromo();
        render();
    });
})();

(function () {
    const KEY = 'orthospace_cookies_accepted';

    document.addEventListener('DOMContentLoaded', () => {
        const banner = document.getElementById('cookies');
        if (!banner) return;

        let accepted = false;
        try { accepted = localStorage.getItem(KEY) === '1'; } catch (e) { }
        if (accepted) return;

        banner.hidden = false;
        void banner.offsetWidth;
        banner.classList.add('is-visible');

        const btn = banner.querySelector('[data-cookies-accept]');
        if (!btn) return;

        btn.addEventListener('click', () => {
            try { localStorage.setItem(KEY, '1'); } catch (e) { }
            banner.classList.remove('is-visible');

            let finished = false;
            const done = () => {
                if (finished) return;
                finished = true;
                banner.removeEventListener('transitionend', done);
                banner.hidden = true;
            };
            banner.addEventListener('transitionend', done);
            setTimeout(done, 450);
        });
    });
})();

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("filtersBtn");
    const panel = document.getElementById("filtersPanel");

    if (btn && panel) {
        const setOpen = (open) => {
            btn.classList.toggle("is-active", open);
            btn.setAttribute("aria-expanded", open ? "true" : "false");

            if (open) {
                panel.classList.add("is-open");
                panel.style.maxHeight = panel.scrollHeight + "px";

                const release = () => {
                    if (!panel.classList.contains("is-open")) return;
                    panel.style.overflow = "visible";
                    panel.style.maxHeight = "none";
                };
                panel.addEventListener("transitionend", function done(e) {
                    if (e.propertyName !== "max-height") return;
                    panel.removeEventListener("transitionend", done);
                    release();
                });
                setTimeout(release, 400);
            } else {
                panel.style.overflow = "hidden";
                panel.style.maxHeight = panel.scrollHeight + "px";
                void panel.offsetHeight;
                panel.classList.remove("is-open");
                panel.style.maxHeight = "0px";
            }
        };

        btn.addEventListener("click", function () {
            setOpen(!panel.classList.contains("is-open"));
        });

        window.addEventListener("resize", function () {
            if (!panel.classList.contains("is-open")) return;
            panel.style.maxHeight = "none";
        });
    }

    document.querySelectorAll("[data-range]").forEach(function (range) {
        const min = range.querySelector(".range__input--min");
        const max = range.querySelector(".range__input--max");
        const fill = range.querySelector("[data-range-fill]");
        const output = range.closest(".filters__item")?.querySelector("[data-range-output]");
        if (!min || !max || !fill) return;

        const fmt = (n) => Number(n).toLocaleString("ru-RU") + "₽";

        const update = () => {
            let lo = Number(min.value);
            let hi = Number(max.value);
            if (lo > hi) {
                [lo, hi] = [hi, lo];
                min.value = lo;
                max.value = hi;
            }
            const span = Number(min.max) - Number(min.min);
            const left = ((lo - Number(min.min)) / span) * 100;
            const right = ((hi - Number(min.min)) / span) * 100;
            fill.style.left = left + "%";
            fill.style.width = (right - left) + "%";
            if (output) output.textContent = fmt(lo) + " - " + fmt(hi);
        };

        min.addEventListener("input", update);
        max.addEventListener("input", update);
        update();
    });
});

document.querySelectorAll('.hero__marquee-track').forEach((track) => {
    const items = Array.from(track.children);
    items.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
    });
});

if (document.querySelector('.categories__swiper')) {
    new Swiper('.categories__swiper', {
        slidesPerView: 1.3,
        spaceBetween: 12,
        grabCursor: true,
        navigation: {
            prevEl: '.categories__nav .slider-arrow--prev',
            nextEl: '.categories__nav .slider-arrow--next',
        },
        breakpoints: {
            480: {
                slidesPerView: 2.2,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 3.2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 4.2,
                spaceBetween: 20
            },
            1280: {
                slidesPerView: 5.2,
                spaceBetween: 24
            },
        },
    });
}

if (document.querySelector('.news__swiper')) {
    new Swiper('.news__swiper', {
        slidesPerView: 1,
        spaceBetween: 16,
        grabCursor: true,
        navigation: {
            prevEl: '.news__nav .slider-arrow--prev',
            nextEl: '.news__nav .slider-arrow--next',
        },
    });
}

function openAcc(toggleButton, content, toggleArrow) {
    toggleButton.addEventListener('click', function () {
        content.classList.toggle('open');
        toggleArrow.classList.toggle('rotate');

    });
}

document.addEventListener('DOMContentLoaded', function () {
    let toggleButtons = document.querySelectorAll('.acc');
    let contents = document.querySelectorAll('.content');

    toggleButtons.forEach((toggleButton, index) => {
        let toggleArrow = toggleButton.querySelector('svg');
        openAcc(toggleButton, contents[index], toggleArrow);
    });
});

const chooseEl = document.querySelector('.choose__swiper');
if (chooseEl) {
    let chooseSwiper = null;
    const chooseMq = window.matchMedia('(max-width: 576px)');

    const toggleChooseSwiper = (e) => {
        if (e.matches) {
            if (!chooseSwiper) {
                chooseSwiper = new Swiper(chooseEl, {
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                    grabCursor: true,
                    navigation: {
                        prevEl: '.choose__nav .slider-arrow--prev',
                        nextEl: '.choose__nav .slider-arrow--next',
                    },
                });
            }
        } else if (chooseSwiper) {
            chooseSwiper.destroy(true, true);
            chooseSwiper = null;
        }
    };

    toggleChooseSwiper(chooseMq);
    chooseMq.addEventListener('change', toggleChooseSwiper);
}
const productSliderEl = document.querySelector('.product__slider');
document.querySelectorAll('.product__description').forEach(description => {
    const button = description.querySelector('button');
    const text = description.querySelector('p');

    button.addEventListener('click', () => {
        text.classList.toggle('expanded');

        if (text.classList.contains('expanded')) {
            button.textContent = 'Скрыть «';
        } else {
            button.textContent = 'Читать далее »';
        }
    });
});

if (productSliderEl) {
    const productThumbsEl = document.querySelector('.product__thumbs');
    const productMq = window.matchMedia('(min-width: 769px)');

    let productThumbs = null;
    let productSlider = null;

    const buildProductGallery = (isDesktop) => {
        const activeIndex = productSlider ? productSlider.activeIndex : 0;

        if (productSlider) {
            productSlider.destroy(true, true);
            productSlider = null;
        }

        if (productThumbs) {
            productThumbs.destroy(true, true);
            productThumbs = null;
        }

        productThumbs = new Swiper(productThumbsEl, isDesktop ?
            {
                direction: 'vertical',
                slidesPerView: 4,
                spaceBetween: 21,
                watchSlidesProgress: true,
            } :
            {
                direction: 'horizontal',
                slidesPerView: 3,
                spaceBetween: 10,
                watchSlidesProgress: true,
            });

        productSlider = new Swiper(productSliderEl, {
            slidesPerView: 1,
            spaceBetween: 20,
            grabCursor: true,
            initialSlide: activeIndex,
            pagination: {
                el: '.product__pagination',
                clickable: true,
            },
            thumbs: {
                swiper: productThumbs,
            },
        });
    };

    buildProductGallery(productMq.matches);
    productMq.addEventListener('change', (e) => buildProductGallery(e.matches));
}

const initProductRelatedSlider = (containerSel, navSel) => {
    const el = document.querySelector(containerSel);
    if (!el) return;

    let swiper = null;
    const mq = window.matchMedia('(max-width: 576px)');

    const toggle = (e) => {
        if (e.matches) {
            if (!swiper) {
                swiper = new Swiper(el, {
                    slidesPerView: 1,
                    spaceBetween: 16,
                    grabCursor: true,
                    navigation: {
                        prevEl: navSel + ' .slider-arrow--prev',
                        nextEl: navSel + ' .slider-arrow--next',
                    },
                });
            }
        } else if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
    };

    toggle(mq);
    mq.addEventListener('change', toggle);
};

initProductRelatedSlider('.similar__swiper', '.similar__nav');
initProductRelatedSlider('.bought__swiper', '.bought__nav');

const descToggle = document.querySelector('[data-desc-toggle]');
if (descToggle) {
    const descSection = descToggle.closest('.description');
    descToggle.addEventListener('click', () => {
        const open = descSection.classList.toggle('is-open');
        descToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        descToggle.setAttribute('aria-label', open ? 'Свернуть' : 'Читать далее');
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const selects = document.querySelectorAll("[data-select]");
    if (!selects.length) return;

    const closeAll = (except) => {
        selects.forEach((s) => {
            if (s === except) return;
            s.classList.remove("is-open");
            s.querySelector(".select__toggle").setAttribute("aria-expanded", "false");
        });
    };

    selects.forEach((select) => {
        const toggle = select.querySelector(".select__toggle");
        const value = select.querySelector(".select__value");
        const list = select.querySelector(".select__list");
        const input = select.querySelector(".select__input");
        const options = [...select.querySelectorAll(".select__option")];
        if (!toggle || !list || !options.length) return;

        const setOpen = (open) => {
            select.classList.toggle("is-open", open);
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
            if (open) {
                closeAll(select);
                const current = options.find((o) => o.getAttribute("aria-selected") === "true") || options[0];
                highlight(options.indexOf(current));
            }
        };

        let index = Math.max(0, options.findIndex((o) => o.getAttribute("aria-selected") === "true"));

        const highlight = (i) => {
            index = (i + options.length) % options.length;
            options.forEach((o, n) => o.classList.toggle("is-current", n === index));
            options[index].scrollIntoView({ block: "nearest" });
        };

        const choose = (option) => {
            options.forEach((o) => o.setAttribute("aria-selected", "false"));
            option.setAttribute("aria-selected", "true");
            value.textContent = option.textContent.trim();
            if (input) {
                input.value = option.dataset.value || option.textContent.trim();
                input.dispatchEvent(new Event("change", { bubbles: true }));
            }
            setOpen(false);
            toggle.focus();
        };

        toggle.addEventListener("click", function () {
            setOpen(!select.classList.contains("is-open"));
        });

        options.forEach((option) => {
            option.addEventListener("click", () => choose(option));
        });

        select.addEventListener("keydown", function (e) {
            const open = select.classList.contains("is-open");

            if (e.key === "Escape") {
                setOpen(false);
                toggle.focus();
                return;
            }
            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                e.preventDefault();
                if (!open) return setOpen(true);
                highlight(index + (e.key === "ArrowDown" ? 1 : -1));
                return;
            }
            if (e.key === "Home" || e.key === "End") {
                if (!open) return;
                e.preventDefault();
                highlight(e.key === "Home" ? 0 : options.length - 1);
                return;
            }
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (open) choose(options[index]);
                else setOpen(true);
            }
        });
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest("[data-select]")) closeAll(null);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const openModal = (dialog) => {
        if (!dialog || dialog.open) return;
        dialog.showModal();
        void dialog.offsetWidth;
        dialog.classList.add("is-open");
        document.body.classList.add("modal-open");
    };

    const closeModal = (dialog) => {
        if (!dialog || !dialog.open) return;
        dialog.classList.remove("is-open");

        const panel = dialog.querySelector(".modal__drawer, .modal__window");
        const done = () => {
            dialog.close();
            if (!document.querySelector("dialog.modal.is-open")) {
                document.body.classList.remove("modal-open");
            }
        };

        if (panel) {
            let finished = false;
            const handler = () => {
                if (finished) return;
                finished = true;
                panel.removeEventListener("transitionend", handler);
                done();
            };
            panel.addEventListener("transitionend", handler);
            setTimeout(handler, 450);
        } else {
            done();
        }
    };

    document.querySelectorAll("[data-modal]").forEach((trigger) => {
        trigger.addEventListener("click", function (e) {
            e.preventDefault();
            const dialog = document.getElementById(trigger.dataset.modal);
            const header = document.querySelector(".header");
            if (header) header.classList.remove("open");
            openModal(dialog);
        });
    });

    document.querySelectorAll("[data-modal-close]").forEach((btn) => {
        btn.addEventListener("click", function () {
            closeModal(btn.closest("dialog"));
        });
    });

    document.querySelectorAll("dialog.modal").forEach((dialog) => {
        dialog.addEventListener("click", function (e) {
            if (e.target === dialog) closeModal(dialog);
        });
        dialog.addEventListener("cancel", function (e) {
            e.preventDefault();
            closeModal(dialog);
        });
    });

    const eye = document.querySelector(".account-modal__eye");
    if (eye) {
        eye.addEventListener("click", function () {
            const input = document.getElementById("accPass");
            if (!input) return;
            const show = input.type === "password";
            input.type = show ? "text" : "password";
            eye.setAttribute("aria-label", show ? "Скрыть пароль" : "Показать пароль");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const burger = document.getElementById("burger");
    if (!header || !burger) return;

    const setOpen = (open) => {
        header.classList.toggle("open", open);
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.classList.toggle("menu-open", open);
    };

    burger.addEventListener("click", function () {
        setOpen(!header.classList.contains("open"));
    });

    header.querySelectorAll(".header__menu a").forEach((link) => {
        link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("click", function (e) {
        if (header.classList.contains("open") && !header.contains(e.target)) {
            setOpen(false);
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") setOpen(false);
    });

    window.matchMedia("(min-width: 1121px)").addEventListener("change", function (e) {
        if (e.matches) setOpen(false);
    });
});
