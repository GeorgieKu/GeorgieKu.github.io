function openAcc(toggleButton, content, toggleArrow) {
    toggleButton.addEventListener('click', function() {
        content.classList.toggle('open');
        toggleArrow.classList.toggle('rotate');
        
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let toggleButtons = document.querySelectorAll('.acc');
    let contents = document.querySelectorAll('.content');
    
    toggleButtons.forEach((toggleButton, index) => {
        let toggleArrow = toggleButton.querySelector('svg');
        openAcc(toggleButton, contents[index], toggleArrow);
    });
});


  
var swiper2 = new Swiper(".member__swiper", {
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 48,
    navigation: {
      nextEl: ".member-btn-next",
      prevEl: ".member-btn-prev",
      
    },
    breakpoints: {
      320: {
        spaceBetween: 8,
      },
      575: {
        spaceBetween: 48,
      },
      
    }

  });

  var swiper3 = new Swiper(".gallery__swiper", {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 100,
    loop: true,
    initialSlide: 2,
    centeredSlides: true,
    slideActiveClass: 'swiper-slide-active',
    navigation: {
      nextEl: ".gallery-btn-next",
      prevEl: ".gallery-btn-prev",
      
    },
    breakpoints: {
      320: {
        spaceBetween: 16,
      },
      575: {
        spaceBetween: 100,
      },
      
    }

  });

  var swiper4 = new Swiper(".recommendations__swiper", {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 48,
    loop: false,
    breakpoints: {
      320: {
        direction: 'vertical',
        spaceBetween: 24,
        touch: {
          enabled: false,
        },
      },
      575: {
        direction: 'horizontal',
        spaceBetween: 48,
      },
      
    }

  });


  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Скрыть все содержимое табов
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Убрать класс "active" со всех кнопок табов
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("tab-btn-active");
    }

    // Показать содержимое текущего таба и выделить соответствующую кнопку
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("tab-btn-active");
}

// // По умолчанию открыть первый таб при загрузке страницы
// document.getElementById("tab3").style.display = "block";
// document.getElementsByClassName("tab-btn")[2].classList.add("tab-btn-active");


let flags = [false, false, false, false, false];

let participantsPag = document.querySelector('.participants__pag');
let participantsAcc = document.querySelectorAll('.participants__acc');

let participantsBtn = document.querySelector('.participants__btn');

participantsAcc.forEach((acc, index) => {
  acc.addEventListener('click', function() {
    flags[index] = !flags[index];
    let anyFlag = flags.some(flag => flag);
    participantsPag.style.display = anyFlag ? 'flex' : 'none';
    participantsBtn.textContent = anyFlag ? 'Показать еще' : 'Раскрыть все категории';
    participantsBtn.style.maxWidth = anyFlag ? '118px' : '182px';
    participantsBtn.style.backgroundColor = anyFlag ? 'transparent' : '#000';
    participantsBtn.style.color = anyFlag ? '#000' : '#fff';
    participantsBtn.classList.toggle('trans-btn', anyFlag);
    participantsBtn.classList.toggle('black-btn', !anyFlag);
    participantsBtn.style.border = anyFlag ? '2px solid #000000' : 'unset';
    
    // Добавляем или убираем класс open-btn у кнопки participantsBtn
    if (!flags.some(flag => flag)) {
      participantsBtn.classList.add('open-btn');
    } else {
      participantsBtn.classList.remove('open-btn');
    }
  });
});


let openBtn = document.querySelector('.open-btn')
openBtn.addEventListener('click', function() {
  let contents = document.querySelectorAll('.contentOpen')
  contents.forEach(function(content) {
    content.classList.add('open')
  })
});

let perticipantsSelect = document.querySelector('.perticipants__select');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');
let dropdownMenu = document.querySelector('.dropdown-menu');
let dropdownBtn = document.querySelector('.dropdown__btn')

document.addEventListener('mousedown', function(event) {
  if (!dropdownMenu.contains(event.target) && !perticipantsSelect.contains(event.target)) {
    overlay.style.display = 'none';
    body.style.overflow = 'auto';
  }
});

dropdownBtn.addEventListener('click', function() {
  
    overlay.style.display = 'none';
    body.style.overflow = 'auto';
  
});

perticipantsSelect.addEventListener('click', function() {
  if (!perticipantsSelect.classList.contains('show')) {
    overlay.style.display = 'block';
    body.style.overflow = 'hidden';
  } else {
    overlay.style.display = 'none';
    body.style.overflow = 'auto';
  }
});