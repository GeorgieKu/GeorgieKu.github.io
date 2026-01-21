let heroSwiper = document.querySelector('.hero__swiper')
if(heroSwiper) {
    const heroSwiper = new Swiper('.hero__swiper', {
        // Optional parameters
        direction: 'horizontal',
    
        // If we need pagination
        pagination: {
            el: '.hero__pagination',
        },
    });
}

let prdouctionSwiper = document.querySelector('.production__swiper')
if(prdouctionSwiper) {
    const prdouctionSwiper = new Swiper('.production__swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: '.production__btn-next',
            prevEl: '.production__btn-prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: "auto",
            }
        }
    
    });
}


let reviewsSwiper = document.querySelector('.reviews__swiper')
if(reviewsSwiper) {
    const reviewsSwiper = new Swiper('.reviews__swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: '.reviews__btn-next',
            prevEl: '.reviews__btn-prev',
        },
    
    });
}

let newsSwiper = document.querySelector('.reviews__swiper')
if(newsSwiper) {
    const newsSwiper = new Swiper('.news__swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: '.news__btn-next',
            prevEl: '.news__btn-prev',
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
    let contents = document.querySelectorAll('.faq__question');

    toggleButtons.forEach((toggleButton, index) => {
        let toggleArrow = toggleButton.querySelector('svg');
        openAcc(toggleButton, contents[index], toggleArrow);
    });

    // callback form validation
    const callbackForm = document.querySelector('.callback__form');
    if (callbackForm) {
        const inputs = callbackForm.querySelectorAll('.callback__input');
        const phoneInput = callbackForm.querySelector('input[name="phone"]');
        const emailInput = callbackForm.querySelector('input[name="email"]');
        const checkbox = document.querySelector('.checkbox__input');

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

        inputs.forEach((input) => {
            input.addEventListener('blur', function () {
                validateInput(input);
            });

            input.addEventListener('input', function () {
                clearState(input);
            });
        });

        callbackForm.addEventListener('submit', function (evt) {
            let isValid = true;

            inputs.forEach((input) => {
                const ok = validateInput(input);
                if (!ok) {
                    isValid = false;
                }
            });

            if (!checkbox || !checkbox.checked) {
                isValid = false;
            }

            if (!isValid) {
                evt.preventDefault();
            }
        });
    }
});
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("burger").addEventListener("click", function () {
            document.querySelector("header").classList.toggle("open")
        })
    })