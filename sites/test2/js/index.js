let darkModeBtn = document.getElementById('darkModeBtn')
let darkModeBtnActive = document.getElementById('modeChanger');
let burgerBtn = document.getElementById('burgerBtn');
let burgerContent = document.getElementById('burgerContent')
let overlay = document.getElementById('overlay')
let filmList = document.getElementById('filmList')
let searchInput = document.getElementById('searchInput')
let searchSvg = document.querySelector('.search-svg')
let searchSvgG = document.querySelector('.search-svg-g')
let moreText = document.getElementById('moreText')
let descr = document.getElementById('descr');
let answerBtns = document.querySelectorAll('.answer-btn')
let comments = document.querySelectorAll('.comment')


const savedTheme = localStorage.getItem('theme');

function setTheme(theme) {
  document.documentElement.classList.remove('dark', 'light'); 
  document.documentElement.classList.add(theme); 
}
if (savedTheme) {
  setTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setTheme('dark');
} else {
  setTheme('light');
}


darkModeBtn.addEventListener('click', function () {
  const isDark = document.documentElement.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';

  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});

burgerBtn.addEventListener('click', function() {
  burgerBtn.classList.toggle('not-open')
  burgerContent.classList.toggle('closed-content')
  overlay.classList.toggle('hidden')
})

searchInput.addEventListener('input', function() {
  filmList.style.dispaly = 'block'
})

searchInput.addEventListener('click', function(event) {
  filmList.style.display = 'flex';
  event.stopPropagation();
});

searchInput.addEventListener('focus', function() {
  searchSvg.style.fill = '#2B2B2B';
  searchSvgG.style.opacity = '1'
})

searchInput.addEventListener('blur', function() {
searchSvg.style.fill = '#1E222E';
searchSvgG.style.opacity = '0.5'
});




document.addEventListener('click', function(event) {
  const isClickInsideInput = searchInput.contains(event.target);
  const isClickInsideList = filmList.contains(event.target);

  if (!isClickInsideInput && !isClickInsideList) {
      filmList.style.display = 'none';
  }
});

if(moreText) {
  moreText.addEventListener('click', function() {
    descr.classList.toggle('show-text')
    if(descr.classList.contains('show-text')) {
      moreText.textContent = 'Скрыть'
    }
    else {
      moreText.textContent = 'Читать все'
    }
  })
}

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active-tab'));
        button.classList.add('active-tab');

        const tabId = button.getAttribute('data-tab-btn');

        tabContents.forEach(content => {
            if (content.getAttribute('data-tab') === tabId) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    });
});

let swiper = document.querySelector('.swiper')
if(swiper){
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 8,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    on: {
      afterInit: () => {
       this.navigation.update()
      }
    }
  
  });
}

comments.forEach(function(comment) {
  let answerBtn = comment.querySelector('.answer-btn');
  let user = comment.querySelector('.user')
  
  answerBtn.addEventListener('click', function() {
    document.querySelectorAll('.reply-block').forEach(function(replyBlock) {
      replyBlock.remove();
    });

    comment.insertAdjacentHTML('afterend', `
      <div class="reply-block pt-4 pb-6 px-6 bg-white border border-customFormBorder rounded-[24px] dark:bg-darkModeBg sm:pt-6 sm:px-8 sm:pb-8 sm:mb-2 xl:max-w-[627px] xl:w-full xl:shrink-0 dark:border-darkModeMainColor">
        <div class="flex gap-4 mb-4"> 
          <span class="font-semibold text-[18px] leading-[120%] text-customDarkGray dark:text-white">Ответ</span>
          <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class='dark:fill-white' opacity="0.3" d="M1 10.5C0.723858 10.5 0.5 10.7239 0.5 11C0.5 11.2761 0.723858 11.5 1 11.5V10.5ZM17.3536 11.3536C17.5488 11.1583 17.5488 10.8417 17.3536 10.6464L14.1716 7.46447C13.9763 7.2692 13.6597 7.2692 13.4645 7.46447C13.2692 7.65973 13.2692 7.97631 13.4645 8.17157L16.2929 11L13.4645 13.8284C13.2692 14.0237 13.2692 14.3403 13.4645 14.5355C13.6597 14.7308 13.9763 14.7308 14.1716 14.5355L17.3536 11.3536ZM1 11.5H17V10.5H1V11.5Z" fill="#1E222E"/>
          </svg>
          <span class="font-semibold text-[18px] leading-[120%] text-customDarkGray dark:text-white">${user.textContent}</span>                
        </div>
        <form action="#">
          <input class="border-[1px] border-customFormBorder bg-white rounded-[8px] h-[48px] pl-4 mb-3 w-full outline-none placeholder:font-Gilroy placeholder:text-[16px] placeholder:leading-[150%] placeholder:text-customDarkGray placeholder:opacity-50 focus:outline-none focus:border-customInputBorder dark:focus:border-customInputBorderDark dark:focus:border dark:bg-darkModeMainColor dark:placeholder:text-white dark:text-white dark:border-darkModeMainColor" type="text"  placeholder="Ваше имя">
          <textarea class="border-[1px] border-customFormBorder resize-none bg-white rounded-[8px] min-h-[166px] pl-4 pt-3 mb-4 w-full placeholder:font-Gilroy placeholder:text-[16px] placeholder:leading-[150%] placeholder:text-customDarkGray placeholder:opacity-50 focus:outline-none focus:border-customInputBorder dark:focus:border-customInputBorderDark dark:focus:border dark:bg-darkModeMainColor dark:placeholder:text-white dark:text-white dark:border-darkModeMainColor" placeholder="Ваш ответ..."></textarea>
          <div class="flex items-center gap-4">
            <button type="button" class="max-w-[203px] cancel-btn text-[16px] leading-[20px] text-customDarkGray py-[18px] lg:py-[16px] rounded-[16px] w-full bg-customGray hover:bg-customGrayHover transition-colors dark:bg-darkModeMainColor dark:text-white dark:hover:bg-darkModeMainColorHover" aria-label="Отменить">
              Отменить
            </button>
            <button type="submit" class="bg-greenGradient py-[14px] rounded-[16px] w-full after:bg-transparent after:content-[''] hover:after:bg-customBlackOpacity after:absolute after:inset-0 relative after:rounded-[16px] after:transition-colors font-medium text-[16px] leading-[20px] text-white relative z-10 shadow-custom-shadow" aria-label="Отправить">
              <span class='relative z-10'>Отправить</span>
            </button>
          </div>
        </form>
      </div>
    `);
    let cancelBtn = comment.nextElementSibling.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', function() {
      comment.nextElementSibling.remove();
    });
  });
});
