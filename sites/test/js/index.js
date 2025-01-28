document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
        document.querySelector('body').classList.toggle('locked')
    })

    let showMoreBtn = document.getElementById('showMore');
    let hiddenList = document.querySelector('.hidden-576')
    if(showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            hiddenList.classList.toggle('hidden-576');
            showMoreBtn.classList.toggle('open')
        })
    }


    let terminalsBtns = document.querySelectorAll('.terminals__btns button');

    terminalsBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            terminalsBtns.forEach(function(btn) {
                btn.classList.remove('active')
            })
               
            
            btn.classList.add('active')
        })
    })
})


let allAboutModal = document.getElementById('allAboutModal');
let overlay = document.getElementById('overlay');
let modal = document.getElementById('modal');
let closeModal = document.getElementById('closeModal');

function openModal() {
    allAboutModal.classList.add('active');
    modal.setAttribute('open', 'open');
    modal.style.animation = 'sacler .25s ease'
}
if (closeModal) {
    closeModal.addEventListener('click', function() {
        allAboutModal.classList.remove('active');
        modal.removeAttribute('open', 'open');
    })
}

if(overlay) {
    overlay.addEventListener('click', function() {
        allAboutModal.classList.remove('active');
        modal.removeAttribute('open', 'open');
    })
}



function openAcc(toggleButton, content, toggleArrow) {
    toggleButton.addEventListener('click', function() {
        content.classList.toggle('open');
        toggleArrow.classList.toggle('rotate');
        
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let toggleButtons = document.querySelectorAll('.acc');
    let contents = document.querySelectorAll('.content');
    
    toggleButtons.forEach((toggleButton, index) => {
        let toggleArrow = toggleButton.querySelector('svg');
        openAcc(toggleButton, contents[index], toggleArrow);
    });
});