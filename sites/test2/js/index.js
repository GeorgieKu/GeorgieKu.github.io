document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })


    const swiper = new Swiper('.hero__swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
    });


    document.querySelectorAll('.checker').forEach(function(label) {
        label.addEventListener('click', function(event) {

            event.preventDefault();
            
            
            let hiddenCheckbox = label.querySelector('.hidden-checkbox');
            hiddenCheckbox.checked = !hiddenCheckbox.checked;
            
  
            let checkbox = label.querySelector('.checkbox');
            if (hiddenCheckbox.checked) {
                checkbox.classList.add('checked');
                hiddenCheckbox.setAttribute('checked', 'checked')
            } else {
                checkbox.classList.remove('checked');
                hiddenCheckbox.removeAttribute('checked', 'checked')
            }
        });
    });



    const tooltips = document.querySelectorAll('.tooltip');
    let activeTooltip = null;

    tooltips.forEach(tooltip => {
        const img = tooltip.querySelector('img');
        const text = tooltip.querySelector('.tooltiptext');

        img.addEventListener('click', function (event) {
            event.stopPropagation();

            if (activeTooltip && activeTooltip !== text) {
                activeTooltip.classList.remove('visible');
            }

            text.classList.toggle('visible');
            activeTooltip = text.classList.contains('visible') ? text : null;
        });
    });

    document.addEventListener('click', function (event) {
        if (activeTooltip && !event.target.closest('.tooltip')) {
            activeTooltip.classList.remove('visible');
            activeTooltip = null;
        }
    });

        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('modalImage');
        const closeBtn = document.querySelector('.close');
        const overlay = document.getElementById('overlay')


        document.querySelectorAll('.company__cert').forEach(button => {
            button.addEventListener('click', function() {
                const largeSrc = button.getAttribute('data-large-src');
                modalImg.src = largeSrc;

                overlay.style.display = 'block';
                modal.style.display = 'block';
            });
        });


        closeBtn.onclick = function() {
            overlay.style.display = 'none';
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target === modal) {
                overlay.style.display = 'none';
                modal.style.display = 'none';
            }
        }

        window.onclick = function(event) {
            if (event.target === overlay) {
                overlay.style.display = 'none';
                modal.style.display = 'none';
                heroVideo.pause()
                clinicVideo.pause()
                ClinicCloseVideo.style.display = 'none'
                heroCloseVideo.style.display = 'none'
                playBtn.style.display = 'block'
            }
        }
  
        let heroVideoBtns = document.querySelectorAll('.hero__video__btn');
let heroVideo = document.getElementById('heroVideo');
let heroCloseVideo = document.getElementById('heroCloseVideo')
let playBtn = document.getElementById('playBtn')
let clinicVideo = document.getElementById('clinicVideo')
let ClinicCloseVideo = document.getElementById('ClinicCloseVideo')


heroVideoBtns.forEach(function(heroVideoBtn) {
    heroVideoBtn.addEventListener('click', function() {
        heroVideo.style.display = 'block';
        heroCloseVideo.style.display = 'block';
        overlay.style.display = 'block'
        heroVideo.play()
    })
})



heroCloseVideo.addEventListener('click', function() {
        heroVideo.style.display = 'none';
        overlay.style.display = 'none'
        heroCloseVideo.style.display = 'none';
        heroVideo.pause()
    })


playBtn.addEventListener('click', function() {
    playBtn.style.display = 'none'
    ClinicCloseVideo.style.display = 'block';
    overlay.style.display = 'block';
    // clinicVideo.style.position = 'absolute';
    // clinicVideo.style.top = '0';
    // clinicVideo.style.left = "0"
    // clinicVideo.style.width = "100%";
    // clinicVideo.style.height = '100%'
    clinicVideo.setAttribute('controls', '')
    clinicVideo.play()
})

ClinicCloseVideo.addEventListener('click', function() {
    playBtn.style.display = 'block'
    overlay.style.display = 'none'
    ClinicCloseVideo.style.display = 'none';
    clinicVideo.pause()
})




})

