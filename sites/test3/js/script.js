let heroSwiper;
const heroSwiperMedia = window.matchMedia('(max-width: 1280px)');
let stepsSwiper;
let banksSwiper;
const banksSwiperMedia = window.matchMedia('(max-width: 1319px)');
let aboutSwiper;
const aboutSwiperMedia = window.matchMedia('(max-width: 1319px)');

function initHeroSwiper() {
    if (heroSwiper || !document.querySelector('.hero__swiper')) {
        return;
    }

    heroSwiper = new Swiper('.hero__swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1.15,
        spaceBetween: 10,
        pagination: {
            el: '.hero__pagination',
            clickable: true,
        },
        breakpoints: {
            600: {
                slidesPerView: 2,



            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

function destroyHeroSwiper() {
    if (!heroSwiper) {
        return;
    }

    heroSwiper.destroy(true, true);
    heroSwiper = null;
}

function toggleHeroSwiper(event) {
    if (event.matches) {
        initHeroSwiper();
    } else {
        destroyHeroSwiper();
    }
}

toggleHeroSwiper(heroSwiperMedia);
heroSwiperMedia.addEventListener('change', toggleHeroSwiper);

function initStepsSwiper() {
    if (stepsSwiper || !document.querySelector('.steps__swiper')) {
        return;
    }

    stepsSwiper = new Swiper('.steps__swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.steps__pagination',
            clickable: true,
        },
        breakpoints: {
            576: {
                spaceBetween: 16,
            },
            900: {
                spaceBetween: 20,
            },
        },
    });
}

function destroyStepsSwiper() {
    if (!stepsSwiper) {
        return;
    }

    stepsSwiper.destroy(true, true);
    stepsSwiper = null;
}

function toggleStepsSwiper() {
    const stepsSlider = document.querySelector('.steps__swiper');

    if (!stepsSlider) {
        return;
    }

    const slides = stepsSlider.querySelectorAll('.swiper-slide');
    const firstSlide = slides[0];
    const minSlideWidth = firstSlide ? parseFloat(getComputedStyle(firstSlide).minWidth) : 0;
    const gap = 20;
    const minStaticWidth = slides.length * minSlideWidth + (slides.length - 1) * gap;

    if (stepsSlider.clientWidth < minStaticWidth) {
        initStepsSwiper();
    } else {
        destroyStepsSwiper();
    }
}

toggleStepsSwiper();
window.addEventListener('resize', toggleStepsSwiper);

function initBanksSwiper() {
    if (banksSwiper || !document.querySelector('.banks__swiper')) {
        return;
    }

    banksSwiper = new Swiper('.banks__swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1.15,
        spaceBetween: 12,
        pagination: {
            el: '.banks__pagination',
            clickable: true,
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });
}

function destroyBanksSwiper() {
    if (!banksSwiper) {
        return;
    }

    banksSwiper.destroy(true, true);
    banksSwiper = null;
}

function toggleBanksSwiper(event) {
    if (event.matches) {
        initBanksSwiper();
    } else {
        destroyBanksSwiper();
    }
}

toggleBanksSwiper(banksSwiperMedia);
banksSwiperMedia.addEventListener('change', toggleBanksSwiper);

function initAboutSwiper() {
    if (aboutSwiper || !document.querySelector('.about__swiper')) {
        return;
    }

    aboutSwiper = new Swiper('.about__swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 10,
        pagination: {
            el: '.about__pagination',
            clickable: true,
        },
    });
}

function destroyAboutSwiper() {
    if (!aboutSwiper) {
        return;
    }

    aboutSwiper.destroy(true, true);
    aboutSwiper = null;
}

function toggleAboutSwiper(event) {
    if (event.matches) {
        initAboutSwiper();
    } else {
        destroyAboutSwiper();
    }
}

toggleAboutSwiper(aboutSwiperMedia);
aboutSwiperMedia.addEventListener('change', toggleAboutSwiper);

document.querySelectorAll('.price__range').forEach((range) => {
    const output = document.querySelector(`.price__range-value[for="${range.id}"]`);

    function updateRange() {
        const min = Number(range.min) || 0;
        const max = Number(range.max) || 100;
        const value = Number(range.value);
        const progress = ((value - min) / (max - min)) * 100;

        range.style.setProperty('--range-progress', `${progress}%`);

        if (output) {
            output.value = value;
            output.textContent = value;
        }
    }

    updateRange();
    range.addEventListener('input', updateRange);
});

const houseAreaInput = document.querySelector('#house-area');

if (houseAreaInput) {
    function getAreaNumber() {
        return houseAreaInput.value.replace(/\D/g, '').slice(0, 4);
    }

    houseAreaInput.addEventListener('focus', () => {
        houseAreaInput.value = getAreaNumber();
    });

    houseAreaInput.addEventListener('input', () => {
        houseAreaInput.value = getAreaNumber();
    });

    houseAreaInput.addEventListener('blur', () => {
        const value = getAreaNumber();

        houseAreaInput.value = value ? `${value} м²` : '';
    });
}

document.querySelectorAll('[data-select]').forEach((select) => {
    const button = select.querySelector('.price__select-btn');
    const buttonText = button?.querySelector('span');
    const input = select.querySelector('input[type="hidden"]');
    const options = select.querySelectorAll('.price__select-option');

    if (!button || !buttonText || !input) {
        return;
    }

    function closeSelect() {
        select.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
    }

    button.addEventListener('click', () => {
        const isOpen = select.classList.contains('is-open');

        document.querySelectorAll('[data-select].is-open').forEach((openedSelect) => {
            if (openedSelect !== select) {
                openedSelect.classList.remove('is-open');
                openedSelect.querySelector('.price__select-btn')?.setAttribute('aria-expanded', 'false');
            }
        });

        select.classList.toggle('is-open', !isOpen);
        button.setAttribute('aria-expanded', String(!isOpen));
    });

    options.forEach((option) => {
        option.addEventListener('click', () => {
            options.forEach((currentOption) => {
                currentOption.classList.remove('is-active');
                currentOption.setAttribute('aria-selected', 'false');
            });

            option.classList.add('is-active');
            option.setAttribute('aria-selected', 'true');
            input.value = option.dataset.value || option.textContent.trim();
            buttonText.textContent = option.textContent.trim();
            closeSelect();
        });
    });
});

document.addEventListener('click', (event) => {
    if (event.target.closest('[data-select]')) {
        return;
    }

    document.querySelectorAll('[data-select].is-open').forEach((select) => {
        select.classList.remove('is-open');
        select.querySelector('.price__select-btn')?.setAttribute('aria-expanded', 'false');
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
        return;
    }

    document.querySelectorAll('[data-select].is-open').forEach((select) => {
        select.classList.remove('is-open');
        select.querySelector('.price__select-btn')?.setAttribute('aria-expanded', 'false');
    });
});

document.querySelector('.price__form')?.addEventListener('submit', (event) => {
    event.preventDefault();
});

  document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("burger").addEventListener("click", function () {
          document.querySelector("header").classList.toggle("open")
      })
  })