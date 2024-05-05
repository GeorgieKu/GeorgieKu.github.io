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
   
   //Раскрытие меню фильтров на мобиле
   let mobileCatalogGoodsNav = document.querySelector('.aside__goods-content');
   let filter = document.querySelector('.filter');
   let close = document.querySelector('.mobile-nav__close');


   filter.addEventListener('click', function () {
       goodsNav.style.display = 'block'
       goodsCetegoryNav.style.display = 'none'
       filter.setAttribute('disabled', 'disabled')
       filterClicked = true;
       let body = document.querySelector('body');
       body.style.overflow = 'hidden';
       mobileCatalogGoodsNav.style.animation = 'fadeFromDown 1s';
       mobileCatalogGoodsNav.style.display = 'block';
       setTimeout(function () {
           filter.removeAttribute('disabled', 'disabled')
       }, 1000);
   });

   close.addEventListener('click', function () {
      
       let body = document.querySelector('body');
       body.style.overflow = 'auto';
       mobileMenu.style.backgroundColor = '#FFFFFF';
       mobileCatalogGoodsNav.classList.remove('visible');
       mobileCatalogGoodsNav.style.animation = 'fadeToDown 1s';

       setTimeout(function () {
           mobileCatalogGoodsNav.style.display = 'none';
           goodsNav.style.display = 'none'
           goodsCetegoryNav.style.display = 'none'
       }, 1000);
   });

   
   //Раскрытие меню на мобиле
let mobileCatalogNav = document.querySelector('.aside__content');
let mobileCatalogLink = document.querySelector('.mobile__catalog-link');
let mobileMenu = document.querySelector('.mobile-menu');
let goodsNav = document.querySelector('.goods__nav')
let goodsCetegoryNav = document.querySelector('.goods__category-nav')
let mobileCatalogLinkClicked = false;

mobileCatalogLink.addEventListener('click', function () {
   goodsNav.style.display = 'none'
   goodsCetegoryNav.style.display = 'block'
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
           goodsNav.style.display = 'none'
           goodsCetegoryNav.style.display = 'none'
           mobileCatalogLink.removeAttribute('disabled', 'disabled')
       }, 800);
   }

});

let goodsCategoryClose = document.getElementById('goodsCategoryClose')

goodsCategoryClose.addEventListener('click', function () {
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

//Открытие категори фильтров
   function openAcc(toggleButton, asideContents, goodsArrow) {
       toggleButton.addEventListener('click', function () {
           asideContents.classList.toggle('open');
           let currentRotation = goodsArrow.style.transform ? parseInt(goodsArrow.style.transform.replace('rotate(', '').replace('deg)', '')) : 0;
           let newRotation = currentRotation + 180;
           goodsArrow.style.transform = `rotate(${newRotation}deg)`;
       });
   }

   document.addEventListener('DOMContentLoaded', function () {
       let toggleButtons = document.querySelectorAll('.goods__item');
       let goodsContent = document.querySelectorAll('.goods__content');
       let goodsArrows = document.querySelectorAll('.goods__item svg');

       toggleButtons.forEach((toggleButton, index) => {
           openAcc(toggleButton, goodsContent[index], goodsArrows[index]);
       });
   });


   let btnUp = document.querySelectorAll(".up"),
       btnDown = document.querySelectorAll(".down"),
       input = document.querySelectorAll("input");

   input.forEach(item => {
       item.addEventListener('keypress', function (e) {
           if (e.key === "Enter") {
               e.preventDefault();
               sum();
           }
       });
       item.addEventListener('blur', function (e) {
           item.value = item.value === '' ? 0 : item.value;
           sum();
       });
   });

   btnDown.forEach(item => {
       item.addEventListener('click', function (e) {
           e.preventDefault();
           if (item.parentNode.querySelector("input").value > "0") {
               item.nextElementSibling.stepDown();
           };
           sum();
       });
   });

   btnUp.forEach(item => {
       item.addEventListener('click', function (e) {
           e.preventDefault();
           item.previousElementSibling.stepUp();
           sum();
       });
   })

   function sum() {
       let total = 0;
       let inputField = document.querySelectorAll(".row");
       inputField.forEach(item => {
           let value = item.querySelector("input").value;
           let price = item.querySelector(".price").textContent;
           total = value * price;
           let totalPrice = item.querySelector('.total').children[0].innerHTML = total + '€';
       });
   }

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

function toggleDropdown() {
    var dropdownOptions = document.querySelector('.dropdown-options');
    dropdownOptions.style.display = dropdownOptions.style.display === 'flex' ? 'none' : 'flex';
}

function selectOption(option) {
    document.querySelector('.dropdown-header-text').textContent = option;
    document.querySelector('.dropdown-options').style.display = 'none';
}
