
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        initialSlide: 2,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.btn-next',
          prevEl: '.btn-prev',
        },
      });

      let overlay = document.getElementById('overlay');
      let callbackBtn = document.getElementById('callbackBtn');
      let modal = document.getElementById('modal');
      let closeBtn = document.getElementById('close');
      
      callbackBtn.addEventListener('click', function() {
        overlay.style.display = 'block';
        modal.style.display = 'block';
        modal.style.animation = 'fadeIn .3s ease'
      })

      closeBtn.addEventListener('click', function() {
        modal.style.animation = 'fadeOut .3s ease';
        overlay.style.display = 'none';
      
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
      })

})