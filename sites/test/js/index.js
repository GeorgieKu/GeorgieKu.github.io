document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })

    let headerCatalogBtn = document.getElementById('headerCatalogBtn');
    let headerCatalogList = document.querySelector('.header__catalog-list');
    let headerCatalogBlock = document.querySelector('.header__catalog-block')

    headerCatalogBtn.addEventListener('click', function() {
        headerCatalogBlock.classList.toggle('open');
    })

    let requestCheckboxBlocks = document.querySelectorAll('.request__checkbox-block');

requestCheckboxBlocks.forEach(function(requestCheckboxBlock) {
    requestCheckboxBlock.addEventListener('click', function() {
        let requestCheckbox = requestCheckboxBlock.querySelector('.request__checkbox');
        requestCheckbox.toggleAttribute('checked');
        let requestCustomCheckbox = requestCheckboxBlock.querySelector('.request__custom-checkbox');
        requestCustomCheckbox.classList.toggle('active');
    })
})


const swiper = new Swiper('.about__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
        nextEl: '.about-next',
        prevEl: '.about-prev',
      },
  });

  const swiper2 = new Swiper('.company__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 24,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.company-next',
        prevEl: '.company-prev',
      },
    pagination: {
        el: ".company__pagination"
    }
    
  });
})

function openModal() {
    let modal = document.querySelector('.modal');
    let overlay = document.querySelector('.overlay');
    overlay.style.display = 'block';
    modal.setAttribute('open', 'open');

    overlay.addEventListener('click', function() {
        modal.removeAttribute('open', 'open');
        overlay.style.display = 'none';
    })
}