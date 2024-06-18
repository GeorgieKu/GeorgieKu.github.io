document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
        document.getElementById("headerNav").classList.toggle("open")
        if (document.querySelector("header").classList.contains('open')) {
            document.querySelector("body").style.overflow = 'hidden'
        }
        else {
            document.querySelector("body").style.overflow = 'auto'
        }
    })

    const menuLink = document.querySelector('.menu__link_red');
    const dropdown = document.querySelector('.menu__dropdown');

    menuLink.addEventListener('click', (event) => {
        event.preventDefault();
        dropdown.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!menuLink.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });

 




    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
    let activeDropdown = null;

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dropdownContent = this.nextElementSibling;

            // Закрываем предыдущий открытый список, если он существует и не является текущим
            if (activeDropdown && activeDropdown !== dropdownContent) {
                activeDropdown.style.display = 'none';
            }

            // Переключение видимости текущего списка
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
                activeDropdown = null;
            } else {
                dropdownContent.style.display = 'block';
                activeDropdown = dropdownContent;
            }
        });
    });

    // Закрываем выпадающий список при клике вне его
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            if (activeDropdown) {
                activeDropdown.style.display = 'none';
                activeDropdown = null;
            }
        }
    });


        

    

})

function openTab(event, tabName) {
    // Получаем все элементы с классом tab-content и скрываем их
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tabContent => {
        tabContent.style.display = 'none';
    });

    // Получаем все элементы с классом tab-btn и убираем класс active
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(tabButton => {
        tabButton.classList.remove('active');
    });

    // Показываем текущий таб и добавляем класс active к кнопке, которая открыла этот таб
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

const swiper = new Swiper('.hero__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
  
    // If we need pagination
    pagination: {
      el: '.hero__pagination',
    },
  
  });

  var swiper2 = new Swiper(".product__swiper", {
    spaceBetween: 10,
    slidesPerView: 'auto',
    spaceBetween: 20,
    centerdSlides: true,
    thumbs: {
      swiper: swiper3,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
    
    }
  });

var swiper3 = new Swiper(".product__swiper-2", {
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });

  var swiper3 = new Swiper(".accessories__swiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
        el: '.accessories__pagination'
    },
  });

  var swiper4 = new Swiper(".watched__swiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
        el: '.watched__pagination'
    },
  });

  new SimpleBar(document.getElementById('myElement'));