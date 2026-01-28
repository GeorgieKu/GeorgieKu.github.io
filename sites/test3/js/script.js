let heroSwiper = document.querySelector('.hero__swiper')
if (heroSwiper) {
    const heroSwiper = new Swiper('.hero__swiper', {

        direction: 'horizontal',

        pagination: {
            el: '.hero__pagination',
        },
    });
}

let prdouctionSwiper = document.querySelector('.production__swiper')
if (prdouctionSwiper) {
    const prdouctionSwiper = new Swiper('.production__swiper', {

        direction: 'horizontal',
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: '.production__btn-next',
            prevEl: '.production__btn-prev',
        },
        breakpoints: {
            300: {
                spaceBetween: 10,
            },
            576: {
                spaceBetween: 20,
            }
        }

    });
}


let reviewsSwiper = document.querySelector('.reviews__swiper')
if (reviewsSwiper) {
    const reviewsSwiper = new Swiper('.reviews__swiper', {

        direction: 'horizontal',
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: '.reviews__btn-next',
            prevEl: '.reviews__btn-prev',
        },
        breakpoints: {
            300: {
                spaceBetween: 10,
            },
            576: {
                spaceBetween: 20,
            }
        }

    });
}

let newsSwiper = document.querySelector('.reviews__swiper')
if (newsSwiper) {
    const newsSwiper = new Swiper('.news__swiper', {

        direction: 'horizontal',
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: '.news__btn-next',
            prevEl: '.news__btn-prev',
        },
        breakpoints: {
            300: {
                direction: 'vertical',
                spaceBetween: 10,

            },
            576: {
                direction: 'horizontal',
                spaceBetween: 20,
            }
        }

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
    let contents = document.querySelectorAll('.acc-container');

    toggleButtons.forEach((toggleButton, index) => {
        let toggleArrow = toggleButton.querySelector('svg');
        openAcc(toggleButton, contents[index], toggleArrow);
    });
});


document.querySelectorAll('.callback__form').forEach(function (callbackForm) {
    const inputs = callbackForm.querySelectorAll('.callback__input');
    const phoneInput = callbackForm.querySelector('input[name="phone"]');
    const emailInput = callbackForm.querySelector('input[name="email"]');
    const checkbox = callbackForm.querySelector('.checkbox__input');

    const phoneRegExp = /^\+?\d[\d\s\-()]{7,}$/;
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setError(input) {
        input.classList.add('callback__input_error');
        input.classList.remove('callback__input_success');
    }

    function setSuccess(input) {
        input.classList.remove('callback__input_error');
        input.classList.add('callback__input_success');
    }

    function clearState(input) {
        input.classList.remove('callback__input_error');
        input.classList.remove('callback__input_success');
    }

    function validateInput(input) {
        const value = input.value.trim();

        if (!value) {
            setError(input);
            return false;
        }

        if (input === phoneInput) {
            if (!phoneRegExp.test(value)) {
                setError(input);
                return false;
            }
        }

        if (input === emailInput) {
            if (!emailRegExp.test(value)) {
                setError(input);
                return false;
            }
        }

        setSuccess(input);
        return true;
    }

    inputs.forEach(input => {
        input.addEventListener('blur', () => validateInput(input));
        input.addEventListener('input', () => clearState(input));
    });

    callbackForm.addEventListener('submit', function (evt) {
        let isValid = true;

        inputs.forEach(input => {
            const ok = validateInput(input);
            if (!ok) isValid = false;
        });

        if (!checkbox || !checkbox.checked) {
            isValid = false;
        }

        if (!isValid) {
            evt.preventDefault();
        }
    });
});


let ddButton = document.querySelector('.links');

if (ddButton && window.innerWidth < 993) {
    ddButton.addEventListener('click', function () {
        ddButton.classList.toggle('active')
    })
}

let sortBtn = document.querySelector('.sort__selected');
let sort = document.querySelector('.sort');
let sortBtns = document.querySelectorAll('.sort__btn')
if (sort) {
    sort.addEventListener('click', function () {
        sort.classList.toggle('active');
    })

    sortBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            let sortBtnText = btn.textContent;
            sortBtn.textContent = sortBtnText;
        })
    })
}



let videoCards = document.querySelectorAll('.video-gallery__card')

if (videoCards) {
    videoCards.forEach(function (videoCard) {
        let video = videoCard.querySelector('.video-gallery__video');
        let videoPlayBtn = videoCard.querySelector('.video-gallery__btn');
        videoPlayBtn.addEventListener('click', function () {
            if (videoPlayBtn.classList.contains('played')) {
                video.load()
                videoPlayBtn.classList.remove('played')
            } else {
                videoPlayBtn.classList.add('played')
                video.play()
            }

        })

        video.addEventListener("ended", function () {
            this.src = this.src
        });
    })
}

let videoSwiper = document.querySelector('.video-gallery__swiper')
if (videoSwiper) {
    const videoSwiper = new Swiper('.video-gallery__swiper', {
        direction: 'horizontal',
        slidesPerView: "auto",
        spaceBetween: 20,
        breakpoints: {
            300: {
                spaceBetween: 10,
            },
            576: {
                spaceBetween: 20,
            }
        }

    });
}


let contactsPageSwiper = document.querySelector('.contacts-page__swiper')
if (contactsPageSwiper) {
    const contactsPageSwiper = new Swiper('.contacts-page__swiper', {
        direction: 'horizontal',
        slidesPerView: "auto",
        spaceBetween: 20,
    });
}
//  карта на странице контактов в дестктопе
const popup = document.getElementById('popup');

if (popup && innerWidth > 993) {
    function showPopup(evt, text) {
        popup.textContent = text;
        popup.style.left = (evt.pageX + 10) + 'px';
        popup.style.top = (evt.pageY + 10) + 'px';
        popup.classList.add('visible');
    }

    function hidePopup() {
        popup.classList.remove('visible');
    }
}




// Список и карта на странице контактов в мобилке
const paths = document.querySelectorAll('path.show-popup');
const customSelect = document.querySelector('.custom-select');
if (customSelect) {
    paths.forEach(path => {
        path.addEventListener('mouseenter', evt => {
            const text = path.getAttribute('data-popup') || 'Нет описания';
            showPopup(evt, text);
        });
        path.addEventListener('mousemove', evt => {
            popup.style.left = (evt.pageX + 10) + 'px';
            popup.style.top = (evt.pageY + 10) + 'px';
        });
        path.addEventListener('mouseleave', hidePopup);
    });

    (function () {

        const selected = customSelect.querySelector('.select-selected');
        const itemsContainer = customSelect.querySelector('.select-items');
        const options = itemsContainer.querySelectorAll('.select-item');
        const svgPaths = document.querySelectorAll('svg path[data-value]');

        function openDropdown() {
            itemsContainer.classList.add('open');
            selected.classList.add('open');
            customSelect.setAttribute('aria-expanded', 'true');
        }

        function closeDropdown() {
            itemsContainer.classList.remove('open');
            selected.classList.remove('open');
            customSelect.setAttribute('aria-expanded', 'false');
        }

        function toggleDropdown() {
            if (itemsContainer.classList.contains('open')) {
                closeDropdown();
            } else {
                openDropdown();
            }
        }

        function clearHighlight() {
            svgPaths.forEach(path => path.classList.remove('highlighted'));
        }

        function highlightPath(value) {
            clearHighlight();
            const pathToHighlight = document.querySelector(`svg path[data-value="${value}"]`);
            if (pathToHighlight) {
                pathToHighlight.classList.add('highlighted');
            }
        }

        function selectOption(option) {
            options.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');

            selected.textContent = option.textContent;
            selected.dataset.value = option.dataset.value;

            highlightPath(option.dataset.value);
        }


        let initialSelected = itemsContainer.querySelector('.select-item.selected');
        if (initialSelected) {
            highlightPath(initialSelected.dataset.value);
        }

        selected.addEventListener('click', () => {
            toggleDropdown();
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                selectOption(option);
                closeDropdown();
            });
        });


        document.addEventListener('click', e => {
            if (!customSelect.contains(e.target)) {
                closeDropdown();
            }
        });


    })();
}
function showOld() {
    let old = document.querySelector('.old');
    old.classList.toggle('show')
}
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("burger").addEventListener("click", function () {
            document.querySelector("header").classList.toggle("open")
        })
    })
let modal = document.querySelector('.modal')

function openModal() {
    modal.showModal()
}

function closeModal() {
    modal.close()
}

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});