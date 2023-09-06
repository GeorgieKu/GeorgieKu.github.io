new AirDatepicker('#datapicker', {
    range: true,
    multipleDatesSeparator: ' - '
});

const swiper = new Swiper('.hotel__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 20,
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 1,

  });

 

  const swiper2 = new Swiper('.entertainment__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        spaceBetween: 12,
      },
      721: {
        spaceBetween: 30,
      }
    }

  });

  const swiper4 = new Swiper('.rooms__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 20,
    slidesPerView: 'auto',
    initialSlide: 1,
    centeredSlides: true,
    breakpoints: {
      320: {
        spaceBetween: 16,
      },
      721: {
        spaceBetween: 20,
      }
    }
    
    
  

  });

  const swiper5 = new Swiper('.nav-swiper', {
    
        direction: 'horizontal',
        loop: false,
        spaceBetween: 30,
        slidesPerView: 'auto',


  });

  const swiper6 = new Swiper('.pills-service__swiper', {
    
    direction: 'horizontal',
    loop: false,
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 1,


});

const swiper7 = new Swiper('.round__swiper', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 20,



});

const swiper8 = new Swiper('.base-slider', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: true,
  initialSlide: 1,



});

const swiper9 = new Swiper('.room-choice__swiper', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.room-choice-next',
    prevEl: '.room-choice-prev',
  },



});

const swiper10 = new Swiper('.hero__benefits-swiper', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 10,
 




});

const swiper11 = new Swiper('.base-detail__swiper', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
  nextEl: '.base-detail-swiper-button-next',
  prevEl: '.base-detail-swiper-button-prev',
}
});


const swiper12 = new Swiper('.wedding-round-swiper', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto'

});

const swiper13 = new Swiper('.bath-services__swiper', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.bath-button-next',
    prevEl: '.bath-button-prev',
  }

});





const swiper14 = new Swiper('.bath-accessories__swiper', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 30,

});

const swiper15 = new Swiper('.bath__room-param-swiper', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,

});

const swiper16 = new Swiper('.bath__room-param-swiper-1', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 20,

});

const swiper17 = new Swiper('.alcove-round__swiper', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',


});

const swiper18 = new Swiper('.alcove__swiper', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',


});

const swiper19 = new Swiper('.contacts-page-round__swiper', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',


});
const swiper20 = new Swiper('.contacts-page-round__swiper-2', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',


});

const swiper21 = new Swiper('.img-swiper', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  initialSlide: 1,

});

const swiper22 = new Swiper('.loyalty-round__swiper ', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',


});

const swiper23 = new Swiper('.wedding-round-swiper-2', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',

  

});

const swiper24 = new Swiper('.wedding-new-swiper', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 16,
  navigation: {
    nextEl: '.wedding-button-next',
    prevEl: '.wedding-button-prev',
  },


});

const swiper25 = new Swiper('.news__bottom-swiper', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 16,
  navigation: {
    nextEl: '.news__bottom-next',
    prevEl: '.news__bottom-prev',
  },


});

const swiper26 = new Swiper('.welcome-pills-swiper ', {
    
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 30,


});

new WOW().init();
 

  const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const closeButton = document.querySelector("#close-btn");
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");

  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

closeButton.addEventListener('click', closeMenu);

function closeMenu() {
  popup.classList.remove('open');
  hamb.classList.remove('active');

}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

