gsap.from(".hero__title", {
    y: 100,
    opacity: 0,
    duration: 1
})

gsap.from(".hero__descr", {
    opacity: 0,
    duration: 1,
    delay: 1,
})

gsap.from(".hero__btn", {
    y: 100,
    opacity: 0,
    duration: 1
})

gsap.from(".photos-wrap-img-1", {
    opacity: 0,
    duration: 1,
    delay: 1,
})

gsap.from(".photos-wrap-img-2", {
    opacity: 0,
    duration: 1,
    delay: 1.3,
})

gsap.from(".photos-wrap-img-3", {
    opacity: 0,
    duration: 1,
    delay: 1.7,
})

gsap.from(".photos__author", {
    opacity: 0,
    duration: 1,
    delay: 2,
});

let tl = gsap.timeline({ paused: true })
tl.fromTo(".menu", { display: "none", y: 100, opacity: 0, }, { display: "block", y: 0, opacity: 1, duration: 2, ease: "circle" }, '-=0.5');
tl.from(".menu__top", { delay: 0.5, opacity: 0, y: -50, duration: 0.5, ease: "circle" },
    '-=0.5');
tl.from(".nav__list", { delay: 0.4, opacity: 0, y: 25, duration: 0.5, ease: "circle" },
    '-=0.5')
tl.from(".social, .menu__right, .sub-menu", { delay: 0.7, y: 25, opacity: 0, duration: 0.5, ease: "circle" },
    '-=0.5');

let open = document.querySelector('.burger')
let close = document.querySelector('.close')
open.addEventListener("click", () => tl.play())
close.addEventListener("click", () => tl.reverse());
