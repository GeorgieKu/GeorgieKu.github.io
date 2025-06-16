var swiper = new Swiper(".newSwiper2", {
    direction: 'vertical',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            direction: 'horizontal',
        },
        // when window width is >= 480px
        577: {
            direction: 'vertical',
        },
      }
  });
  var swiper2 = new Swiper(".newSwiper", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".events-button-prev-1",
      prevEl: ".events-button-next-1",
      
    },
    pagination: {
        el: '.events-pagination',
      },
    thumbs: {
      swiper: swiper,
    },
  });

  var swiper4 = new Swiper(".newSwiper4", {
    direction: 'vertical',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
          direction: 'horizontal',
      },
      // when window width is >= 480px
      577: {
          direction: 'vertical',
      },
    }
  });
  var swiper3 = new Swiper(".newSwiper3", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".events-button-prev-2",
      prevEl: ".events-button-next-2",
      
    },
    pagination: {
        el: '.events-pagination',
      },
    thumbs: {
      swiper: swiper4,
    },
  });

  var swiper6 = new Swiper(".newSwiper5", {
    direction: 'vertical',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
          direction: 'horizontal',
      },
      // when window width is >= 480px
      577: {
          direction: 'vertical',
      },
    }
  });
  var swiper5 = new Swiper(".newSwiper6", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".events-button-prev-3",
      prevEl: ".events-button-next-3",
      
    },
    pagination: {
        el: '.events-pagination',
      },
    thumbs: {
      swiper: swiper6,
    },
  });

  var swiper8 = new Swiper(".newSwiper7", {
    direction: 'vertical',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
          direction: 'horizontal',
      },
      // when window width is >= 480px
      577: {
          direction: 'vertical',
      },
    }
  });
  var swiper7 = new Swiper(".newSwiper8", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".events-button-prev-4",
      prevEl: ".events-button-next-4",
      
    },
    pagination: {
        el: '.events-pagination',
      },
    thumbs: {
      swiper: swiper8,
    },
  });

  function openAcc(toggleButton, content, toggleArrow) {
    toggleButton.addEventListener('click', function() {
        content.classList.toggle('open');
        toggleArrow.classList.toggle('rotate');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let toggleButtons = document.querySelectorAll('.guide__item');
    let contents = document.querySelectorAll('.content');
    let toggleArrows = document.querySelectorAll('.guide__item svg');
    
    toggleButtons.forEach((toggleButton, index) => {
        openAcc(toggleButton, contents[index], toggleArrows[index]);
    });
});

let guideItemFlexs = document.querySelectorAll('.guide__item-flex')
let colored = false;
guideItemFlexs.forEach(function(guideItemFlex) {
  guideItemFlex.addEventListener('click', function() {
    if (colored) {
      colored = false;
      guideItemFlex.style.backgroundColor = '#EBEBEB'
    }
    else {
      colored = true;
      guideItemFlex.style.backgroundColor = '#e0e0e0'
    }

  })
})