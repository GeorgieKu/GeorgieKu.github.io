const swiper = new Swiper('.help__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,

  
    // Navigation arrows
    navigation: {
      nextEl: '.help-button-next',
      prevEl: '.help-button-prev',
    },

  });

  let destructionCards = document.querySelectorAll('.destruction__card');
  destructionCards.forEach(function(destructionCard) {
      let destructionText = destructionCard.querySelector('.destruction__text');
      let originalText = destructionText.textContent;
      destructionCard.addEventListener('mouseover', function() {
          destructionText.textContent = 'Оставить заявку';
          destructionText.style.background = 'linear-gradient(180deg, #FF8E54 0%, #FE7027 100%), radial-gradient(66.01% 56.87% at 50.05% 0%, #FFAF86 0%, rgba(244, 223, 198, 0) 100%)';
          destructionText.style.color = '#252525';
      });
      destructionCard.addEventListener('mouseout', function() {
          destructionText.textContent = originalText;
          destructionText.style.background = 'linear-gradient(98.25deg, #373737 0%, #2F2E2E 100%), linear-gradient(0deg, #616161, #616161)';
          destructionText.style.color = '#FFF';
      });
  });

  function openModal() {
    let modal = document.querySelector('.modal')
    let overlay = document.querySelector('.overlay')
    modal.style.display = 'block';
    overlay.style.display = 'block';
    overlay.addEventListener('click', function() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    })
  }

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }