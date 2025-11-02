 document.addEventListener('DOMContentLoaded', function () {
     const popup = document.getElementById('agePopup');
     const confirmBtn = document.getElementById('confirmAge');
     const declineBtn = document.getElementById('declineAge');

     const ageConfirmed = localStorage.getItem('ageConfirmed');

     if (ageConfirmed === 'true') {
         popup.classList.add('v2-hidden');
         document.body.classList.remove('v2-popup-active');
     } else {
         document.body.classList.add('v2-popup-active');
     }

     confirmBtn.addEventListener('click', function () {
         localStorage.setItem('ageConfirmed', 'true');
         popup.classList.add('v2-hidden');
         document.body.classList.remove('v2-popup-active');
     });

     declineBtn.addEventListener('click', function () {
         window.location.href = 'https://www.google.com';
     });

     const burgerMenu = document.getElementById('burgerMenu');
     const navMenu = document.getElementById('navMenu');

     burgerMenu.addEventListener('click', function () {
         burgerMenu.classList.toggle('v2-active');
         navMenu.classList.toggle('v2-active');
     });

     const navLinks = document.querySelectorAll('.v2-nav-link');
     navLinks.forEach(link => {
         link.addEventListener('click', function () {
             burgerMenu.classList.remove('v2-active');
             navMenu.classList.remove('v2-active');
         });
     });

     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
             const href = this.getAttribute('href');
             if (href === '#') return;


             const target = document.querySelector(href);
             if (target) {
                 const headerOffset = 80;
                 const elementPosition = target.getBoundingClientRect().top;
                 const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                 window.scrollTo({
                     top: offsetPosition,
                     behavior: 'smooth'
                 });
             }
         });
     });

     const casinoButtons = document.querySelectorAll('.v2-btn-casino');
     casinoButtons.forEach(button => {
         button.addEventListener('click', function (e) {
             e.preventDefault();
             scrollToContact();
         });
     });

     const learnButton = document.querySelector('.v2-btn-learn');
     if (learnButton) {
         learnButton.addEventListener('click', function (e) {
             e.preventDefault();
             scrollToContact();
         });
     }

     function scrollToContact() {
         const contactSection = document.getElementById('contact');
         if (contactSection) {
             const headerOffset = 80;
             const elementPosition = contactSection.getBoundingClientRect().top;
             const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

             window.scrollTo({
                 top: offsetPosition,
                 behavior: 'smooth'
             });
         }
     }

     const contactForm = document.getElementById('contactForm');
     if (contactForm) {
         contactForm.addEventListener('submit', function (e) {

             console.log('Form submitted');
         });
     }

     const sections = document.querySelectorAll('section[id]');

     function highlightNav() {
         const scrollY = window.pageYOffset;

         sections.forEach(section => {
             const sectionHeight = section.offsetHeight;
             const sectionTop = section.offsetTop - 120;
             const sectionId = section.getAttribute('id');
             const navLink = document.querySelector(`.v2-nav-link[href="#${sectionId}"]`);

             if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                 navLinks.forEach(link => link.classList.remove('v2-active'));
                 navLink.classList.add('v2-active');
             }
         });
     }

     window.addEventListener('scroll', highlightNav);
 });


 document.addEventListener('DOMContentLoaded', function () {
     const termsTriggers = document.querySelectorAll('.v2-bonus-terms-trigger');

     termsTriggers.forEach(trigger => {
         const termsLink = trigger.querySelector('.v2-terms-link');

         if (window.innerWidth <= 768) {
             termsLink.addEventListener('click', function (e) {
                 e.preventDefault();
                 e.stopPropagation();

                 termsTriggers.forEach(t => {
                     if (t !== trigger) {
                         t.classList.remove('v2-active');
                     }
                 });

                 trigger.classList.toggle('v2-active');
             });
         }
     });

     document.addEventListener('click', function (e) {
         if (!e.target.closest('.v2-bonus-terms-trigger')) {
             termsTriggers.forEach(trigger => {
                 trigger.classList.remove('v2-active');
             });
         }
     });
 });