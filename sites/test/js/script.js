function openUrl(){
  window.location.href = offerUrl;
}



let title = document.querySelector('.page__title');
let titleText = title.innerHTML;
let monthArray = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

var today = new Date();
var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000)); // прибавляем сутки
var dayTomorrow = tomorrow.getDate(); 
var monthTomorrow = tomorrow.getMonth(); //в js месяц отсчитывается с нуля
var yearTomorrow = tomorrow.getFullYear(); 


title.innerHTML = `${titleText} ${monthArray[monthTomorrow]} ${dayTomorrow}`;

function waitOn() {
    let text = "wait"
    let pointCount = 0
    var i = setInterval(function () {
        var newText = text
        for (let i = 0; i <= pointCount; i++) {
            newText += "."
        }
        document.getElementById("startBtn").text = newText;
        pointCount++
        if (pointCount > 3) {
            pointCount = 0
        }
    }, 200);
}

const heroBtn = document.querySelector('.hero__btn');
const heroTitle = document.querySelector('.hero__title');
const heroText = document.querySelector('.hero__text');
const heroText2 = document.querySelector('.hero__text-2');
const heroText3 = document.querySelector('.hero__text-3');
const heroText4 = document.querySelector('.hero__text-4');
const secondScreen = document.getElementById('second-screen');
const thirdScreen = document.getElementById('third-screen');
const heroImg = document.querySelector('.hero__img');
const secondScreenBtn1 = document.querySelector('.second-screen-btn')
const secondScreenBtn2 = document.querySelector('.second-screen-btn-2');
const fourthScreen = document.getElementById('fourth-screen');
const round = document.querySelector('.relative');
const sectors = document.querySelectorAll('.sector');
const heroBg = document.querySelector('.hero__bg')
const heroBg2 = document.querySelector('.hero__bg-2')
const heroBg3 = document.querySelector('.hero__bg-3')
const absoluteCircle = document.querySelector('.absolute-circle')
const fourthScreenBtns = document.querySelectorAll('.fourth-screen-btn')
const fivthScreen = document.getElementById('fivth-screen');
const sixScreen = document.getElementById('six-screen');
const mainCircle = document.querySelector('.main-circle')
const container  = document.querySelector('.container')
const hero  = document.querySelector('.hero')
const org  = document.querySelector('.org')
const footer = document.querySelector('.footer')

secondScreenBtn1.addEventListener('click', function() {


  setTimeout(function() {

    
    secondScreenBtn1.classList.add('circle-out-1');
    secondScreenBtn2.classList.add('circle-out-2');
    footer.classList.add('hide')
    org.classList.add('hide')
    heroText2.classList.add('hide')
    org.style.animation = 'unset'
    footer.style.animation = 'unset'

 


}, 500);
setTimeout(function() {
  absoluteCircle.style.animation = "slideCircleOut 1s ease"
  round.style.animation = 'slideCircleIn 1s ease'

  org.classList.remove('hide')
  footer.classList.remove('hide')
  org.style.animation = 'fadeInUpBig 1s ease-in-out'
  footer.style.animation = 'fadeInUpBig 1s ease-in-out'




}, 1500);
setTimeout(function() {
  heroText2.style.display = "none"
  heroText3.classList.add('show-25');
  heroText3.display = "block"
  mainCircle.style.animation = "zoomIn 3s ease"
  secondScreen.style.display = "none";
  thirdScreen.style.height = "unset"
  thirdScreen.style.visibility = "unset"
  absoluteCircle.style.display = 'none'


}, 2000);
})

secondScreenBtn2.addEventListener('click', function() {


  setTimeout(function() {

    
      secondScreenBtn1.classList.add('circle-out-1');
      secondScreenBtn2.classList.add('circle-out-2');
          footer.classList.add('hide')
          org.classList.add('hide')
          heroText2.classList.add('hide')
          org.style.animation = 'unset'
          footer.style.animation = 'unset'
    
   


  }, 500);
  setTimeout(function() {
   
    absoluteCircle.style.animation = "slideCircleOut 1s ease"

    org.classList.remove('hide')
    footer.classList.remove('hide')
    org.style.animation = 'fadeInUpBig 1s ease-in-out'
    footer.style.animation = 'fadeInUpBig 1s ease-in-out'
  

  }, 1500);
  setTimeout(function() {
    heroText2.style.display = "none"
    heroText3.classList.add('show-25');
    heroText3.display = "block"
    mainCircle.style.animation = "zoomIn 3s ease"
    secondScreen.style.display = "none";
    thirdScreen.style.height = "unset"
    thirdScreen.style.visibility = "unset"
    absoluteCircle.style.display = 'none'
   
    

  }, 2000);
})



  heroBtn.addEventListener('click', function() {
    heroTitle.classList.add('hide');
    heroText.classList.add('hide');
    heroImg.classList.add('hide');
    heroBtn.classList.add('hidden');
    org.classList.add('hide')
    footer.classList.add('hide')

    setTimeout(function() {
    
      heroBg.style.animation = "fadeOutLeftBig 2s ease";
      heroBg2.style.animation = "fadeOutRightBig 2s ease";

      

 

    }, 1500);

    setTimeout(function() { 
      absoluteCircle.style.left = 'calc(50% - 220px)';
      absoluteCircle.style.top = '-244px';
      org.classList.remove('hide')
      footer.classList.remove('hide')
      org.style.animation = 'fadeInUpBig 2s ease-in-out'
      footer.style.animation = 'fadeInUpBig 2s ease-in-out'

    }, 2000)
    setTimeout(function() { 
      heroBg3.style.display = 'block';
      heroBg3.style.animation = 'fadeInCircle 2s ease forwards';
      heroBg3.classList.add('show-circle');
   
      heroTitle.style.display = "none";
      heroText.style.display = "none";
      heroImg.style.display = "none";
      heroBtn.style.display = "none";
      heroText2.style.display = "block";
      heroText2.classList.add('show');
      secondScreen.style.display = "block";
      secondScreen.classList.add('show');
     
      heroBg.style.display = "none";
      heroBg2.style.display = "none";
    }, 3000)
    
  });
  const header = document.querySelector('.header');
  document.addEventListener('DOMContentLoaded', function () {
    var preloader = document.querySelector('.preloader');

    secondScreen.style.display = "block"
    fourthScreen.style.display = 'block'

    setTimeout(function() {
      preloader.style.animation = 'fadeOutDownBig 2s ease forwards';
      header.style.animation = 'slideInFromTop 2s ease';
      hero.style.animation = 'fadeInUpBig 3s ease-in-out;';
      container.style.animation = 'fadeInUpBig 3s ease-in-out;';
      org.style.animation = 'fadeInUpBig 3s ease-in-out;';
      secondScreen.style.display = "none"
      fourthScreen.style.display = 'none'
      
   
    }, 2000)

});

fourthScreenBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    fourthScreen.classList.remove('show');
    fourthScreen.classList.add('hide');
    org.classList.add('hide')
    footer.classList.add('hide')
    org.style.animation = 'unset'
    footer.style.animation = 'unset'
    

    setTimeout(function() { 
      fourthScreen.style.display = 'none'
      fivthScreen.style.display = 'block'
      fivthScreen.classList.add('show-25');
      org.classList.remove('hide')
      footer.classList.remove('hide')
      org.style.animation = 'fadeInUpBig 1s ease-in-out'
      footer.style.animation = 'fadeInUpBig 1s ease-in-out'
    }, 500)

    setTimeout(function() { 
      fivthScreen.classList.remove('show');
      fivthScreen.classList.add('hide-25');
    }, 5500)
    setTimeout(function() { 
      fivthScreen.style.display = "none"
      sixScreen.classList.add('show');
      sixScreen.style.display = 'block'
      org.classList.remove('hide')
      footer.classList.remove('hide')
      org.style.animation = 'fadeInUpBig 3s ease-in-out'
      footer.style.animation = 'fadeInUpBig 3s ease-in-out'
      
     
    }, 7000)

  
  });
});

  const liIds = ['li1', 'li2', 'li3', 'li4', 'li5', 'li6', 'li7', 'li8', 'li9', 'li10', 'li11', 'li12'];
  
  const liElements = liIds.map(liId => document.getElementById(liId));
  
  liElements.forEach((li) => {
    li.addEventListener('click', function() {
      setTimeout(function() {
        round.style.animation = "fadeOut 2s ease-out"
        org.classList.add('hide')
        footer.classList.add('hide')
        heroText3.classList.add('hide')
        org.style.animation = 'unset'
        footer.style.animation = 'unset'
        
      }, 500);
      setTimeout(function() {
        heroText4.classList.add('show');
        fourthScreen.style.display = "block";
        fourthScreen.classList.add('show');
        thirdScreen.style.display = 'none';
        round.style.display = "none"
        absoluteCircle.style.top = '-244px';
        absoluteCircle.style.animation = 'slideCircleIn 1s ease'
        absoluteCircle.style.display = 'flex'
        heroBg3.style.top = "8px"
        org.classList.remove('hide')
        footer.classList.remove('hide')
        org.style.animation = 'fadeInUpBig 1s ease-in-out'
        footer.style.animation = 'fadeInUpBig 1s ease-in-out'
 
      }, 2500);
    });
  });

  liElements.forEach(function(li) {
    li.addEventListener('click', function() {
      liElements.forEach(function(element) {
        if (element !== li) {
          element.style.transition = "filter 1s ease";
          element.style.backdropFilter = 'blur(1px)';
        }
      });
    });
  });


  for (let i = 1; i <= 12; i++) {
    const li = document.getElementById('li' + i);
    const image = document.getElementById('image' + i);
  
    li.addEventListener('mouseover', function() {
      image.src = `./img/krug-${i}-hover.svg`;
    });
  
    li.addEventListener('mouseout', function() {
      image.src = `./img/krug-${i}.svg`;
    });
  }
  
  var swiper2 = new Swiper(".six-screen-first-2", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 50,
    allowSlideNext: false,
    allowSlidePrev: false,
    controller: {
      control: swiper, // Указываем экземпляр, с которым нужно синхронизироваться
    },
  });

  
  var swiper = new Swiper(".six-screen-first", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 50,
    initialSlide: 1,
    controller: {
      control: swiper2, // Указываем экземпляр, с которым нужно синхронизироваться
    },
  });

  var slides = document.querySelectorAll('.swiper-slide');
slides.forEach(function(slide, index) {
  slide.addEventListener('click', function() {
    swiper.slideTo(index);
  });
});

