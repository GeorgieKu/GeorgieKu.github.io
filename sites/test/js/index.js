document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 'auto',

    
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
})