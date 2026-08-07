const resultsSwiper = new Swiper('.results__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 13,

    // Navigation arrows
    navigation: {
        nextEl: '.results__btn-next',
        prevEl: '.results__btn-prev',
    },
});


const storiesSwiper = new Swiper('.stories__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 37,

    breakpoints: {
        993: {
            slidesPerView: 4,
        },
        320: {
            slidesPerView: 'auto',
        }
    }


});

const photoSwiper = new Swiper('.photo__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 24,

    breakpoints: {
        993: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 'auto',
        }
    },
    pagination: {
        el: '.photo__pagination',
    },


});


const reputationSwiper = new Swiper('.reputation__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 40,

    navigation: {
        nextEl: '.reputation__btn-next',
        prevEl: '.reputation__btn-prev',
    },


});

const modal2 = document.getElementById('videoModal');
const modalVideo = modal2.querySelector('video');
const closeBtn = modal2.querySelector('.video-modal__close');
const overlay = modal2.querySelector('.video-modal__overlay');

document.querySelectorAll('.about__play').forEach(button => {
    button.addEventListener('click', () => {
        const video = button.parentElement.querySelector('video');

        modalVideo.src = video.src;
        modalVideo.poster = video.poster;

        modal2.classList.add('active');

        modalVideo.play();
    });
});

function closeModal() {
    modalVideo.pause();
    modal2.classList.remove('active');

    setTimeout(() => {
        modalVideo.currentTime = 0;
        modalVideo.removeAttribute('src');
        modalVideo.load();
    }, 300);
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal2.classList.contains('active')) {
        closeModal();
    }
});
let agreements = document.querySelectorAll('.agreement');

let modal = document.querySelector('.modal')


agreements.forEach((agreement) => {
    let customCheckbox = agreement.querySelector('.custom__checkbox')
    let checkboxInput = agreement.querySelector('input[type="checkbox"]')
    agreement.addEventListener('click', function () {
        customCheckbox.classList.toggle('custom__checkbox_active')
        checkboxInput.checked = customCheckbox.classList.contains('custom__checkbox_active')
    })
})


function openModal() {
    modal.showModal()
}

function modalClose() {
    modal.close()
}
