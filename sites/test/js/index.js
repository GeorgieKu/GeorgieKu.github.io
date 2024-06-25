document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
    let formCheck = document.getElementById('formCheck')
    let checkbox = document.getElementById('checkBox')

    formCheck.addEventListener('click', function() {
        checkbox.classList.toggle('checked')
    });

    const swiper = new Swiper('.rent__swiper', {

      
        // Navigation arrows
        navigation: {
          nextEl: '.rent__btn-next',
          prevEl: '.rent__btn-prev',
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