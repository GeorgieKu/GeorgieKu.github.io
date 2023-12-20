


function openUrl(){
    window.location.href = offerUrl;
  }





let loading = document.querySelector('.loading');
let loadItem1 = document.querySelector('.loader__item-1');
let loadItem2 = document.querySelector('.loader__item-2');
let loadItem3 = document.querySelector('.loader__item-3');

let quizPromo = document.querySelector('.quiz__promo');
let quizBtn3 = document.querySelector('.quiz__btn');
let quizInput = document.querySelector('.quiz__input');
let quizInputValue = document.getElementById('quiz__input').value;
let quizError = document.querySelector('.quiz__error');









  quizBtn3.addEventListener('click', () => {
      if(quizInput.value == "XMAS23" || quizInput.value == "xmas23") {
     
        quizPromo.style.animation = 'fadeOut 1s ease forwards';
        setTimeout(() => {
          quizPromo.style.display = 'none';
          loading.style.display = 'block';
          loading.style.animation = 'fadeIn 1s ease forwards';

        }, 1000);
        setTimeout(() => {
          window.location = "{offer}";
          loadItem1.style.opacity = '1'
        }, 2000);
        setTimeout(() => {
          loadItem2.style.opacity = '1'
        }, 4000);
        setTimeout(() => {
          loadItem3.style.opacity = '1'
        }, 5000);
      }
      else {
        quizBtn3.removeAttribute('href');
        quizInput.style.borderColor = '#E41331';
        quizError.style.display = "block"
      }


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
