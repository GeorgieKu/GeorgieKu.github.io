'use strict';



class ItcTabs {
  constructor(target, config) {
    const defaultConfig = {};
    this._config = Object.assign(defaultConfig, config);
    this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
    this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
    this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
    this._eventShow = new Event('tab.itc.change');
    this._init();
    this._events();
  }
  _init() {
    this._elTabs.setAttribute('role', 'tablist');
    this._elButtons.forEach((el, index) => {
      el.dataset.index = index;
      el.setAttribute('role', 'tab');
      this._elPanes[index].setAttribute('role', 'tabpanel');
    });
  }
  show(elLinkTarget) {
    const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
    const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
    const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
    if (elLinkTarget === elLinkActive) {
      return;
    }
    elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
    elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
    elLinkTarget.classList.add('tabs__btn_active');
    elPaneTarget.classList.add('tabs__pane_show');
    this._elTabs.dispatchEvent(this._eventShow);
    elLinkTarget.focus();
  }
  showByIndex(index) {
    const elLinkTarget = this._elButtons[index];
    elLinkTarget ? this.show(elLinkTarget) : null;
  };
  _events() {
    this._elTabs.addEventListener('click', (e) => {
      const target = e.target.closest('.tabs__btn');
      if (target) {
        e.preventDefault();
        this.show(target);
      }
    });
  }
};

if ($('.tabs').length) {
  new ItcTabs('.tabs');
}



(function(){
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setAccordionAria,
	switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};
//function
switchAccordion = function(e) {
  console.log("triggered");
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
	if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');
 	
  	thisAnswer.classList.toggle('animateIn');
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();


const swiper_card = new Swiper('.swiper_card', {
    loop: false,
    slidesPerView: 5,
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 50,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      840: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1180: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: '.slide-n-next',
      prevEl: '.slide-n-prev',
    },
});

const swiper2 = new Swiper('.swiper_popular', {
    loop: false,
    slidesPerView: 5,
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 50,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      840: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1180: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    navigation: {
        nextEl: '.slide-p-next',
        prevEl: '.slide-p-prev',
    },
});

const swiper3 = new Swiper('.swiper_edition', {
    loop: false,
    slidesPerView: 5,
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 50,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      840: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1180: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    navigation: {
        nextEl: '.slide-v-next',
        prevEl: '.slide-v-prev',
    },
});

const swiper = new Swiper('.swiper-container', {
    allowTouchMove: false,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 100,
});

const swiper4 = new Swiper('.swiper_popup', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
      nextEl: '.slid-next',
      prevEl: '.slid-prev',
  },
});

const swiper5 = new Swiper('.purchase-swiper', {
  loop: false,
  slidesPerView: 5,
  spaceBetween: 43,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    840: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1180: {
      slidesPerView: 5,
      spaceBetween: 43,
    },
  },
  scrollbar: {
    el: '.my-purchase-swiper-scrollbar',
    draggable: true,
  },
  navigation: {
      nextEl: '.my-purchase-sldier-icon-next',
      prevEl: '.my-purchase-sldier-icon-prev',
  },
});

const swiper6 = new Swiper('.continue-slider', {
  loop: false,
  slidesPerView: 5,
  spaceBetween: 43,
  freeMode: false,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    840: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1180: {
      slidesPerView: 5,
      spaceBetween: 43,
    },
  },
  scrollbar: {
    el: '.continue-swiper-scrollbar',
    draggable: true,
  },
  navigation: {
      nextEl: '.continue-next',
      prevEl: '.continue-prev',
  },
});




swiper.init();
const menu = document.querySelector('.swiper-menu');
const dots = document.querySelectorAll('.dot');
if (menu) {
    menu.addEventListener('click', function (e) {
        const index = e.target.dataset.index;
        dots.forEach((item) => item.classList.remove('dot-active'));
        dots[index].classList.add('dot-active');
        swiper.slideTo(index);
    });
}

/*
const navActive = document.querySelector('.nav-active'),
headerActive = document.querySelector('.header__active'),
headerActiveRegistration = document.querySelector(
  '.header__active-registration'
),
hamburger = document.querySelector('.hamburger');

if (hamburger) {
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  if (navActive) navActive.classList.toggle('vigorous');
  if (headerActive) headerActive.classList.toggle('vigorous');
  if (headerActiveRegistration)
    headerActiveRegistration.classList.toggle('vigorous');
});
}*/

function modal() {
  const modalBtn = document.querySelector('.more');
  const moreBtnBookmarks = document.querySelector('.more-btn-bookmarks');
  const modal = document.querySelector('.modal-input');
  const modalBookmarks = document.querySelector('.modal-bookmarks');
  const moreSlider = document.querySelector('.more-slider');
  const modalSlider = document.querySelector('.modal-slider');
  scroll = calcScroll();
  if (modalBtn) {
    modalBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
    });
  }
  if (moreBtnBookmarks) {
    moreBtnBookmarks.addEventListener('click', () => {
      modalBookmarks.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
    });
  }
  if (moreSlider) {
    moreSlider.addEventListener('click', () => {
      modalSlider.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
    });
  }

  if (modal) {
    modal.addEventListener('click', (event) => {
      const target = event.target;
      if (
        target.classList.contains('overlay') ||
        target.classList.contains('modal__close')
      ) {
        modal.classList.add('hidden');
      }
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    });
  }
  if (modalBookmarks) {
    modalBookmarks.addEventListener('click', (event) => {
      const target = event.target;
      if (
        target.classList.contains('overlay') ||
        target.classList.contains('modal__close')
      ) {
        modalBookmarks.classList.add('hidden');
      }
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    });
  }
  if (modalSlider) {
    modalSlider.addEventListener('click', (event) => {
      const target = event.target;
      if (
        target.classList.contains('overlay') ||
        target.classList.contains('modal__close')
      ) {
        modalSlider.classList.add('hidden');
      }
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    });
  }

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }
}

modal();

$(document).ready(function () {
    $('.header__search-btn').click(function (e) { 
        e.preventDefault();
        $('.header').toggleClass('search-active');
        if ($('.header').hasClass('search-active')) {
            //
        }
    });

    $(document).on("click", function (event) {
        // If the target is not the container or a child of the container, then process
        // the click event for outside of the container.
        if ($(event.target).closest(".header").length === 0) {
            if ($('.header').hasClass('search-active')) {
                $('.header').removeClass('search-active');
            }
        }
        
    });

    $('.hamburger').on('click', function(){
        $(this).toggleClass('hamburger-active');
        $('.nav-active').toggleClass('vigorous');
        $('.header__active').toggleClass('vigorous');
        $('.header__active-registration').toggleClass('vigorous');
        $('body').toggleClass('fixed_overflow');
    });

    $('.tab__book-button').on('click', function () {
        $('.audiobook__card').hide();
        $('.tab__book-button').removeClass('audiobook__title_active');
        var tab = $(this).data('tab');
        $("#"+tab).show();
        $(this).addClass('audiobook__title_active');
    });

    if($(document).height() > 2500){
      $('.wrapper').addClass('back_top');
    }
});

$(window).resize(function(){
    if ($(window).width() > 768) {
        $('.tab__book-button').removeClass('audiobook__title_active');
        $('.audiobook__card').removeAttr('style');
    }
});

$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});


if ($("#select-1").length) {
  const select1 = new CustomSelect('#select-1');
}
if ($("#select-2").length) {
  const select2 = new CustomSelect('#select-2');
}


/*
let audio = document.getElementById("audio");    // Берём элемент audio
let time = document.querySelector(".time");      // Берём аудио дорожку
let btnPlay = document.querySelector(".play");   // Берём кнопку проигрывания
let btnPause = document.querySelector(".pause"); // Берём кнопку паузы
let btnPrev = document.querySelector(".prev");   // Берём кнопку переключения предыдущего трека
let btnNext = document.querySelector(".next");   // Берём кнопку переключение следующего трека

btnPlay.addEventListener("click", function() {
  audio.play(); // Запуск песни
  // Запуск интервала 
  audioPlay = setInterval(function() {
      // Получаем значение на какой секунде песня
      let audioTime = Math.round(audio.currentTime);
      // Получаем всё время песни
      let audioLength = Math.round(audio.duration)
      // Назначаем ширину элементу time
      //time.style.width = (audioTime * 100) / audioLength + '%';
      // Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
      // И проверяем что переменная treck меньше четырёх
      if (audioTime == audioLength && treck < 3) {
          treck++; // То Увеличиваем переменную 
          switchTreck(treck); // Меняем трек
      // Иначе проверяем тоже самое, но переменная treck больше или равна четырём
      } else if (audioTime == audioLength && treck >= 3) {
          treck = 0; // То присваиваем treck ноль
          switchTreck(treck); //Меняем трек
      }
  }, 10)
});

$("#seek").bind("change", function() {
  audio.currentTime = $(this).val();               
});

audio.addEventListener('timeupdate',function (){

  $("#seek").attr("max", audio.duration);
  $('#seek').val(audio.currentTime);
});
*/