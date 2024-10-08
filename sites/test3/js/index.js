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
