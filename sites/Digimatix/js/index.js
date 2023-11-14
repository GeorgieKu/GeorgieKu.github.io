const swiper = new Swiper('.with-us__swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 20,
    pagination: {
      el: '.with-us__pagination',
    },
    navigation: {
      nextEl: '.with-us__button-next',
      prevEl: '.with-us__button-prev',
    },
    breakpoints: {
      768: {
        slidesPerGroup: 4,
        spaceBetween: 64,
      },

    }
  });

  const swiper2 = new Swiper('.with-us__swiper-2', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 20,
    pagination: {
      el: '.with-us__pagination-2',
    },
    navigation: {
      nextEl: '.with-us__button-next-2',
      prevEl: '.with-us__button-prev-2',
    },
    breakpoints: {
      768: {
        slidesPerGroup: 4,
        spaceBetween: 64,
      }
    }
  });

  function openTab(event, tabName) {
    var tabButtons = document.getElementsByClassName("with-us__button");
    var tabContents = document.getElementsByClassName("tab-content");

    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("with-us__button_active");
    }

    event.currentTarget.classList.add("with-us__button_active");

    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");

    var buttonsHot = document.getElementById("with-us__buttons-hot");
    var buttonsAll = document.getElementById("with-us__buttons-all");

    if (tabName === "hot-offers") {
      buttonsHot.style.display = "flex";
      buttonsAll.style.display = "none";
    } else if (tabName === "all-offers") {
      buttonsHot.style.display = "none";
      buttonsAll.style.display = "flex";
    }
  }


var isBrowserCompatible = true;


var isIE = false;
var ua = window.navigator.userAgent;
var msie = ua.indexOf('MSIE ');
if (msie > 0) {
    isIE = true;
    var ieVersion = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    if (ieVersion < 10) {
        isBrowserCompatible = false;
    }
}


var isEdge = ua.indexOf('Edge/') > 0;
if (isEdge) {
  var edgeVersion = parseInt(ua.substring(ua.indexOf('Edge/') + 5, ua.indexOf('.', ua.indexOf('Edge/'))), 10);
    if (edgeVersion < 12) {
        isBrowserCompatible = false;
    }
}


var isChrome = ua.indexOf('Chrome/') > 0 && ua.indexOf('Safari/') > 0;
if (isChrome) {
  var chromeVersion = parseInt(ua.substring(ua.indexOf('Chrome/') + 7, ua.indexOf('.', ua.indexOf('Chrome/'))), 10);
    if (chromeVersion < 60) {
        isBrowserCompatible = false;
    }
}


var isFirefox = ua.indexOf('Firefox/') > 0;
if (isFirefox) {
    var firefoxVersion = parseInt(ua.substring(ua.indexOf('Firefox/') + 8), 10);
    if (firefoxVersion < 55) {
        isBrowserCompatible = false;
    }
}


if (!isBrowserCompatible) {
    var message = "Ваш браузер устарел. Пожалуйста, установите новую версию.";
}

function movePlaceholderUp() {
  var input = document.querySelector('.footer__input');
  input.setAttribute('placeholder', '');
}

function movePlaceholderDown() {
  var input = document.querySelector('.footer__input');
  input.setAttribute('placeholder', 'Имя');
}
