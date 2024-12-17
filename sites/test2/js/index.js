let darkModeBtn = document.getElementById('darkModeBtn');
let darkMode = document.getElementById('darkMode');
let lightMode = document.getElementById('lightMode');
const savedTheme = localStorage.getItem('theme');


function setTheme(theme) {
  document.documentElement.classList.remove('dark', 'light');
  document.documentElement.classList.add(theme);

  if (theme === 'dark') {
    darkMode.classList.add('active');
    lightMode.classList.remove('active');
  } else {
    darkMode.classList.remove('active');
    lightMode.classList.add('active');
  }


  const svgContainers = document.querySelectorAll('#about ul li svg');
  svgContainers.forEach((svg, index) => {
    if (theme === 'dark') {
      svg.style.display = index % 2 === 1 ? 'block' : 'none';
    } else {
      svg.style.display = index % 2 === 0 ? 'block' : 'none';
    }
  });
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


document.addEventListener('DOMContentLoaded', function () {
  let searchBtn = document.getElementById('searchBtn');
let seachBlock = document.getElementById('seachBlock');
let searchInput = document.getElementById('searchInput');
let closeSearchBtn = document.getElementById('closeSearchBtn');
let searchList = document.getElementById('searchList');

// Функция для закрытия searchList при клике вне его
function closeSearchListIfClickedOutside(event) {
  // Проверяем, что клик был сделан вне searchList и searchInput
  if (!searchList.contains(event.target) && !searchInput.contains(event.target)) {
    searchList.classList.add('hidden');
  }
}

if (window.innerWidth < 1020) {
  searchBtn.addEventListener('click', function () {
    closeSearchBtn.classList.remove('hidden');
    seachBlock.classList.add('opened');
  });

  searchInput.addEventListener('focus', function () {
    closeSearchBtn.classList.remove('hidden');
    seachBlock.classList.add('opened');
  });

  closeSearchBtn.addEventListener('click', function () {
    seachBlock.classList.remove('opened');
    closeSearchBtn.classList.add('hidden');
    searchList.classList.add('hidden');
  });
}

// Показ searchList при вводе текста в input
searchInput.addEventListener('input', function () {
  if (searchInput.value.trim() === '') {
    searchList.classList.add('hidden');
  } else {
    searchList.classList.remove('hidden');
  }
});

// Закрытие searchList при потере фокуса
searchInput.addEventListener('blur', function () {
  if (searchInput.value.trim() === '') {
    searchList.classList.add('hidden');
  }
});

// Добавляем обработчик события на весь документ для закрытия searchList, если клик был вне его
document.addEventListener('click', closeSearchListIfClickedOutside);
  });



  let moreTextBtn = document.getElementById('moreTextBtn');
  let moreTextContent = document.getElementById('moreTextContent');

  if(moreTextBtn) {
    moreTextBtn.addEventListener('click', function () {
      let mainBlock = document.getElementById('mainBlock');
      mainBlock.classList.toggle('prose-p:line-clamp-3');
      mainBlock.classList.toggle('l:prose-p:line-clamp-6');
  
      let moreTextBtnSvg = moreTextBtn.querySelector('svg');
      if (mainBlock.classList.contains("prose-p:line-clamp-3")) {
        moreTextContent.textContent = 'Подробнее';
        moreTextBtnSvg.style.transform = 'rotate(0deg)'
      } else {
        moreTextContent.textContent = 'Cкрыть';
  
        moreTextBtnSvg.style.transform = 'rotate(-90deg)'
      }
  
  
    })
  }

 

  new SimpleBar(document.getElementById('searchList'), {
    autoHide: false
  });


  let likeBtns = document.querySelectorAll('.like-btn');

  likeBtns.forEach(function(likeBtn) {
    likeBtn.addEventListener('click', function() {
      let icon = likeBtn.querySelector('svg');
      let likeCounter = likeBtn.querySelector('span');
      
      // Проверяем, есть ли у кнопки класс 'liked'
      if (likeBtn.classList.contains('liked')) {
        // Убираем класс, меняем цвет иконки обратно
        likeBtn.classList.remove('liked');
        icon.style.fill = '';
        icon.style.stroke = '';
        
        // Уменьшаем счетчик на 1
        let currentCount = parseInt(likeCounter.textContent);
        likeCounter.textContent = (currentCount > 1 ? '+' + (currentCount - 1) : '0');
      } else {
        // Добавляем класс, меняем цвет иконки
        likeBtn.classList.add('liked');
        icon.style.fill = '#F74B3C';
        icon.style.stroke = '#F74B3C';
        
        // Увеличиваем счетчик на 1
        let currentCount = parseInt(likeCounter.textContent);
        likeCounter.textContent = '+' + (currentCount + 1);
      }
    });

    let avatars = document.querySelectorAll('#avatars button');

    avatars.forEach(function(avatar) {
      avatar.addEventListener('click', function() {
        // Убираем класс 'chosen' у всех аватаров
        avatars.forEach(function(otherAvatar) {
          otherAvatar.classList.remove('chosen');
        });
        
        // Добавляем класс 'chosen' к текущему аватару
        avatar.classList.add('chosen');
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const replyButtons = document.querySelectorAll(".answerBtn");
    const replyPreview = document.getElementById("reply-preview");
    let replyPreviewDiv = replyPreview.querySelector('div');
    const replyAvatar = document.getElementById("reply-avatar");
    const replyUsername = document.getElementById("reply-username");
    const replyDate = document.getElementById("reply-date");
    const replyText = document.getElementById("reply-text");
    const commentForm = document.getElementById("comment-form");

    replyButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            // Найти родительский элемент комментария
            const commentBlock = e.target.closest(".comment");
            cancelBtn.classList.remove('hidden')
            replyPreview.classList.add('mb-4')

            // Получить данные комментария
            const avatar = commentBlock.querySelector("img").src;
            replyAvatar.classList.remove('hidden');
            const username = commentBlock.querySelector(".username").innerText;
            const date = commentBlock.querySelector(".date").innerText;
            const text = commentBlock.querySelector("p").innerText;
            let formText = document.getElementById('formText');

            formText.innerHTML = `Ваш ответ <span>${username}</span>`;

  

            // Вставить данные в блок перед формой
            replyAvatar.src = avatar;
            replyUsername.innerText = username;
            replyDate.innerText = date;
            replyText.innerText = text;

            // Показать блок
            replyPreview.classList.remove("hidden");

            // Прокрутить к форме
            replyPreview.scrollIntoView({ behavior: "smooth" });
        });
    });

    
    let cancelBtn = document.getElementById('cancelBtn');
    cancelBtn.addEventListener('click', function() {
      replyAvatar.classList.add('hidden');
      replyUsername.innerText = '';
      replyDate.innerText = '';
      replyText.innerText = '';
      formText.innerHTML = `Оставить комментарий`;
      replyPreview.classList.add('hidden')
      cancelBtn.classList.add('hidden')
    })

    const inputField = document.querySelector('#formInput'); // Поле для имени
    const textareaField = document.querySelector('textarea'); // Поле для комментария
    const submitButton = document.querySelector('form button[type="submit"]'); // Кнопка отправки

    // Функция для проверки заполнения полей
    function toggleSubmitButton() {
        if (inputField.value.trim() !== '' && textareaField.value.trim() !== '') {
            submitButton.disabled = false;
            submitButton.classList.remove('bg-[#9B9B9C]', 'dark:text-[#878787]');
            submitButton.classList.add('bg-[#383839]', 'dark:bg-[#565656]', 'dark:text-white');
        } else {
            submitButton.disabled = true;
            submitButton.classList.remove('bg-[#383839]', 'dark:bg-[#565656]', 'dark:text-white');
            submitButton.classList.add('bg-[#9B9B9C]', 'dark:text-[#878787]');
        }
    }

    // Добавляем события input для полей
    inputField.addEventListener('input', toggleSubmitButton);
    textareaField.addEventListener('input', toggleSubmitButton);
});