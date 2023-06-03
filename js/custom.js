

// nav menu 
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");
  
}

let link1 = document.getElementById('nav-link1')
let link2 = document.getElementById('nav-link2')
let link3 = document.getElementById('nav-link3')
let link4 = document.getElementById('nav-link4')
    link3.addEventListener('click', function() {
   
        document.getElementById('myNav').classList.remove('menu_width')
        document.querySelector(".custom_menu-btn").classList.remove("menu_btn-style");

    })
    link2.addEventListener('click', function() {
   
        document.getElementById('myNav').classList.remove('menu_width')
        document.querySelector(".custom_menu-btn").classList.remove("menu_btn-style");

    })
    link1.addEventListener('click', function() {
   
        document.getElementById('myNav').classList.remove('menu_width')
        document.querySelector(".custom_menu-btn").classList.remove("menu_btn-style");

    })
    link4.addEventListener('click', function() {
   
        document.getElementById('myNav').classList.remove('menu_width')
        document.querySelector(".custom_menu-btn").classList.remove("menu_btn-style");

    })

   

// owl carousel script
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
