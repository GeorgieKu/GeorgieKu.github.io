function openAcc(toggleButton, content, toggleArrow) {
    toggleButton.addEventListener('click', function() {
        content.classList.toggle('open');
        toggleArrow.classList.toggle('rotate');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let toggleButtons = document.querySelectorAll('.acc');
    let contents = document.querySelectorAll('.content');
    let toggleArrows = document.querySelectorAll('.acc img');
    
    toggleButtons.forEach((toggleButton, index) => {
        openAcc(toggleButton, contents[index], toggleArrows[index]);
    });
});

var swiper2 = new Swiper(".member__swiper", {
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 48,
    navigation: {
      nextEl: ".member-btn-next",
      prevEl: ".member-btn-prev",
      
    },
    breakpoints: {
      320: {
        spaceBetween: 8,
      },
      576: {
        spaceBetween: 48,
      },
      
    }

  });

  var swiper3 = new Swiper(".gallery__swiper", {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 100,
    loop: true,
    initialSlide: 2,
    centeredSlides: true,
    slideActiveClass: 'swiper-slide-active',
    navigation: {
      nextEl: ".gallery-btn-next",
      prevEl: ".gallery-btn-prev",
      
    },
    breakpoints: {
      320: {
        spaceBetween: 16,
      },
      576: {
        spaceBetween: 100,
      },
      
    }

  });

  var swiper4 = new Swiper(".recommendations__swiper", {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 48,
    loop: false,
    breakpoints: {
      320: {
        direction: 'vertical',
        spaceBetween: 24,
        touch: {
          enabled: false,
        },
      },
      576: {
        direction: 'horizontal',
        spaceBetween: 48,
      },
      
    }

  });


  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Скрыть все содержимое табов
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Убрать класс "active" со всех кнопок табов
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("tab-btn-active");
    }

    // Показать содержимое текущего таба и выделить соответствующую кнопку
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("tab-btn-active");
}

// По умолчанию открыть первый таб при загрузке страницы
document.getElementById("tab3").style.display = "block";
document.getElementsByClassName("tab-btn")[2].classList.add("tab-btn-active");