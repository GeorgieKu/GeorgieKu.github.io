document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open")
    })

    let catalogBtn = document.getElementById('catalogBtn');
    let catalogDD = document.getElementById('catalogDD');
    let headerMenu = document.querySelector('.header__menu');
    let menuDD = document.getElementById('menuDD');
    let itemDD = document.getElementById('itemDD');

    catalogBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        headerMenu.classList.toggle('active');
    });

    menuDD.addEventListener('click', function (event) {
        event.stopPropagation();
        itemDD.classList.toggle('active');
    });

    document.addEventListener('click', function () {
        headerMenu.classList.remove('active');
        itemDD.classList.remove('active');
    });

    catalogDD.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    itemDD.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    var swiper = new Swiper(".hero__swiper", {
        loop: false,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.hero-next',
            prevEl: '.hero-prev',
        }

    });

    var swiper2 = new Swiper(".tab__swiper", {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 16,
        navigation: {
            nextEl: '.category-next',
            prevEl: '.category-prev',
        }

    });

    var swiper3 = new Swiper(".card__swiper", {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 25,
        navigation: {
            nextEl: '.card-next',
            prevEl: '.card-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
            },
            576: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            }
        }

    });

    var swiper3 = new Swiper(".partners__swiper", {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 25,
        navigation: {
            nextEl: '.partners-next',
            prevEl: '.partners-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            }
        }

    });

    var swiper3 = new Swiper(".consult__swiper", {
        loop: false,
        slidesPerView: 2,
        spaceBetween: 24,
        navigation: {
            nextEl: '.consult-next',
            prevEl: '.consult-prev',
        },
        breakpoints: {
            976: {
                slidesPerView: 2,
            },
            450: {
                slidesPerView: 'auto',
            },
            320: {
                slidesPerView: 1,
            }
        }

    });

    var swiper3 = new Swiper(".within__swiper", {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 24,
        navigation: {
            nextEl: '.within-next',
            prevEl: '.within-prev',
        },
        breakpoints: {
            440: {
                slidesPerView: 'auto',
            },
            320: {
                slidesPerView: 1,
            }
        }

    });

    const buttons = document.querySelectorAll('.tab__btn');
    const tabs = document.querySelectorAll('.tab, .tab-2, .tab-3, .tab-4, .tab-5, .tab-6, .tab-7');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabs.forEach(tab => tab.classList.remove('active'));
            if (tabs[index]) {
                tabs[index].classList.add('active');
            }
        });
    });

    function openAcc(toggleButton, content, toggleArrow) {
        toggleButton.addEventListener('click', function () {
            content.classList.toggle('open');
            toggleArrow.classList.toggle('rotate');
    
        });
    }

    let toggleButtons = document.querySelectorAll('.acc');
    let contents = document.querySelectorAll('.content');

    toggleButtons.forEach((toggleButton, index) => {
        let toggleArrow = toggleButton.querySelector('svg');
        openAcc(toggleButton, contents[index], toggleArrow);
    });

    let modal = document.getElementById('modal');
let overlay = document.getElementById('overlay');
let closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', function () {
    modal.removeAttribute('open', 'open');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', function () {
    modal.removeAttribute('open', 'open');
    overlay.classList.remove('active');
})




let showMoreBtn = document.getElementById('showMore');
let list = document.querySelector('.product__block-3 ul');

if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function () {
        list.classList.toggle('open');

        if (list.classList.contains('open')) {
            showMoreBtn.textContent = 'Cкрыть характеристики'
        } else {
            showMoreBtn.textContent = 'Показать все характеристики'
        }
    })
}

})



function openModal() {
    modal.setAttribute('open', 'open');
    overlay.classList.add('active');
}