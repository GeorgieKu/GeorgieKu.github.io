//Раскрытие меню
function openAcc(toggleButton, asideContents) {
    toggleButton.addEventListener('click', function() {
        asideContents.classList.toggle('open');
        
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let toggleButtons = document.querySelectorAll('.aside__btn');
    let asideContents = document.querySelectorAll('.aside__content');
    
    toggleButtons.forEach((toggleButton, index) => {
        openAcc(toggleButton, asideContents[index]);
    });
});


//Раскрытие меню на мобиле
let mobileCatalogNav = document.querySelector('.mobile__nav');
let mobileCatalogLink = document.querySelector('.mobile__catalog-link');
let mobileMenu = document.querySelector('.mobile-menu');
let close = document.querySelector('.mobile-nav__close');

mobileCatalogLink.addEventListener('click', function() {
    let body = document.querySelector('body');
    body.style.overflow = 'hidden';
    mobileCatalogNav.style.animation =  'fadeFromDown 1s';
    mobileCatalogNav.style.display = 'block'; 


    setTimeout(function() {
        mobileMenu.style.backgroundColor = '#F6F6F6';
        mobileCatalogNav.classList.add('visible');
    }, 100);
});

close.addEventListener('click', function() {
    let body = document.querySelector('body');
    body.style.overflow = 'auto';
    mobileMenu.style.backgroundColor = '#FFFFFF';
    mobileCatalogNav.classList.remove('visible'); 
    mobileCatalogNav.style.animation =  'fadeToDown 1s';
 
    setTimeout(function() {
        mobileCatalogNav.style.display = 'none';
    }, 1000); 
});

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

  function toggleDropdown() {
    var dropdownOptions = document.querySelector('.dropdown-options');
    dropdownOptions.style.display = dropdownOptions.style.display === 'flex' ? 'none' : 'flex';
}

function selectOption(option) {
    document.querySelector('.dropdown-header-text').textContent = option;
    document.querySelector('.dropdown-options').style.display = 'none';
}