let footerBtnUp = document.querySelector('.footer__btn-up')

footerBtnUp.addEventListener('click', function() {
    document.documentElement.scrollTop = 0;
})

document.getElementById("burger").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open")
})
