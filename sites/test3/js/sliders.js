const swiper = new Swiper('.about__swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 'auto',
        loop: true,
      
      
        // Navigation arrows
        navigation: {
          nextEl: '.about-swiper-btn-next',
          prevEl: '.about-swiper-btn-prev',
        },
      
      });



    const swiper2 = new Swiper('.modal__swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
      
      
        // Navigation arrows
        navigation: {
          nextEl: '.modal-swiper-btn-next',
          prevEl: '.modal-swiper-btn-prev',
        },
      
      });


 

  let modal = document.querySelector('.modal');  
  let images = document.querySelectorAll('img[data-img]');

    images.forEach((img) => {
        img.addEventListener('click', function() {
          let imgIndex = parseInt(img.dataset.img) - 1; // Индекс изображения
          modal.showModal(); // Открыть модальное окно
          swiper2.slideTo(imgIndex); // Прокрутить слайдер до соответствующего изображения
        });
      });
    
    function closeModal() {
        modal.close()
    }