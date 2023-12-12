// let winWidth,
// block = document.querySelector('.links');
// terms = document.querySelector('.terms');
// policy = document.querySelector('.privacy');

// function hide() {
// 	winWidth = window.innerWidth;
// 	console.log(winWidth);
// 	if (winWidth > 430) {
// 		block.classList.remove('hide');
// 		terms.classList.add('hide');
// 		policy.classList.add('hide');
// 	}

// 	else {
// 		block.classList.add('hide');
// 		terms.classList.remove('hide');
// 		policy.classList.remove('hide');		
// 	}
// }




// hide();
// window.addEventListener('scroll', hide);


// function ibg() {

// 	let ibg = document.querySelectorAll("._ibg");
// 	for (var i = 0; i < ibg.length; i++) {
// 		if (ibg[i].querySelector('img')) {
// 			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
// 		}
// 	}
// }

// ibg();

let title = document.querySelector('.page__title');
let titleText = title.innerHTML;
// let date = new Date();
// let dateYear = date.getFullYear();
// let dateMonth = date.getMonth();
// let dateDay = date.getDate();
let monthArray = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

var today = new Date();
var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000)); // прибавляем сутки
var dayTomorrow = tomorrow.getDate(); 
var monthTomorrow = tomorrow.getMonth(); //в js месяц отсчитывается с нуля
var yearTomorrow = tomorrow.getFullYear(); 

// console.log(dateYear);
// console.log(dateMonth);
// console.log(dateDay);
// console.log(monthArray[dateMonth]);
// console.log(`${monthArray[dateMonth]} ${dateDay + 1}, ${dateYear}`);
title.innerHTML = `${titleText} ${monthArray[monthTomorrow]} ${dayTomorrow}`;
// let min = 75;
// let max = 92;
// let percent = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(percent);
// let claimed = document.querySelector('.claimed');
// claimed.innerHTML = percent;
// let progress = document.querySelector('.progress-bar-success');
// progress.style.width = percent + '%';





// let min = 75;
// let max = 92;
// let percent = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(percent);
// let claimed = document.querySelector('.claimed');
// claimed.innerHTML = percent;
// let progress = document.querySelector('.progress-bar-success');
// progress.style.width = percent + '%';






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



secondScreenBtn1.addEventListener('click', function() {


    secondScreenBtn1.classList.add('circle-out-1');
    secondScreenBtn2.classList.add('circle-out-2');
    thirdScreen.classList.add('show')
    


setTimeout(function() {

 
      absoluteCircle.style.animation = "slideCircleOut 1s ease"
      round.style.animation = 'slideCircleIn 1s ease'



    }, 500);
    setTimeout(function() {
      secondScreen.style.display = "none";
      thirdScreen.style.display = "block"
      absoluteCircle.style.display = 'none'
      thirdScreen.style.height = "unset"
    thirdScreen.style.visibility = "unset"
  
    }, 1000);
})

secondScreenBtn2.addEventListener('click', function() {
  secondScreenBtn1.classList.add('circle-out-1');
  secondScreenBtn2.classList.add('circle-out-2');
  thirdScreen.classList.add('show')

  setTimeout(function() {

    
    absoluteCircle.style.animation = "slideCircleOut 1s ease"
    round.style.animation = 'slideCircleIn 1s ease'


  }, 500);
  setTimeout(function() {
    secondScreen.style.display = "none";
    thirdScreen.style.height = "unset"
    thirdScreen.style.visibility = "unset"
    absoluteCircle.style.display = 'none'

  }, 1000);
})



  heroBtn.addEventListener('click', function() {
    heroTitle.classList.add('hide');
    heroText.classList.add('hide');
    heroImg.classList.add('hide');
    heroBtn.classList.add('hidden');
    
    setTimeout(function() {
      heroTitle.style.display = "none";
      heroText.style.display = "none";
      heroImg.style.display = "none";
      heroBtn.style.display = "none";
      heroText2.style.display = "block";
      heroText2.classList.add('show');
      secondScreen.style.display = "block";
      secondScreen.classList.add('show');
      heroBg.classList.add('circle-out-1');
      heroBg2.classList.add('circle-out-2');
      absoluteCircle.style.left = 'calc(50% - 220px)';
      absoluteCircle.style.top = '-43.5%';
      

      

    }, 500);
    
    setTimeout(function() {
      heroBg.style.display = "none";
      heroBg2.style.display = "none";
      heroBg3.style.display = 'block';
      heroBg3.style.animation = 'fadeInCircle 1s ease forwards';
      heroBg3.classList.add('show-circle');
    }, 1000);
  });
  document.addEventListener('DOMContentLoaded', function () {
    secondScreen.style.display = "block"
    fourthScreen.style.display = 'block'
    setTimeout(function() {
      var preloader = document.getElementById('preloader');
      preloader.style.display = 'none';
    
      secondScreen.style.display = "none"
      fourthScreen.style.display = 'none'
    }, 5000)
});

function addHoverEffect(liId, sectorId, imageSrc) {
  const li = document.getElementById(liId);
  const sector = document.getElementById(sectorId);
  li.addEventListener('mouseover', function() {
    sector.style.backgroundImage = `url(${imageSrc})`;
  });
  li.addEventListener('mouseout', function() {
    sector.style.backgroundImage = '';
  });
}

function addClickEffect(clickedLiId, allLiIds) {
  const clickedLi = document.getElementById(clickedLiId);
  const allLi = allLiIds.map(liId => document.getElementById(liId));
  clickedLi.addEventListener('click', function() {
    allLi.forEach(li => {
      if (li !== clickedLi) {
        li.style.transition = "filter 1s ease";
        li.style.backdropFilter = 'blur(1px)';
      }
    });
  });
}

const liIds = ['li1', 'li2', 'li3', 'li4', 'li5', 'li6', 'li7', 'li8', 'li9', 'li10', 'li11', 'li12'];
const sectorIds = ['sector1', 'sector2', 'sector3', 'sector4', 'sector5', 'sector6', 'sector7', 'sector8', 'sector9', 'sector10', 'sector11', 'sector12'];

liIds.forEach((liId, index) => {
  const sectorId = sectorIds[index];
  const imageSrc = `path/to/image${index}.png`;
  addHoverEffect(liId, sectorId, imageSrc);
});

const allLiIds = liIds.slice(1);
addClickEffect('li1', allLiIds);

const liElements = liIds.map(liId => document.getElementById(liId));
liElements.forEach((li) => {
  li.addEventListener('click', function() {
    setTimeout(function() {
      round.style.animation = "fadeOut 0.5s ease-out"
    }, 500);
    setTimeout(function() {
      fourthScreen.style.display = "block";
      fourthScreen.classList.add('show');
      thirdScreen.style.display = 'none';
      round.style.display = "none"
      absoluteCircle.style.top = '-44.5%';
      absoluteCircle.style.animation = 'slideCircleIn 1s ease'
      absoluteCircle.style.display = 'flex'
      absoluteCircle.style.overflow = 'unset'
      heroBg3.style.top = "8px"
    }, 1000);
  });
});