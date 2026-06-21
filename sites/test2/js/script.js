document.addEventListener('DOMContentLoaded', function() {
    // SLIDERS
    new Swiper(".certificates__slider", {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: '.slider-control__next_certificates',
            prevEl: '.slider-control__prev_certificates'
        },
        breakpoints: {
            991: {spaceBetween: 20},
            0: {spaceBetween: 10},
        }
    });

    new Swiper(".parnters__slider", {
        loop: true,
        slidesPerView: 6,
        spaceBetween: 30,
        navigation: {
            nextEl: '.slider-control__next_parnters',
            prevEl: '.slider-control__prev_parnters'
        },
        breakpoints: {
            1600: {slidesPerView: 6,spaceBetween: 30},
            991: {slidesPerView: 5,spaceBetween: 30},
            575: {slidesPerView: 6,spaceBetween: 30},
            0: {slidesPerView: 3,spaceBetween: 10},
        }
    });

    new Swiper(".news__slider", {
        loop: false,
        slidesPerView: 6,
        spaceBetween: 40,
        breakpoints: {
            1600: {spaceBetween: 40,slidesPerView: 6},
            1199: {spaceBetween: 40,slidesPerView: 5},
            997: {spaceBetween: 40,slidesPerView: 4},
            0: {spaceBetween: 20,slidesPerView: 'auto'}
        }
    });
    // END SLIDERS

    // TOOLS TABS
    document.querySelectorAll('.tools__link').forEach(link => {
        link.addEventListener('click', function() {
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
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const parent = this.closest('.search-wrap');
            if (parent) {
                parent.classList.toggle('open');
            }
        });
    });

    document.querySelectorAll('.search-wrap').forEach(wrap => {
        wrap.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });

    document.body.addEventListener('click', function() {
        document.querySelectorAll('.search-wrap.open').forEach(openWrap => {
            openWrap.classList.remove('open');
        });
    });
    // END SEARCH

    // menu
    document.querySelector('.menu-button').addEventListener('click', function() {
        document.querySelector('.menu').classList.add('open');
    });

    document.querySelector('.menu__close').addEventListener('click', function() {
        document.querySelector('.menu').classList.remove('open');
    });

    document.querySelectorAll('.menu__nav-item').forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('open');
        });
    });

    document.querySelectorAll('.menu__nav-sec').forEach(sec => {
        sec.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    // end menu

    // HOTEL FORM VALIDATION
    document.querySelectorAll('.hotel-price__form').forEach(form => {
        const nameInput = form.querySelector('.js-hotel-name');
        const hotelInput = form.querySelector('.js-hotel-title');
        const phoneInput = form.querySelector('.js-hotel-phone');

        if (nameInput) {
            nameInput.addEventListener('input', function() {
                this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '').replace(/\s{2,}/g, ' ');
            });
        }

        if (hotelInput) {
            hotelInput.addEventListener('input', function() {
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

            phoneInput.addEventListener('input', function() {
                this.value = formatPhone(this.value);
                validatePhone();
            });

            phoneInput.addEventListener('blur', validatePhone);
        }

        form.addEventListener('submit', function(e) {
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
