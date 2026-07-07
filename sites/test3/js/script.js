let heroSwiper;
const heroSwiperMedia = window.matchMedia('(max-width: 1280px)');
let stepsSwiper;
let banksSwiper;
const banksSwiperMedia = window.matchMedia('(max-width: 1319px)');
let aboutSwiper;
const aboutSwiperMedia = window.matchMedia('(max-width: 1319px)');
let projectGalleryThumbsSwiper;
let projectGalleryMainSwiper;
let projectBuiltMainSwiper;

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

    if (projectModal?.open) {
        closeProjectModal();
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

const projectModal = document.querySelector('#project-detail-modal');
const projectModalCloseButtons = document.querySelectorAll('[data-project-modal-close]');
let projectModalLastFocus = null;

function setScrollbarCompensation() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.setProperty('--scrollbar-compensation', `${Math.max(scrollbarWidth, 0)}px`);
}

function resetScrollbarCompensation() {
    document.body.style.removeProperty('--scrollbar-compensation');
}

function initProjectModalSwipers() {
    if (!projectModal || typeof Swiper === 'undefined') {
        return;
    }

    if (!projectGalleryThumbsSwiper && projectModal.querySelector('.project-gallery-thumbs')) {
        projectGalleryThumbsSwiper = new Swiper('.project-gallery-thumbs', {
            slidesPerView: 4,
            spaceBetween: 10,
            watchSlidesProgress: true,
            breakpoints: {
                0: {
                    slidesPerView: 4,
                },
                576: {
                    slidesPerView: 4,
                },
            },
        });
    }

    if (!projectGalleryMainSwiper && projectModal.querySelector('.project-gallery-main')) {
        projectGalleryMainSwiper = new Swiper('.project-gallery-main', {
            loop: true,
            spaceBetween: 10,
            navigation: {
                nextEl: '.project-gallery-main-next',
                prevEl: '.project-gallery-main-prev',
            },
            on: {
                slideChange(swiper) {
                    updateProjectGalleryThumbs(swiper.realIndex);
                },
            },
        });
    }

    if (!projectBuiltMainSwiper && projectModal.querySelector('.project-built-main')) {
        projectBuiltMainSwiper = new Swiper('.project-built-main', {
            loop: true,
            spaceBetween: 10,
            navigation: {
                nextEl: '.project-built-main-next',
                prevEl: '.project-built-main-prev',
            },
            on: {
                slideChange(swiper) {
                    updateBuiltThumbs(swiper.realIndex);
                },
            },
        });
    }

    [
        projectGalleryThumbsSwiper,
        projectGalleryMainSwiper,
        projectBuiltMainSwiper,
    ].forEach((swiper) => swiper?.update());

    updateProjectGalleryThumbs(projectGalleryMainSwiper?.realIndex || 0);
    updateBuiltThumbs(projectBuiltMainSwiper?.realIndex || 0);
}

function updateProjectGalleryThumbs(activeIndex) {
    if (!projectModal) {
        return;
    }

    projectModal.querySelectorAll('.project-gallery-thumbs .swiper-slide').forEach((thumb, index) => {
        thumb.classList.toggle('is-active', index === activeIndex - 1);
    });
}

function updateBuiltThumbs(activeIndex) {
    if (!projectModal) {
        return;
    }

    projectModal.querySelectorAll('[data-built-slide]').forEach((thumb) => {
        thumb.classList.toggle('is-active', Number(thumb.dataset.builtSlide) === activeIndex);
    });

    scrollBuiltThumbs(activeIndex);
}

function scrollBuiltThumbs(activeIndex) {
    const thumbsContainer = projectModal?.querySelector('.project-built__thumbs');
    const thumbs = thumbsContainer ? Array.from(thumbsContainer.querySelectorAll('[data-built-slide]')) : [];

    if (!thumbsContainer || thumbs.length < 2 || !window.matchMedia('(max-width: 576px)').matches) {
        return;
    }

    if (thumbsContainer.scrollWidth <= thumbsContainer.clientWidth) {
        return;
    }

    const firstThumb = thumbs[0];
    const secondThumb = thumbs[1];
    const step = secondThumb.offsetLeft - firstThumb.offsetLeft || firstThumb.offsetWidth;
    const visibleCount = Math.max(1, Math.round(thumbsContainer.clientWidth / step));
    const maxStartIndex = Math.max(0, thumbs.length - visibleCount);
    const currentStartIndex = Math.round(thumbsContainer.scrollLeft / step);
    let targetStartIndex = currentStartIndex;

    if (activeIndex >= currentStartIndex + visibleCount - 2 && activeIndex < thumbs.length - 1) {
        targetStartIndex = activeIndex - visibleCount + 3;
    } else if (activeIndex <= currentStartIndex + 1 && activeIndex > 0) {
        targetStartIndex = activeIndex - 1;
    } else if (activeIndex === 0) {
        targetStartIndex = 0;
    }

    targetStartIndex = Math.min(Math.max(targetStartIndex, 0), maxStartIndex);

    if (targetStartIndex === currentStartIndex) {
        return;
    }

    thumbsContainer.scrollTo({
        left: thumbs[targetStartIndex].offsetLeft - firstThumb.offsetLeft,
        behavior: 'smooth',
    });
}

function openProjectModal(trigger) {
    if (!projectModal) {
        return;
    }

    projectModalLastFocus = trigger || document.activeElement;
    projectModal.classList.remove('is-open');
    setScrollbarCompensation();

    if (typeof projectModal.showModal === 'function') {
        projectModal.showModal();
    } else {
        projectModal.setAttribute('open', '');
    }

    document.body.classList.add('modal-open');
    document.documentElement.classList.add('modal-open');
    initProjectModalSwipers();
    requestAnimationFrame(() => {
        projectModal.classList.add('is-open');
    });
    projectModal.querySelector('.project-modal__close')?.focus();
}

function closeProjectModal() {
    if (!projectModal || !projectModal.open) {
        return;
    }

    projectModal.classList.remove('is-open');

    if (typeof projectModal.close === 'function') {
        projectModal.close();
    } else {
        projectModal.removeAttribute('open');
    }

    document.body.classList.remove('modal-open');
    document.documentElement.classList.remove('modal-open');
    resetScrollbarCompensation();

    if (projectModalLastFocus && typeof projectModalLastFocus.focus === 'function') {
        projectModalLastFocus.focus();
    }
}

document.querySelectorAll('.projects__link').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        openProjectModal(link);
    });
});

projectModalCloseButtons.forEach((button) => {
    button.addEventListener('click', closeProjectModal);
});

projectModal?.addEventListener('click', (event) => {
    if (event.target === projectModal) {
        closeProjectModal();
    }
});

projectModal?.addEventListener('close', () => {
    projectModal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    document.documentElement.classList.remove('modal-open');
    resetScrollbarCompensation();

    if (projectModalLastFocus && typeof projectModalLastFocus.focus === 'function') {
        projectModalLastFocus.focus();
    }
});

projectModal?.querySelectorAll('.project-gallery-thumbs .swiper-slide').forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        projectGalleryMainSwiper?.slideToLoop(index + 1);
        updateProjectGalleryThumbs(index + 1);
    });
});

projectModal?.querySelectorAll('[data-built-slide]').forEach((thumb) => {
    thumb.addEventListener('click', () => {
        const slideIndex = Number(thumb.dataset.builtSlide);

        projectBuiltMainSwiper?.slideToLoop(slideIndex);
        updateBuiltThumbs(slideIndex);
    });
});

const header = document.querySelector('.header');
const headerContainer = header?.closest('.wrapper > .container');

if (header && headerContainer) {
    let lastScrollY = window.scrollY;
    const scrollOffset = 80;
    const scrollDelta = 8;

    function updateHeaderVisibility() {
        const currentScrollY = window.scrollY;
        const scrollDifference = currentScrollY - lastScrollY;

        if (header.classList.contains('open') || currentScrollY <= scrollOffset) {
            headerContainer.classList.remove('is-header-hidden');
            lastScrollY = currentScrollY;
            return;
        }

        if (Math.abs(scrollDifference) < scrollDelta) {
            return;
        }

        headerContainer.classList.toggle('is-header-hidden', scrollDifference > 0);
        lastScrollY = currentScrollY;
    }

    updateHeaderVisibility();
    window.addEventListener('scroll', updateHeaderVisibility, { passive: true });
}

const revealSections = document.querySelectorAll('.hero, main > section, .footer');

if (revealSections.length) {
    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, {
            rootMargin: '0px 0px -12% 0px',
            threshold: 0.12,
        });

        revealSections.forEach((section) => {
            section.classList.add('section-reveal');
            sectionObserver.observe(section);
        });
    } else {
        revealSections.forEach((section) => {
            section.classList.add('is-visible');
        });
    }
}

  document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("burger").addEventListener("click", function () {
          document.querySelector("header").classList.toggle("open")
      })
  })