let cartBtns = document.querySelectorAll('.hero__cart')
let cartCloseBtn = document.querySelector('.cart__close')
let cartModal = document.querySelector('.cart__modal')
let overlay = document.querySelector('.overlay')

cartBtns.forEach(function(cartBtn) {
    cartBtn.addEventListener('click', function() {
        cartModal.style.display = 'block'
        overlay.style.display = 'block'
    })
})

cartCloseBtn.addEventListener('click', function() {
    cartModal.style.display = 'none'
    overlay.style.display = 'none'
})

//Раскрытие меню
function openAcc(toggleButton, goodsContent) {
    toggleButton.addEventListener('click', function () {
        goodsContent.classList.toggle('open');

    });
}

document.addEventListener('DOMContentLoaded', function () {
    let toggleButtons = document.querySelectorAll('.aside__btn');
    let asideContents = document.querySelectorAll('.aside__content');

    toggleButtons.forEach((toggleButton, index) => {
        openAcc(toggleButton, asideContents[index]);
    });
});


//Раскрытие меню на мобиле
let mobileCatalogNav = document.querySelector('.aside__content');
let mobileCatalogLink = document.querySelector('.mobile__catalog-link');
let mobileMenu = document.querySelector('.mobile-menu');
let close = document.querySelector('.mobile-nav__close');
let mobileCatalogLinkClicked = false;

mobileCatalogLink.addEventListener('click', function () {

    if (!mobileCatalogLinkClicked) {
        mobileCatalogLink.setAttribute('disabled', 'disabled')
        mobileCatalogLinkClicked = true;
        let body = document.querySelector('body');
        body.style.overflow = 'hidden';
        mobileCatalogNav.style.animation = 'fadeFromDown 1s';
        mobileCatalogNav.style.display = 'block';
        setTimeout(function () {
            mobileCatalogLink.removeAttribute('disabled', 'disabled')
        }, 800);
    } else {
        mobileCatalogLink.setAttribute('disabled', 'disabled')
        mobileCatalogLinkClicked = false;
        let body = document.querySelector('body');
        body.style.overflow = 'auto';
        mobileMenu.style.backgroundColor = '#FFFFFF';
        mobileCatalogNav.classList.remove('visible');
        mobileCatalogNav.style.animation = 'fadeToDown 1s';

        setTimeout(function () {
            mobileCatalogNav.style.display = 'none';
            mobileCatalogLink.removeAttribute('disabled', 'disabled')
        }, 800);
    }

});

close.addEventListener('click', function () {
    mobileCatalogLinkClicked = false;
    let body = document.querySelector('body');
    body.style.overflow = 'auto';
    mobileMenu.style.backgroundColor = '#FFFFFF';
    mobileCatalogNav.classList.remove('visible');
    mobileCatalogNav.style.animation = 'fadeToDown 1s';

    setTimeout(function () {
        mobileCatalogLink.removeAttribute('disabled', 'disabled')
        mobileCatalogNav.style.display = 'none';
    }, 1000);
});

function toggleDropdown() {
    var dropdownOptions = document.querySelector('.dropdown-options');
    dropdownOptions.style.display = dropdownOptions.style.display === 'flex' ? 'none' : 'flex';
}

function selectOption(option) {
    document.querySelector('.dropdown-header-text').textContent = option;
    document.querySelector('.dropdown-options').style.display = 'none';
}

if (window.location.href.indexOf("order.html") > -1) {
    let formLabel = document.querySelector('.form__block-2')

    formLabel.addEventListener('click', function () {
        let formCheckbox = document.querySelector('.form__checkbox')

        formCheckbox.classList.toggle('checked')
    })
}



if (window.location.href.indexOf("index.html") > -1) {
    // Свайпер в hero
    const swiper = new Swiper('.hero__swiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.hero__swiper-pagination',
        },


    });
}

