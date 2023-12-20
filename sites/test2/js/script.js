


function openUrl(){
    window.location.href = offerUrl;
  }


let quetion1 = document.querySelector('.quetion-1');
let quetion2 = document.querySelector('.quetion-2');
let quetion3 = document.querySelector('.quetion-3');

let loading = document.querySelector('.loading');
let loadItem1 = document.querySelector('.loader__item-1');
let loadItem2 = document.querySelector('.loader__item-2');
let loadItem3 = document.querySelector('.loader__item-3');

let quizBtn1 = document.querySelectorAll('.quiz__btn-1');
let quizBtn2 = document.querySelectorAll('.quiz__btn-2');
let quizBtn3 = document.querySelectorAll('.quiz__btn-3');


quizBtn1.forEach(quizBtn1 => {
  quizBtn1.addEventListener('click', () => {
    quetion1.style.animation = 'fadeOut 1s ease forwards';
    setTimeout(() => {
      quetion1.style.display = 'none';
      quetion2.style.animation = 'fadeIn 1s ease forwards';
      quetion2.style.display = 'block';
     
    }, 1200);
  });
});

quizBtn2.forEach(quizBtn2 => {
  quizBtn2.addEventListener('click', () => {
    quetion2.style.animation = 'fadeOut 1s ease forwards';
    setTimeout(() => {
      quetion2.style.display = 'none';
      quetion3.style.animation = 'fadeIn 1s ease forwards';
      quetion3.style.display = 'block';

    }, 1200);
  });
});

quizBtn3.forEach(quizBtn3 => {
  quizBtn3.addEventListener('click', () => {
    quetion3.style.animation = 'fadeOut 1s ease forwards';
    setTimeout(() => {
      quetion3.style.display = 'none';
      loading.style.display = 'block';
      loading.style.animation = 'fadeIn 1s ease forwards';
    }, 1000);
    setTimeout(() => {
      loadItem1.style.opacity = '1'

    }, 2000);
    setTimeout(() => {
      loadItem2.style.opacity = '1'
    }, 4000);
    setTimeout(() => {
      loadItem3.style.opacity = '1'
    }, 5000);
  });
});


function waitOn() {
    let text = "Wait"
    let pointCount = 0
    var i = setInterval(function () {
        var newText = text
        for (let i = 0; i <= pointCount; i++) {
            newText += "."
        }
        document.getElementById("startBtn").text = newText;
        pointCount++
        if (pointCount > 2) {
            pointCount = 0
        }
    }, 200);
}

function waitOn2() {
    let text = "Wait"
    let pointCount = 0
    var i = setInterval(function () {
        var newText = text
        for (let i = 0; i <= pointCount; i++) {
            newText += "."
        }
        document.getElementById("startBtn2").text = newText;
        pointCount++
        if (pointCount > 2) {
            pointCount = 0
        }
    }, 200);
}

function waitOn3() {
    let text = "Wait"
    let pointCount = 0
    var i = setInterval(function () {
        var newText = text
        for (let i = 0; i <= pointCount; i++) {
            newText += "."
        }
        document.getElementById("startBtn3").text = newText;
        pointCount++
        if (pointCount > 2) {
            pointCount = 0
        }
    }, 200);
}



  document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.querySelectorAll('.block');
    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;
        blocks.forEach(block => {
            let blockPosition = block.getBoundingClientRect().top;
            if (blockPosition < windowHeight - 100) {
                block.style.opacity = "1";
                block.style.transform = "translateY(0)";
            }
        });
    }
    checkBlocksVisibility();
    window.addEventListener('scroll', function() {
        checkBlocksVisibility();
    });
});

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
  const hiddenText = item.querySelector('.faq__item-hidden');
  const plus = item.querySelector('.plus');


  item.addEventListener('click', () => {
    hiddenText.classList.toggle('active');
    if(plus.textContent == "+") {
      plus.textContent = "-"
    }
    else {
      plus.textContent = "+"
    }
  });
});

const scrollToTopButton = document.querySelector('.scrollToTop');
const commentBlock = document.querySelector('.comment-block');

// Функция для проверки положения прокрутки страницы
function checkScrollPosition() {
  const scrollPosition = window.scrollY;
  const commentBlockPosition = commentBlock.offsetTop;

  if (scrollPosition >= commentBlockPosition) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
}

// Обработчик события прокрутки страницы
window.addEventListener('scroll', checkScrollPosition);

// Проверяем положение прокрутки страницы при загрузке страницы
checkScrollPosition();


scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
