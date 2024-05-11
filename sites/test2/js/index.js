
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        initialSlide: 2,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.btn-next',
          prevEl: '.btn-prev',
        },
      });
})