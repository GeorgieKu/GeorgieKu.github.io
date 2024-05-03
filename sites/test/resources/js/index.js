import '../scss/index.scss';
import Swiper from 'swiper';
import { Mousewheel } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';


document.addEventListener('DOMContentLoaded', function() {
      let body = document.querySelector('body')
      let header = document.querySelector('header')
        document.getElementById("burger").addEventListener("click", function() {
          header.classList.toggle("open")

            if (header.classList.contains('open')) {
              body.style.overflow = 'hidden'
            }
            else {
              body.style.overflow = 'auto'
            }
        })

    
    const swiper = new Swiper('.event__swiper', {
      modules: [Pagination, Navigation, Mousewheel],
        direction: 'horizontal',
        loop: false,
        autoHeight: true,
        allowTouchMove: true,
      //   mousewheel: {
      //     noMousewheelClass: 'swiper-no-mousewheel',
      //     forceToAxis: true,

      // },


      
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev',
        },
        pagination: {
          el: '.evenets-swiper-pagintion-bullets',
          clickable: true, 
        }
      });

      // var isScrolling = false; 

      // var rightBlocks = document.querySelectorAll('.right-block');
      
      // rightBlocks.forEach(function(rightBlock) {
      //     rightBlock.addEventListener('wheel', function(event) {
      //         var isCursorOverRightBlock = event.target.closest('.right-block');
      
      //         if (isCursorOverRightBlock && !isScrolling) {
      //             event.preventDefault();
      //             event.stopPropagation();
      
      //             isScrolling = true; 
      
      //             if (event.deltaY > 0) {
      //                 swiper.slideNext();
      //             } else {
      //                 swiper.slidePrev();
      //             }
      
                 
      //             setTimeout(function() {
      //                 isScrolling = false; 
      //             }, 500);
      //         }
      //     });
      
      //     rightBlock.addEventListener('touchmove', function(event) {
      //         var currentX = event.touches[0].clientX;
      //         var currentY = event.touches[0].clientY;
      
      //         var deltaX = currentX - startX;
      //         var deltaY = currentY - startY;
      
      //         // Определяем, является ли свайп вертикальным или горизонтальным
      //         if (Math.abs(deltaX) > Math.abs(deltaY)) {
      //             // Горизонтальный свайп
      //             event.preventDefault(); // Отменяем стандартное поведение браузера
      //         } else {
      //             // Вертикальный свайп
      //             // Ничего не делаем, прокрутка продолжается вертикально
      //         }
      //     });
      // });
      const swiper2 = new Swiper('.forget-swiper', {
        modules: [Pagination, Navigation, Mousewheel],
        direction: 'horizontal',
        loop: false,
        allowTouchMove: true,
        mousewheel: {
          sensitivity: 1,
          forceToAxis: true,
      },
      
        navigation: {
          nextEl: '.arrow-next',
          prevEl: '.arrow-prev',
        },
        pagination: {
          el: '.pagintion-bullets',
          clickable: true, 
        }
      });

      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      
      // Функция для обработки события прокрутки страницы
      function handleScroll() {
        var elements = document.querySelectorAll('.fade-in-anim');
        elements.forEach(function(el) {
          if (isElementInViewport(el)) {
            el.classList.add('fadeIn');
          }
        });
      }
      
      // Добавляем обработчик события прокрутки страницы
      window.addEventListener('scroll', handleScroll);
      
      // Вызываем обработчик события прокрутки страницы сразу после загрузки страницы,
      // чтобы применить анимацию ко всем элементам, которые уже находятся в видимой области
      window.addEventListener('load', handleScroll);
      
      window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var parallaxElements = document.querySelectorAll('.parallax-bg');
        
        parallaxElements.forEach(function(element) {
          var parallaxRatio = 0.5; // Задайте желаемое значение параллакса (от 0 до 1)
          var parallaxOffset = scrollTop * parallaxRatio;
          element.style.transform = 'translate3d(0, ' + parallaxOffset + 'px, 0)';
        });
      });
      
});


import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

gsap.set(".header", { opacity: 0, y: -100 });
gsap.set(".title", { opacity: 0, y: -100 });

const tl = gsap.timeline({ defaults: { duration: .5 }, 
  onComplete: () => {
    gsap.to('.loading', {
      y: '-100%',
      onComplete: onLoadingFade
    })
  }
})
tl.from('.loading-svg', {scale: .2, opacity: .5})
  .from('.loading-text1', {x: 200, opacity: 0})
  .from('.loading-text2', {x: 300, opacity: 0})

function onLoadingFade() {

  const loadingTl = gsap.timeline({ defaults: { duration: 1 }})
  loadingTl.to('.title', {
      opacity: 1,
      y: 0,
    })
    .to('.header', {
      opacity: 1,
      y: 0,
    })
}

gsap.set(".wrapper", { backgroundSize: "cover" });

gsap.to(".wrapper", {
  scrollTrigger: {
    start: 0,
    scrub: 7,
    end: "300vh",
  },
  backgroundPositionY: '150px',
});

gsap.set('.swiper-block', {backgroundPositionY: 0})

gsap.to(".swiper-block", {
  scrollTrigger: {
    scrub: 7,
    start: '10%',
    trigger: '.swiper-block'
  },
  backgroundPositionY: '300px',
});

gsap.set('.support', {backgroundPositionY: 0})
gsap.to(".support", {
  scrollTrigger: {
    scrub: 7,
    start: '0%',
    trigger: '.support'
  },
  backgroundPositionY: '300px',
});

gsap.set('.block-animation', {backgroundPositionY: 'center', backgroundPositionX: 'center', backgroundSize: '130%',})
gsap.to(".block-animation", {
  scrollTrigger: {
    scrub: 1,
    start: '0%',
    trigger: '.block-animation'
  },
  backgroundSize: '180%'
});

gsap.to(".under-forget", {
  scrollTrigger: {
    scrub: 1,
    start: '0%',
    trigger: '.under-forget'
  },
  y: '80px',
});

gsap.to('.stars', {
  scrollTrigger: {
    start: '80vh',
    scrub: 1,
  },
  y: -200
})
