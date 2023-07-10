document.addEventListener('DOMContentLoaded', function (){
    let offset = 0;
    let slideIndex = 1;

    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        width = window.getComputedStyle(slidesWrapper).width,
        slidesField = document.querySelector('.offer__slider-inner');


    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    next.addEventListener('click', () => {
        next.style.opacity = '0.25';
        prev.style.opacity = '1';
        if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
    });

    prev.addEventListener('click', () => {
        next.style.opacity = '1';
        prev.style.opacity = '0.25';
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
    });

    slidesWrapper.addEventListener('touchstart', handleTouchStart, false);
    slidesWrapper.addEventListener('touchmove', handleTouchMove, false);
    slidesWrapper.addEventListener('mousedown', mouseTouchStart, false);
    slidesWrapper.addEventListener('mousemove', mouseTouchMove, false);

    let x1 = null;
    let y1 = null;
    let mouseX1 = null;
    let mouseY1 = null;
    function mouseTouchStart (event) {
        mouseX1 = event.x;
        mouseY1 = event.y;
    }
    function mouseTouchMove (event) {
        if (!mouseX1 || !mouseY1) {
            return false;
        }
        let mouseX2 = event.x;
        let mouseY2 = event.y;

        let mouseXDiff = mouseX2 - mouseX1;
        let mouseYDiff = mouseY2 - mouseY1;
        if (Math.abs(mouseXDiff) > Math.abs(mouseYDiff)) {
            if (mouseXDiff > 0) {
                next.style.opacity = '1';
                prev.style.opacity = '0.25';
                offset = 0;
                slideIndex--;
            } else {
                slideIndex++;
                offset = +width.slice(0, width.length - 2) * (slides.length - 1);
                next.style.opacity = '0.25';
                prev.style.opacity = '1';
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
        }
        mouseX1 = null;
        mouseY1 = null;
    }

    function handleTouchStart (event) {
        const firstTouch = event.touches[0];
        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;
    }
    function handleTouchMove (event) {
        if (!x1 || !y1) {
            return false;
        }
        let x2 = event.touches[0].clientX;
        let y2 = event.touches[0].clientY;

        let xDiff = x2 - x1;
        let yDiff = y2 - y1;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                next.style.opacity = '1';
                prev.style.opacity = '0.25';
                offset = 0;
                slideIndex--;
            } else {
                next.style.opacity = '0.25';
                prev.style.opacity = '1';
                slideIndex++;
                offset = +width.slice(0, width.length - 2) * (slides.length - 1);
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
        } else {
            if (yDiff > 0) {
                console.log('down');
            } else {
                console.log('top');
            }
        }
        x1 = null;
        y1 = null;
    }

});