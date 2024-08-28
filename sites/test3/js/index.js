document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open")
    })

    let showBtn = document.querySelector('.show-btn');
    showBtn.addEventListener('click' , function() {
        let corpTags = document.querySelectorAll('.corp__tags span');
        corpTags.forEach(function(corpTag) {
            corpTag.style.display = 'block'
        })
        showBtn.style.display = 'none'
    })

    //Ниже все что связано с модалками и формами

    let modal = document.getElementById('modal');

    const nameInput = document.getElementById('nameInput');
    const nameIcon = document.getElementById('nameIcon');
    const phoneInput = document.getElementById('phoneInput');
    let modal2Textarea = document.getElementById('modal2Textarea')
    const nameInput2 = document.getElementById('nameInput2');
    const nameIcon2 = document.getElementById('nameIcon2');
    const phoneInput2 = document.getElementById('phoneInput2');
    let heroPhone = document.getElementById('heroPhone');
    let consultPhone = document.getElementById('consultPhone');
    let formBtn = document.querySelector('.form-btn');
    let formBtn2 = document.querySelector('.form-btn-2');



    function openModal(images) {
        let swiperWrapper = document.querySelector('.modal-wrapper');
        swiperWrapper.innerHTML = '';


        images.forEach(image => {
            let slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            slide.innerHTML = `<img src="${image}" alt="Zoomed Image">`;
            swiperWrapper.appendChild(slide);
        });


        swiper.update();
        swiper.slideTo(0);

        modal.classList.add('show');
    }




    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });


    let imgCards = document.querySelectorAll('.object__img-card');
    imgCards.forEach(function (card) {
        card.addEventListener('click', function () {
            let images = JSON.parse(card.getAttribute('data-images'));
            openModal(images);
        });
    });




    nameInput.addEventListener('input', function (e) {
        this.value = this.value.replace(/\d/g, '');


        if (this.value.length > 2) {
            nameIcon.style.display = 'block';
            this.style.color = '';
        } else {
            nameIcon.style.display = 'none';
            this.style.color = 'rgba(237, 0, 0, 1)';
        }
    });

    nameInput2.addEventListener('input', function (e) {
        this.value = this.value.replace(/\d/g, '');


        if (this.value.length > 2) {
            nameIcon2.style.display = 'block';
            this.style.color = '';
        } else {
            nameIcon2.style.display = 'none';
            this.style.color = 'rgba(237, 0, 0, 1)';
        }
    });

    Inputmask({
        mask: "+7 (999) 999-99-99"
    }).mask(phoneInput);
    Inputmask({
        mask: "+7 (999) 999-99-99"
    }).mask(phoneInput2);
    Inputmask({
        mask: "+7 (999) 999-99-99"
    }).mask(heroPhone);
    Inputmask({
        mask: "+7 (999) 999-99-99"
    }).mask(consultPhone);

    formBtn.addEventListener('click', function () {
        if (nameInput.value.length > 2 && phoneInput.value.length > 10 && modal2Textarea.value.length > 3) {
            let modalBody = document.querySelector('.modal__body')
            let modalSuccess = document.querySelector('.modal__success')
            modalBody.style.display = 'none';
            modalSuccess.style.display = 'block'
        }

    })

    formBtn2.addEventListener('click', function () {
        if (nameInput2.value.length > 2 && phoneInput2.value.length > 10) {
            let modalBody2 = document.querySelector('.modal__body-2')
            let modalSuccess2 = document.querySelector('.modal__success-2')
            modalBody2.style.display = 'none';
            modalSuccess2.style.display = 'block'
            modal3.style.maxWidth = '410px'
            modal3.style.width = '90%'
            modal3.style.padding = '40px 0'
        }
    })
})
let modal3 = document.getElementById('modal3');
let overlay = document.getElementById('overlay');
let body = document.querySelector('body');

function openModal() {
    modal3.style.display = 'block';
    overlay.style.display = 'block';
    body.style.overflow = 'hidden'
}

overlay.addEventListener('click', function () {
    modal3.style.display = 'none';
    overlay.style.display = 'none';
    body.style.overflow = 'auto'
})

let closes = document.querySelectorAll('.close');


closes.forEach(function(close) {
    close.addEventListener('click', function () {
        modal3.style.display = 'none';
        overlay.style.display = 'none';
        body.style.overflow = 'auto'
        modal.classList.remove('show')
    })
})

let lastScrollY = window.pageYOffset;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;

    if (currentScrollY === 0) {
        // Если на самом верху страницы, всегда показываем header
        header.classList.add('show');
    } else if (currentScrollY < lastScrollY) {
        // Если прокручиваем вверх, показываем header
        header.classList.add('show');
    } else {
        // Если прокручиваем вниз, скрываем header
        header.classList.remove('show');
    }

    lastScrollY = currentScrollY;
});

// Показать header при загрузке страницы, если пользователь на самом верху
if (window.pageYOffset === 0) {
    header.classList.add('show');
}