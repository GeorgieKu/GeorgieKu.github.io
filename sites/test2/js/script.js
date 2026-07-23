document.addEventListener('DOMContentLoaded', function () {
    // SLIDERS
    if (document.querySelector(".certificates__slider")) {
        new Swiper(".certificates__slider", {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 20,
            navigation: {
                nextEl: '.slider-control__next_certificates',
                prevEl: '.slider-control__prev_certificates'
            },
            breakpoints: {
                991: {
                    spaceBetween: 20
                },
                0: {
                    spaceBetween: 10
                },
            }
        });
    }

    if (document.querySelector(".parnters__slider")) {
        new Swiper(".parnters__slider", {
            loop: true,
            slidesPerView: 6,
            spaceBetween: 30,
            navigation: {
                nextEl: '.slider-control__next_parnters',
                prevEl: '.slider-control__prev_parnters'
            },
            breakpoints: {
                1600: {
                    slidesPerView: 6,
                    spaceBetween: 30
                },
                991: {
                    slidesPerView: 5,
                    spaceBetween: 30
                },
                575: {
                    slidesPerView: 6,
                    spaceBetween: 30
                },
                0: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
            }
        });
    }

    if (document.querySelector(".news__slider")) {
        new Swiper(".news__slider", {
            loop: false,
            slidesPerView: 6,
            spaceBetween: 40,
            breakpoints: {
                1600: {
                    spaceBetween: 40,
                    slidesPerView: 6
                },
                1199: {
                    spaceBetween: 40,
                    slidesPerView: 5
                },
                997: {
                    spaceBetween: 40,
                    slidesPerView: 4
                },
                0: {
                    spaceBetween: 20,
                    slidesPerView: 'auto'
                }
            }
        });
    }

    if (document.querySelector(".tidings__slider")) {
        new Swiper(".tidings__slider", {
            loop: false,
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.tidings__next',
                prevEl: '.tidings__prev'
            },
            breakpoints: {
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                0: {
                    slidesPerView: 2.2,
                    spaceBetween: 10
                }
            }
        });
    }
    if (document.querySelector(".client-results__slider")) {
        new Swiper(".client-results__slider", {
            slidesPerView: 5,
            spaceBetween: 30,
            watchOverflow: true,
            pagination: {
                el: '.client-results__pagination',
                clickable: true
            },
            breakpoints: {
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 30
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10
                }
            }
        });
    }
    // END SLIDERS

    // CASES: tabs + sliders
    if (document.querySelector(".cases")) {
        var caseSwipers = {};
        document.querySelectorAll(".cases__panel").forEach(function (panel) {
            var key = panel.getAttribute("data-panel");
            caseSwipers[key] = new Swiper(panel.querySelector(".cases__slider"), {
                slidesPerView: 3,
                spaceBetween: 30,
                watchOverflow: true,
                observer: true,
                observeParents: true,
                pagination: {
                    el: panel.querySelector(".cases__pagination"),
                    clickable: true
                },
                breakpoints: {

                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                }
            });
        });

        var caseTabs = document.querySelectorAll(".cases__tab");
        var casePanels = document.querySelectorAll(".cases__panel");
        caseTabs.forEach(function (tab) {
            tab.addEventListener("click", function () {
                var key = tab.getAttribute("data-tab");
                caseTabs.forEach(function (t) {
                    var active = t === tab;
                    t.classList.toggle("is-active", active);
                    t.setAttribute("aria-selected", active ? "true" : "false");
                });
                casePanels.forEach(function (panel) {
                    var active = panel.getAttribute("data-panel") === key;
                    panel.classList.toggle("is-active", active);
                    if (active && caseSwipers[key]) {
                        caseSwipers[key].update();
                    }
                });
            });
        });
    }

    // HOTEL MODULES: tag tabs (swap images + detail block)
    if (document.querySelector(".hotel-modules")) {
        var hmTags = [].slice.call(document.querySelectorAll(".hotel-modules__tag"));
        var hmBlock = document.querySelector(".hotel-modules__block");
        var hmDetailTitle = document.querySelector(".hotel-modules__detail-title");
        var hmDetailText = document.querySelector(".hotel-modules__detail-text");

        var hmPics = ["module-1.webp", "module-2.webp", "module-3.webp", "module-4.webp", "module-5.webp", "module-6.webp"];
        var hmLorem = "Office ipsum you must be muted. Out pushback wheel savvy gmail 4-blocker by contribution back-end individual. Reach rundown community my ground wheel helicopter. Seat switch baseline every illustration elephant we've moving chime.";

        function hmRender(index) {
            if (hmBlock) {
                var imgs = hmBlock.querySelectorAll("img");
                for (var k = 0; k < imgs.length; k++) {
                    imgs[k].src = "images/page-2/" + hmPics[(index + k) % hmPics.length];
                }
            }
            if (hmDetailTitle) hmDetailTitle.textContent = "h3 " + hmTags[index].textContent.trim();
            if (hmDetailText) hmDetailText.textContent = hmLorem;
        }

        hmTags.forEach(function (tag, index) {
            tag.addEventListener("click", function () {
                hmTags.forEach(function (t) { t.classList.remove("is-active"); });
                tag.classList.add("is-active");
                hmRender(index);
            });
        });
    }

    // ARTICLES CLAMP
    function adjustArticlesClamp() {
        document.querySelectorAll('.articles .tidings__text').forEach(function (textEl) {
            var item = textEl.closest('.tidings__item');
            var h3 = item ? item.querySelector('.tidings__name h3') : null;
            if (!h3) return;
            var lineHeight = parseFloat(getComputedStyle(h3).lineHeight);
            var lines = Math.round(h3.offsetHeight / lineHeight);
            if (lines <= 2) {
                textEl.style.webkitLineClamp = '4';
            } else if (lines === 3) {
                textEl.style.webkitLineClamp = '3';
            } else {
                textEl.style.webkitLineClamp = '1';
            }
        });
    }
    adjustArticlesClamp();
    window.addEventListener('resize', adjustArticlesClamp);
    // END ARTICLES CLAMP

    // PHONE MASK
    var phoneInput = document.querySelector('.js-hotel-phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            var digits = this.value.replace(/\D/g, '');
            if (digits.startsWith('7') || digits.startsWith('8')) {
                digits = digits.slice(1);
            }
            digits = digits.slice(0, 10);
            var result = '+7';
            if (digits.length > 0) result += ' (' + digits.slice(0, 3);
            if (digits.length >= 3) result += ') ' + digits.slice(3, 6);
            if (digits.length >= 6) result += '-' + digits.slice(6, 8);
            if (digits.length >= 8) result += '-' + digits.slice(8, 10);
            this.value = result;
        });

        phoneInput.addEventListener('keydown', function (e) {
            if (e.key === 'Backspace' && this.value === '+7') {
                e.preventDefault();
                this.value = '';
            }
        });

        phoneInput.addEventListener('focus', function () {
            if (!this.value) this.value = '+7';
        });

        phoneInput.addEventListener('blur', function () {
            if (this.value === '+7') this.value = '';
        });
    }
    // END PHONE MASK

    // TOOLS TABS
    document.querySelectorAll('.tools__link').forEach(link => {
        link.addEventListener('click', function () {
            const toolsWrap = document.querySelector('.tools__wrap');

            const currentActive = toolsWrap.querySelector('.tools__link-wrap.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }

            const parentWrap = this.closest('.tools__link-wrap');
            if (parentWrap) {
                parentWrap.classList.add('active');
            }
        });
    });
    // EDN TOOLS TABS

    // SEARCH
    document.querySelectorAll('.search-button').forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const parent = this.closest('.search-wrap');
            if (parent) {
                parent.classList.toggle('open');
            }
        });
    });

    document.querySelectorAll('.search-wrap').forEach(wrap => {
        wrap.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });

    document.body.addEventListener('click', function () {
        document.querySelectorAll('.search-wrap.open').forEach(openWrap => {
            openWrap.classList.remove('open');
        });
    });
    // END SEARCH

    // menu
    document.querySelector('.menu-button').addEventListener('click', function () {
        document.querySelector('.menu').classList.add('open');
    });

    document.querySelector('.menu__close').addEventListener('click', function () {
        document.querySelector('.menu').classList.remove('open');
    });

    document.querySelectorAll('.menu__nav-item').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('open');
        });
    });

    document.querySelectorAll('.menu__nav-sec').forEach(sec => {
        sec.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });
    // end menu

    // HOTEL FORM VALIDATION
    document.querySelectorAll('.hotel-price__form, .contacts__form').forEach(form => {
        const nameInput = form.querySelector('.js-hotel-name');
        const emailInput = form.querySelector('.js-hotel-email');
        const hotelInput = form.querySelector('.js-hotel-title');
        const phoneInput = form.querySelector('.js-hotel-phone');

        if (nameInput) {
            const validateName = () => {
                nameInput.setCustomValidity(nameInput.value.trim() ? '' : '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f');
            };

            nameInput.addEventListener('input', function () {
                this.value = this.value.replace(/[^A-Za-z\u0410-\u042F\u0430-\u044F\u0401\u0451\s]/g, '').replace(/\s{2,}/g, ' ');
                validateName();
            });

            nameInput.addEventListener('blur', validateName);
        }

        if (emailInput) {
            const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            const validateEmail = () => {
                emailInput.setCustomValidity(emailPattern.test(emailInput.value.trim()) ? '' : '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email \u043b\u0430\u0442\u0438\u043d\u0438\u0446\u0435\u0439');
            };

            emailInput.addEventListener('input', function () {
                this.value = this.value.replace(/[^A-Za-z0-9@._%+-]/g, '');
                validateEmail();
            });

            emailInput.addEventListener('blur', validateEmail);
        }

        if (hotelInput) {
            hotelInput.addEventListener('input', function () {
                if (this.value.length > 100) {
                    this.value = this.value.slice(0, 100);
                }
            });
        }

        if (phoneInput) {
            const formatPhone = value => {
                let digits = value.replace(/\D/g, '');

                if (!digits) {
                    return '';
                }

                if (digits[0] === '8') {
                    digits = '7' + digits.slice(1);
                } else if (digits[0] !== '7') {
                    digits = '7' + digits;
                }

                digits = digits.slice(0, 11);

                const parts = [
                    digits.slice(1, 4),
                    digits.slice(4, 7),
                    digits.slice(7, 9),
                    digits.slice(9, 11)
                ];

                let result = '+7';

                if (parts[0]) {
                    result += ' (' + parts[0];
                }
                if (parts[0].length === 3) {
                    result += ')';
                }
                if (parts[1]) {
                    result += ' ' + parts[1];
                }
                if (parts[2]) {
                    result += '-' + parts[2];
                }
                if (parts[3]) {
                    result += '-' + parts[3];
                }

                return result;
            };

            const validatePhone = () => {
                const digits = phoneInput.value.replace(/\D/g, '');
                phoneInput.setCustomValidity(digits.length === 11 ? '' : 'Введите телефон в формате +7 (999) 999-99-99');
            };

            phoneInput.addEventListener('input', function () {
                this.value = formatPhone(this.value);
                validatePhone();
            });

            phoneInput.addEventListener('blur', validatePhone);
        }

        form.addEventListener('submit', function (e) {
            if (nameInput) {
                nameInput.setCustomValidity(nameInput.value.trim() ? '' : '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f');
            }

            if (emailInput) {
                const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
                emailInput.setCustomValidity(emailPattern.test(emailInput.value.trim()) ? '' : '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email \u043b\u0430\u0442\u0438\u043d\u0438\u0446\u0435\u0439');
            }

            if (phoneInput) {
                const digits = phoneInput.value.replace(/\D/g, '');
                phoneInput.setCustomValidity(digits.length === 11 ? '' : 'Введите телефон в формате +7 (999) 999-99-99');
            }

            if (!form.checkValidity()) {
                e.preventDefault();
                form.reportValidity();
            }
        });
    });
    // END HOTEL FORM VALIDATION
});