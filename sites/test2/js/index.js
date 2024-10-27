let searchInput = document.getElementById('searchInput');
let searchList = document.getElementById('searchList');
let searchBtn = document.getElementById('searchBtn');

searchInput.addEventListener('input', function() {
  searchList.style.display = 'block';
  if(searchInput.value == '') {
    searchList.style.display = 'none';
  }
});

if(window.innerWidth < 769) {
  
searchBtn.addEventListener('click', function() {
  searchInput.style.transition = 'max-width .3s ease';
  searchInput.style.paddingLeft = '16px';
  searchInput.style.maxWidth = '100%';
  searchInput.focus();
});

// Закрытие input при клике вне него и кнопки
document.addEventListener('click', function(event) {
  if (!searchInput.contains(event.target) && !searchBtn.contains(event.target) && !searchList.contains(event.target)) {
    searchInput.style.maxWidth = '0';
    searchInput.style.paddingLeft = '0';
    searchList.style.display = 'none';
  }
});
}


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

document.querySelectorAll('.moreReviews').forEach(button => {
  button.addEventListener('click', function () {
      const reviewsContainer = this.closest('.card').querySelector('.reviews');
      const reviewItems = reviewsContainer.querySelectorAll('div:not(:first-child)');
      
      // Toggle visibility of review items
      reviewItems.forEach(item => {
          item.classList.toggle('lg:hidden');
      });
      
      // Update button text based on visibility
      if (this.textContent === 'Показать все') {
          this.textContent = 'Скрыть все';
      } else {
          this.textContent = 'Показать все';
          reviewItems.forEach((item, index) => {
              if (index > 0) item.classList.add('lg:hidden');
          });
      }
  });
});


