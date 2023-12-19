let startTimer = document.getElementById('starttimer');
let timer = document.getElementById('timer')
let quetions = document.getElementById('quetions')

startTimer.addEventListener('click', function() {
    
    timer.style.opacity = "1"
    startTimer.style.animation = 'fadeOut 1s ease-in-out forwards'
    countdown();


    setTimeout(function() {
        quetions.style.height = '0'
        quetions.style.display = 'block'
        quetions.style.animation = 'fadeInFirst 1s ease forwards'
    }, 1000)

})
let question1 = document.querySelector('.quetion-1');
let question2 = document.querySelector('.quetion-2');
let question3 = document.querySelector('.quetion-3');
let question4 = document.querySelector('.quetion-4');
let question5 = document.querySelector('.quetion-5');
let question6 = document.querySelector('.quetion-6');
let question7 = document.querySelector('.quetion-7');

let question1btns = document.querySelectorAll('.quetion-1 .quetion__btn');
let question2btns = document.querySelectorAll('.quetion-2 .quetion__btn');
let question3btns = document.querySelectorAll('.quetion-3 .quetion__btn');
let question4btns = document.querySelectorAll('.quetion-4 .quetion__btn');
let question5btns = document.querySelectorAll('.quetion-5 .quetion__btn');
let question6btns = document.querySelectorAll('.quetion-6 .quetion__btn');
let question7btns = document.querySelectorAll('.quetion-7 .quetion__btn');

question1btns.forEach(function(quetion1btn) {
    quetion1btn.addEventListener('click', function() {
        question1.style.animation = 'fadeOut 1s ease-in-out forwards'
       
        setTimeout(function() {
            question1.style.display = 'none'
            question2.style.display = 'block'
            question2.style.animation = 'fadeIn 1s ease-in-out'
           
        }, 1200)
    
    });
    
});

question2btns.forEach(function(quetion2btn) {
    quetion2btn.addEventListener('click', function() {
        question2.style.animation = 'fadeOut 1s ease-in-out forwards'
       
        setTimeout(function() {
            question2.style.display = 'none'
            question3.style.display = 'block'
            question3.style.animation = 'fadeIn 1s ease-in-out'
          
        }, 1200)
    
    });
    
});

question3btns.forEach(function(quetion3btn) {
    quetion3btn.addEventListener('click', function() {
        question3.style.animation = 'fadeOut 1s ease-in-out forwards'
       
        setTimeout(function() {
            question3.style.display = 'none'
            question4.style.display = 'block'
            question4.style.animation = 'fadeIn 1s ease-in-out'
 
        }, 1200)
    
    });
    
});

question4btns.forEach(function(quetion4btn) {
    quetion4btn.addEventListener('click', function() {
        question4.style.animation = 'fadeOut 1s ease-in-out forwards'
       
        setTimeout(function() {
            question4.style.display = 'none'
            question5.style.display = 'block'
            question5.style.animation = 'fadeIn 1s ease-in-out'
         
        }, 1200)
    
    });
    
});

question5btns.forEach(function(quetion5btn) {
    quetion5btn.addEventListener('click', function() {
        question5.style.animation = 'fadeOut 1s ease-in-out forwards'
       
        setTimeout(function() {
            question5.style.display = 'none'
            question6.style.display = 'block'
            question6.style.animation = 'fadeIn 1s ease-in-out'
      
        }, 1200)
    
    });
    
});

question6btns.forEach(function(quetion6btn) {
    quetion6btn.addEventListener('click', function() {
        question6.style.animation = 'fadeOut 1s ease-in-out forwards'
       
        setTimeout(function() {
            question6.style.display = 'none'
            question7.style.display = 'block'
            question7.style.animation = 'fadeIn 1s ease-in-out'
       
        }, 1200)
    
    });
    
});

let main = document.querySelector('.main')
let aside = document.querySelector('.aside')
let loader = document.querySelector('.loader')
let loaderItem1 = document.querySelector('.loader__item-1')
let loaderItem2 = document.querySelector('.loader__item-2')
let loaderItem3 = document.querySelector('.loader__item-3')
let last = document.querySelector('.last')

question7btns.forEach(function(quetion7btn) {
    quetion7btn.addEventListener('click', function() {
        main.style.animation = 'fadeOut 1s ease-in-out forwards'
        aside.style.animation = 'fadeOut 1s ease-in-out forwards'
       
        setTimeout(function() {
            main.style.display = "none"
            aside.style.display = "none"
            loader.style.animation = 'fadeIn 1s ease-in-out'
            loader.style.display = 'block'
            
        }, 1200)
        setTimeout(function() {
            loaderItem1.style.animation = 'fadeIn 1s ease-in-out'
            loaderItem1.style.display = 'block'
        }, 5000)
        setTimeout(function() {
            loaderItem2.style.animation = 'fadeIn 1s ease-in-out'
            loaderItem2.style.display = 'block'
        }, 6500)
        setTimeout(function() {
            loaderItem3.style.animation = 'fadeIn 1s ease-in-out'
            loaderItem3.style.display = 'block'
        }, 7500)
        setTimeout(function() {
            loader.style.animation = 'fadeOut 3s ease-in-out forwards'
        }, 8000)
        setTimeout(function() {
            loader.style.display = "none"
            last.style.display = "block"
            last.style.animation = 'slideInFromDown 1s ease'
        }, 11000)
    
    });
    
});

let spinner = document.querySelector('.last__img')
let spinner2 = document.querySelector('.last__spinner')
let modal = document.querySelector('.modal')
let modalbtn = document.querySelector('.modal__btn')
let prize = document.querySelector('.prize')
let hide = document.querySelector('.hide')
let show = document.querySelector('.show')
let body = document.querySelector('body')

spinner2.addEventListener('click', function() {
    spinner.style.animation = 'spin 5s ease forwards'
    setTimeout(function() {
        modal.style.animation = 'fadeIn 1s ease-in-out'
        modal.style.display = "block"
        body.style.overflow = 'hidden'

    }, 5500)


})

modalbtn.addEventListener('click', function() {
    modal.style.animation = 'fadeOut 1s ease-in-out forwards'
    setTimeout(function() {
        spinner.style.animation = 'spin2 5s ease forwards'
        body.style.overflow = 'unset'

    }, 1000)
    setTimeout(function() {
        prize.style.display = 'block'


    }, 7000)
    setTimeout(function() {

        prize.style.animation = 'rotate 1s ease forwards'

    }, 7300)
    setTimeout(function() {

        prize.style.display = 'none'
        hide.style.display = 'none'
        show.style.display = 'block'
        countdown2()

    }, 9000)

})




let commentDates = document.querySelectorAll(".comments__date, .comments__date-2, .comments__date-3");

function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return day + "." + month + "." + year;
}

commentDates.forEach(function(commentDate) {
  let today = new Date();
  let commentDateClass = commentDate.classList;
  if (commentDateClass.contains("comments__date")) {
    commentDate.textContent = formatDate(today);
  } else if (commentDateClass.contains("comments__date-2")) {
    let yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    commentDate.textContent = formatDate(yesterday);
  } else if (commentDateClass.contains("comments__date-3")) {
    let twoDaysAgo = new Date(today);
    twoDaysAgo.setDate(today.getDate() - 2);
    commentDate.textContent = formatDate(twoDaysAgo);
  }
});




function countdown() {
    var seconds = 120; // Время в секундах (2 минуты)
    var timerElement = document.getElementById("timer");
    
    var countdownInterval = setInterval(function() {
      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = seconds % 60;
      
      // Добавляем ведущий ноль, если секунды меньше 10
      if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
      }
      
      timerElement.textContent = minutes + " Minutes " + remainingSeconds + " Seconds";
      
      if (seconds === 0) {
        clearInterval(countdownInterval);
        timerElement.textContent = "0 Minutes 00 Seconds";
      } else {
        seconds--;
      }
    }, 1000);
  }

  function countdown2() {
    var seconds = 300; // Время в секундах (2 минуты)
    var timerElement = document.getElementById("timer2");
    
    var countdownInterval = setInterval(function() {
      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = seconds % 60;
      
      // Добавляем ведущий ноль, если секунды меньше 10
      if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
      }
      
      timerElement.textContent = minutes + " Minutes " + remainingSeconds + " Seconds";
      
      if (seconds === 0) {
        clearInterval(countdownInterval);
        timerElement.textContent = "0 Minutes 00 Seconds";
      } else {
        seconds--;
      }
    }, 1000);
  }
  

  let cardsAmount = document.getElementById('cardsAmount');
  let interval;
  
  function decreaseCardsAmount() {
    let currentAmount = parseInt(localStorage.getItem('cardsAmount')) || 0;
    if (currentAmount > 0) {
      currentAmount--;
      localStorage.setItem('cardsAmount', currentAmount);
      cardsAmount.textContent = currentAmount;
    } else {
      clearInterval(interval);
    }
  }
  
  function startCountdown() {
    interval = setInterval(decreaseCardsAmount, 5000);
    setTimeout(function() {
      clearInterval(interval);
      interval = setInterval(decreaseCardsAmount, 2000);
      setTimeout(function() {
        clearInterval(interval);
        interval = setInterval(decreaseCardsAmount, 5000);
      }, 8000);
    }, 5000);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    let storedAmount = localStorage.getItem('cardsAmount');
    if (storedAmount) {
      cardsAmount.textContent = storedAmount;
      startCountdown();
    } else {
      localStorage.setItem('cardsAmount', 146); // Начальное значение cardsAmount
      cardsAmount.textContent = 146;
      startCountdown();
    }
  });