const swiper = new Swiper('.review__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    autoHeight: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  });

  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
  
    // Удаляем класс 'active' и устанавливаем максимальную высоту 0 при загрузке страницы
    item.classList.remove('active');
    content.style.maxHeight = '0';
  
    header.addEventListener('click', () => {
      item.classList.toggle('active');
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });

  var input = document.querySelector("#phone");
window.intlTelInput(input, {

  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});