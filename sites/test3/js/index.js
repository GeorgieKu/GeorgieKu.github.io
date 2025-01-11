document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })

    let footerBtn = document.querySelector('.footer__btn');

    footerBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
    })

    let modal = document.getElementById('modal');
    let overlay = document.getElementById('overlay');
    let closeBtn = document.getElementById('closeBtn');

    closeBtn.addEventListener('click', function() {
        modal.removeAttribute('open', 'open');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', function() {
        modal.removeAttribute('open', 'open');
        overlay.classList.remove('active');
    })


})

function openModal() {
    modal.setAttribute('open', 'open');
    overlay.classList.add('active');
}