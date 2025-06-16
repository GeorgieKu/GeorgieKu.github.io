 document.addEventListener("DOMContentLoaded", function () {
     //header 
     document.getElementById("burger").addEventListener("click", function () {
         document.querySelector("header").classList.toggle("open")
     })


     let dd = document.querySelectorAll('.dd');


     dd.forEach(function (element) {
         element.addEventListener('click', function () {
             element.classList.toggle('dd-open');
         })
     })

     //hero 
     let socialsBtn = document.getElementById('socialsBtn');
     let socials = document.getElementById('socials');

     socialsBtn.addEventListener('click', function () {
         socials.classList.toggle('socials-open');
     })


     let compassTop = document.querySelector('.compass__top');
     let compassBottom = document.querySelector('.compass__bottom');
     let compassLeft = document.querySelector('.compass__left');
     let compassRight = document.querySelector('.compass__right');

     let compassArrows = document.querySelectorAll('.compass__arrow');

     let compassArrowTop = document.querySelector('.compass__arrow-top');
     let compassArrowTopRight = document.querySelector('.compass__arrow-top-right');
     let compassArrowRight = document.querySelector('.compass__arrow-right');
     let compassArrowBottomRight = document.querySelector('.compass__arrow-right-bottom');
     let compassArrowBottom = document.querySelector('.compass__arrow-bottom');
     let compassArrowBottomLeft = document.querySelector('.compass__arrow-bottom-left');
     let compassArrowLeft = document.querySelector('.compass__arrow-left');
     let compassArrowTopLeft = document.querySelector('.compass__arrow-left-top');

     let compassTitle = document.querySelector('.compass__title');
     let compassDescr = document.querySelector('.compass__descr');

     let currentTimeout = null;

     function showArrowSequence(showArrow1, showArrow2, title, descr) {
         // Скрываем все стрелки
         compassArrows.forEach(arrow => arrow.style.opacity = '0');

         // Показываем первую стрелку (анимация)
         showArrow1.style.opacity = '1';

         // Очищаем предыдущий таймер, если есть
         if (currentTimeout) {
             clearTimeout(currentTimeout);
             currentTimeout = null;
         }

         // Запускаем таймер для смены стрелок
         currentTimeout = setTimeout(() => {
             showArrow1.style.opacity = '0';
             showArrow2.style.opacity = '1';
             currentTimeout = null; // Таймер отработал
         }, 500);

         // Обновляем текст
         compassTitle.textContent = title;
         compassDescr.textContent = descr;
     }

     // При уходе мыши ничего не делаем, стрелка остаётся

     // Обработчики событий для каждой стороны

     compassTop.addEventListener('mouseover', function () {
         showArrowSequence(
             compassArrowTopLeft,
             compassArrowTop,
             'Air',
             'Place for short text about AIR Place for short text about AIR Place for short text about AIR Place for short text about AIR'
         );
     });

     compassBottom.addEventListener('mouseover', function () {
         showArrowSequence(
             compassArrowBottomRight,
             compassArrowBottom,
             'Ocean',
             'Place for short text about OCEAN Place for short text about OCEAN Place for short text about OCEAN Place for short text about OCEAN'
         );
     });

     compassLeft.addEventListener('mouseover', function () {
         showArrowSequence(
             compassArrowBottomLeft,
             compassArrowLeft,
             'Railway',
             'Place for short text about RAILWAY Place for short text about RAILWAY Place for short text about RAILWAY Place for short text about RAILWAY'
         );
     });

     compassRight.addEventListener('mouseover', function () {
         showArrowSequence(
             compassArrowTopRight,
             compassArrowRight,
             'Auto',
             'Place for short text about AUTO Place for short text about AUTO Place for short text about AUTO Place for short text about AUTO'
         );
     });

     const btnBar = document.querySelector('.btn-bar');
     const btnBar2 = document.querySelector('.btn-bar-2');

     function runAnimation() {
         btnBar.style.transition = 'none';
         btnBar.style.transform = 'skewX(-30deg) translateX(-100px)';
         btnBar2.style.transition = 'none';
         btnBar2.style.transform = 'skewX(-30deg) translateX(-60px)';


         btnBar.offsetWidth;
         btnBar2.offsetWidth;


         btnBar.style.transition = 'transform 1s ease-in';
         btnBar2.style.transition = 'transform 1s ease-in';
         btnBar.style.transform = 'skewX(-30deg) translateX(400px)';
         btnBar2.style.transform = 'skewX(-30deg) translateX(440px)';
     }


     runAnimation();

     setInterval(() => {
         runAnimation();
     }, 4000);




     //services
     const tabButtons = document.querySelectorAll('.services__btn');
     const tabContents = document.querySelectorAll('.services__tab-content');

     tabButtons.forEach(btn => {
         btn.addEventListener('click', () => {
             tabButtons.forEach(b => b.classList.remove('active'));
             btn.classList.add('active');

             const tab = btn.getAttribute('data-tab');

             tabContents.forEach(content => {
                 if (content.classList.contains('active')) {
                     content.classList.remove('active');

                     setTimeout(() => {
                         if (content.getAttribute('data-content') === tab) {
                             content.classList.add('active');
                         }
                     }, 400);
                 } else if (content.getAttribute('data-content') === tab) {
                     setTimeout(() => {
                         content.classList.add('active');
                     }, 400);
                 } else {
                     content.classList.remove('active');
                 }
             });
         });
     });


     //map 
    const points = document.querySelectorAll('.map__point');

  points.forEach(point => {
    point.addEventListener('click', () => {
      const text = point.querySelector('.map__text');
      const isVisible = text.style.display === 'block';

      // Скрываем все map__text
      document.querySelectorAll('.map__text').forEach(t => {
        t.style.display = 'none';
      });

      // Если текущий был скрыт, показываем, иначе оставляем скрытым
      if (!isVisible) {
        text.style.display = 'block';
      }
    });
  });

     //why-we 
     const swiper = new Swiper('.why__swiper', {
         // Optional parameters
         direction: 'horizontal',
         loop: false,
         resistance: true, // включить сопротивление при перетаскивании за пределы
         resistanceRatio: 1,
         spaceBetween: 16,


         breakpoints: {
             320: {
                 slidesPerView: 1
             },
             450: {
                 slidesPerView: 'auto',
                 initialSlide: 2,
                 centeredSlides: true,
             },
             1200: {
                 slidesPerView: 3,
                 initialSlide: 1,
                 centeredSlides: true,

             }
         },

         // Navigation arrows
         navigation: {
             nextEl: '.why-swiper-button-next',
             prevEl: '.why-swiper-button-prev',
         },

         // And if we need scrollbar
         scrollbar: {
             el: '.why-swiper-scrollbar',
         },
     });

     function animateOnView(elementId, animationClass) {
         const el = document.getElementById(elementId);
         if (!el) return;

         const observer = new IntersectionObserver((entries, observer) => {
             entries.forEach(entry => {
                 if (entry.isIntersecting) {
                     el.classList.add(animationClass);
                     observer.unobserve(el);
                 }
             });
         }, {
             threshold: 0.1
         });

         observer.observe(el);
     }

     animateOnView('services-title', 'animate__fadeInDown');
     animateOnView('whyTitle', 'animate__fadeInDown');
     animateOnView('contactsTitle', 'animate__fadeInDown');
     animateOnView('whyText', 'animate__fadeInTopRight');

     //contacts

     document.querySelector('.contacts__form').addEventListener('submit', function (e) {
         let isValid = true;
         const inputs = this.querySelectorAll('input, textarea');

         inputs.forEach(input => {

             input.classList.remove('error');

             if (!input.value.trim()) {
                 input.classList.add('error');
                 isValid = false;
             }
         });


         if (!isValid) {
             e.preventDefault();
         }
     });

     const forms = document.querySelectorAll('.newsletter__form');

     forms.forEach(form => {
         const input = form.querySelector('input');
         const button = form.querySelector('button');

         form.addEventListener('submit', function (e) {
             e.preventDefault();
             form.classList.remove('error', 'success');
             button.textContent = 'Subscribe';
             button.style.width = '';
             button.style.background = '';
             button.style.color = '';

             if (input.value.trim() === '') {
                 form.classList.add('error');
             } else {
                 form.classList.add('success');
                 button.textContent = 'Success';
             }
         });
     });



 })