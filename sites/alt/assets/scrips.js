$( document ).ready(function() {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.config({
            ignoreMobileResize: true,
        })
        const mainslider = $(".main-slider");
        
        mainslider.owlCarousel({
            items:1,
            nav:true,
            callbacks: true,
            navText: ['<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41 21.0002L0.999999 21.0002" stroke="white" stroke-width="1.85328" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 41L0.999998 21L21 0.999999" stroke="white" stroke-width="1.85328" stroke-linecap="round" stroke-linejoin="round"/></svg>','<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 20.9998H41" stroke="white" stroke-width="1.85328" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 1L41 21L21 41" stroke="white" stroke-width="1.85328" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,

                }
            }
        });
        mainslider.on('changed.owl.carousel', function(event) {
            elSlider = document.querySelectorAll('.owl-item .text-scrumble');
            phrases[0] = elSlider[event.page.index].textContent;
            const fx = new TextScramble(elSlider[event.page.index])
            let counter = 0
            const next = () => {
                fx.setText(phrases[counter])
            }
            next()
        })
        $(".slider-wrapper").owlCarousel({
            items:2,
            slideBy:1,
            margin:20,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    margin:5,
                },
                600:{
                    items:2,
                    nav:false,
                    margin:10,
                },
                1000:{
                    items:2,
                }
            }
        });
        $(".second-slider").owlCarousel({
            items:2,
            slideBy:1,
            margin:20,
            responsive:{
                0:{
                    items:1,
                    margin:5,
                    slideBy:1,
                    nav:false,
                    dots:true,
                },
                600:{
                    items:1,
                    margin:10,
                    nav:false,
                    dots:true,
                },
                1000:{
                    items:2,
                    nav:false,
                    dots:true,
                }
            }
        });
        $(".second-greentext-slider").owlCarousel({
            items:1,
            slideBy:1,
            margin:20,
            dots: false,
            responsive:{
                0:{
                    items:1,
                    slideBy:1,
                    nav:false,
                    margin:5,
                    dots:true,
                },
                600:{
                    items:1,
                    nav:false,
                    margin:10,
                    dots:true,
                },
                1000:{
                    items:1,
                    dots: false,
                }
            }
        });
        /*****************/
        $(".header-menu-wrapper,.menu-txt,.menu-btn.corners-mini").on("click",function () {
            $(".fix-menu-wrapper").css({
                display:"flex",
            });
            $(".fix-header-menu").animate({
                opacity:1,
                left:0+"vw",
            },1000);
        })
        $(".fix-menu-wrapper").on("click",function () {
            $(".fix-header-menu").animate({
                opacity:0,
                left:100+"vw",
            },1000,function () {
                $(".fix-menu-wrapper").css({
                    display:"none",
                })
            });
        })
        /***********************/
        function validateForms(form){

            $(form).submit(function(e) {
                e.preventDefault();

                if (!$(this).valid()) {
                    return;
                }

                $.ajax({
                    type: "POST",
                    url: "/assets/mail/send.php",
                    data: $(this).serialize()
                }).done(function() {
                    $(this).find("input").val("");
                    $('#modal-form').fadeOut();
                    $('#thanks').fadeIn('slow');
                    $('form').trigger('reset');
                });
                return false;
            });

        };

        validateForms('#contact-us');
        validateForms('#careers');
        validateForms('#modal-form');
        validateForms('#modal-form-driving');

        let iconsWrappers = document.querySelectorAll('.icon-wrapper');
        let iconImages = document.querySelectorAll('.icon-block>.icon');
        let iconTitle = document.querySelectorAll('.icon-block>.title');

        iconImages.forEach(item => {
            item.classList.add('icon-blink');
        });
        iconTitle.forEach(item => {
            item.classList.add('title-blink');
        });
        iconsWrappers.forEach((item, i, arr) => {
            arr[i].addEventListener('click', function () {
                iconImages[i].classList.remove('icon-blink');
                iconTitle[i].classList.remove('title-blink');
            });
        });

    console.log("ready");
        
});

document.addEventListener("DOMContentLoaded", function () {
    const greyText = document.querySelectorAll('.text-content');
    const image = document.querySelectorAll('.show-big-picture');
    function seeScroll (trigger, activeClass) {
        document.addEventListener('scroll', function() {
            trigger.forEach(item => {
                item.getBoundingClientRect().top
                if (+item.getBoundingClientRect().top <= (window.screen.height/2)) {
                    item.classList.add(activeClass);
                }
                if (+item.getBoundingClientRect().top >= (window.screen.height/2)) {
                    item.classList.remove(activeClass);
                }
            });
        });
    }
    seeScroll(greyText, 'text-content-white');
    seeScroll(image, 'active');
});


