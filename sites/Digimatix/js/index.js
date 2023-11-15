//Проверка версии браузера

const MIN_CHROME_VERSION = 116
const MIN_FIREFOX_VERSION = 116
const MIN_IE_VERSION = 10
const MIN_SAFARI_VERSION = 5

const CHROME_LINK = 'https://www.google.tn/intl/ru/chrome/'
const FIREFOX_LINK = 'https://www.mozilla.org/ru/firefox/'

navigator.browserSpecs = (function(){
  var ua = navigator.userAgent, tem, 
      M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return {name:'IE',version:(tem[1] || '')};
  }
  if(M[1]=== 'Chrome'){
      tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if(tem != null) return {name:tem[1].replace('OPR', 'Opera'),version:tem[2]};
  }
  M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem = ua.match(/version\/(\d+)/i))!= null)
      M.splice(1, 1, tem[1]);
  return {name:M[0], version:M[1]};
})();

const browserErrorBlock = document.querySelector('#browser-error')
const browserErrorLink = document.querySelector('#browser-error-link')

if (navigator.browserSpecs.name == 'Firefox') {
  if (navigator.browserSpecs.version < MIN_FIREFOX_VERSION) {
    browserErrorLink.href = FIREFOX_LINK
    browserErrorBlock.classList.add('browser-error-show')
  }
} else if (navigator.browserSpecs.name == 'Chrome') {
  if (navigator.browserSpecs.version < MIN_CHROME_VERSION) {
    browserErrorLink.href = CHROME_LINK
    browserErrorBlock.classList.add('browser-error-show')
  }
} else if (navigator.browserSpecs.name == 'Safari') {
  if (navigator.browserSpecs.version < MIN_SAFARI_VERSION) {
    browserErrorLink.href = CHROME_LINK
    browserErrorBlock.classList.add('browser-error-show')
  }
} else if (navigator.browserSpecs.name == 'IE') {
  if (navigator.browserSpecs.version < MIN_IE_VERSION) {
    browserErrorLink.href = CHROME_LINK
    browserErrorBlock.classList.add('browser-error-show')
  }
} else {
  browserErrorLink.href = CHROME_LINK
  browserErrorBlock.classList.add('browser-error-show')
}


// Скрипт табов
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


window.addEventListener("scroll", function () {

  // swiper в первом табе
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


  // swiper во втором табе
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
  // Перемещение для placeholder в input
  function movePlaceholderUp() {
    var input = document.querySelector('.footer__input');
    input.setAttribute('placeholder', '');
  }

  function movePlaceholderDown() {
    var input = document.querySelector('.footer__input');
    input.setAttribute('placeholder', 'Имя');
  }

  // Анимаиця для with-us
  var section = document.querySelector(".with-us");
  var sectionTop = section.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (sectionTop < windowHeight) {
    section.classList.add("show");
  }

  // Анимация для footer
  var footer = document.querySelector(".footer__anim");
  var footerTop = footer.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (footerTop < windowHeight) {
    footer.classList.add("show");
  }
});