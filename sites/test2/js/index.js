document.addEventListener("DOMContentLoaded", function() {

  let overlay = document.getElementById('overlay');
  let callbackBtn = document.getElementById('callBackBtn');
  let callbackBtn2 = document.getElementById('callBackBtn2');
  let modal = document.getElementById('modal');
  let closeBtn = document.getElementById('close');
  


    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })

    function openAcc(toggleButton, content, toggleArrow) {
      toggleButton.addEventListener('click', function() {
          content.classList.toggle('open');
          toggleArrow.classList.toggle('rotate');
          
      });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
      let toggleButtons = document.querySelectorAll('.acc');
      let contents = document.querySelectorAll('.content');
      
      toggleButtons.forEach((toggleButton, index) => {
          let toggleArrow = toggleButton.querySelector('.about__squad');
          openAcc(toggleButton, contents[index], toggleArrow);
      });
  });

    var swiper = new Swiper(".projects__swiper-2", {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          320: {
            direction: 'horizontal',
        },
          576: {
            direction: 'vertical',
          }
      }
      });
      var swiper2 = new Swiper(".projects__swiper-1", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next-1",
          prevEl: ".swiper-button-prev-1",
        },
        thumbs: {
          swiper: swiper,
        },

      });

      var swiper3 = new Swiper(".projects__swiper-4", {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          320: {
            direction: 'horizontal',
        },
          576: {
            direction: 'vertical',
          }
      }
      });
      var swiper4 = new Swiper(".projects__swiper-3", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next-2",
          prevEl: ".swiper-button-prev-2",
        },
        thumbs: {
          swiper: swiper3,
        },
      });

      var swiper5 = new Swiper(".projects__swiper-6", {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          320: {
            direction: 'horizontal',
        },
          576: {
            direction: 'vertical',
          }
      }
      });
      var swiper6 = new Swiper(".projects__swiper-5", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next-3",
          prevEl: ".swiper-button-prev-3",
        },
        thumbs: {
          swiper: swiper5,
        },
      });

      let formCheck = document.getElementById('formCheck')
      let checkbox = document.getElementById('checkBox')
  
      formCheck.addEventListener('click', function() {
          checkbox.classList.toggle('checked')
      });

      let formCheck2 = document.getElementById('formCheck2')
      let checkbox2 = document.getElementById('checkBox2')
  
      formCheck2.addEventListener('click', function() {
          checkbox2.classList.toggle('checked')
      });

      let formCheck3 = document.getElementById('formCheck3')
      let checkbox3 = document.getElementById('checkBox3')
  
      formCheck3.addEventListener('click', function() {
          checkbox3.classList.toggle('checked')
      });

    
      callbackBtn.addEventListener('click', function() {
        overlay.style.display = 'block';
        modal.style.display = 'block';
        modal.style.animation = 'fadeIn .3s ease'
      })

      callbackBtn2.addEventListener('click', function() {
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