
let swiperBlockSwiper = document.querySelector('.swiper-block__swiper')

if (swiperBlockSwiper) {
  const swiper = new Swiper('.swiper-block__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
  
  });
}



  AOS.init();

  document.addEventListener('scroll', function() {
    const header = document.querySelector('header');  
    const darkBlocks = document.querySelectorAll('.dark'); 
    const lightBlocks = document.querySelectorAll('.light');  

    let darkInViewport = false;
    let lightInViewport = false;


    darkBlocks.forEach((darkBlock) => {
        const darkPosition = darkBlock.getBoundingClientRect().top;
        if (darkPosition <= 0 && darkPosition >= -darkBlock.offsetHeight) {
            darkInViewport = true;
        }
    });

    lightBlocks.forEach((lightBlock) => {
        const lightPosition = lightBlock.getBoundingClientRect().top;
        if (lightPosition <= 0 && lightPosition >= -lightBlock.offsetHeight) {
            lightInViewport = true;
        }
    });

    if (darkInViewport) {
        header.classList.add('darkmode');
        header.classList.remove('lightmode');
    } else if (lightInViewport) {
        header.classList.add('lightmode');
        header.classList.remove('darkmode');
    } else {
        header.classList.remove('darkmode', 'lightmode');
    }
});

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu')

if(menuBtn) {
  menuBtn.addEventListener('click', function() {
    menu.classList.toggle('open')
})
}




let filterBtn = document.querySelector('.map-frame__btn');
let filterBlock = document.querySelector('.map-filter__block');
let filterItems = document.querySelectorAll('.map-filter__category button');

if(filterBtn) {
  filterBtn.addEventListener('click', function() {
    filterBlock.classList.toggle('open')
    filterBtn.classList.toggle('open')
  });
  filterItems.forEach(function(filterItem) {
    filterItem.addEventListener('click', function() {
      filterItem.classList.toggle('clicked')
    })
  })
}


document.addEventListener("DOMContentLoaded", function() {
  let burger = document.getElementById('burger');
  if(burger) {
    burger.addEventListener("click", function() {
      document.querySelector("header").classList.toggle("open")
  })
}
})
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.main-page');

  if(header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      if (currentScroll > 50) {
        // Если скролл больше 50px, добавить класс бургер-меню
        header.classList.add('header--burger');
      } else {
        // Если находимся на верхней части страницы, удалить класс бургер-меню
        header.classList.remove('header--burger');
      }
    });
  }


});

// Получаем модальное окно и элементы внутри него
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.querySelector('.close');

// Обрабатываем клик на всех изображениях с классом 'content__img'
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('open-modal-img')) {
        // Увеличиваем версию изображения в 2 раза (x2)
        const imgSrc = event.target.src.replace('.webp', '@2x.webp');
        modalImg.src = imgSrc;
        modal.style.display = 'flex';
    }
});

if (modal) {
  modal.addEventListener('click', function(event) {
    if (event.target === modal || event.target === closeModal) {
        modal.style.display = 'none';
    }
});
}
