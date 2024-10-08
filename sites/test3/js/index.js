const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
  
  });

  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    let lastScroll = 0;
  
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
      if (currentScroll > lastScroll) {
        // Скролл вниз, скрыть шапку
        header.classList.add('hidden');
      } else {
        // Скролл вверх, показать шапку
        header.classList.remove('hidden');
      }
  
      lastScroll = currentScroll;
    });
  });

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

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('open')
})