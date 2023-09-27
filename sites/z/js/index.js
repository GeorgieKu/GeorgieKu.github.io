const swiper = new Swiper('.swiper-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    autoHeight: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
        }
    },
  

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-1',
      prevEl: '.swiper-button-prev-1',
    },

  });

  const swiper2 = new Swiper('.swiper-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    autoHeight: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
        }
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
    },

  });

  
  const swiper3 = new Swiper('.swiper-3', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    autoHeight: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
        }
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-3',
      prevEl: '.swiper-button-prev-3',
    },

  });

  $("video").click(function() {

    //console.log(this);

    if (this.paused) {
        $(this).parent().find('.play-btn').addClass('disabled')
        this.play();

    } else {
        $(this).parent().find('.play-btn').removeClass('disabled')
        this.pause();

    }

});
$(".play-btn").click(function() {
    if ($(this).parent().find('video').get(0).paused) {
        $(this).addClass('disabled')
        $(this).parent().find('video').get(0).play()
    } else {
        $(this).removeClass('disabled')
        $(this).parent().find('video').get(0).pause()
    }

});



  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) {
    var playBtns = document.getElementsByClassName("play-btn");
    for (var i = 0; i < playBtns.length; i++) {
      playBtns[i].style.display = "none";
    }
  }
