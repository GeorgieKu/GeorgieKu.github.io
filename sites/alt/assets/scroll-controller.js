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