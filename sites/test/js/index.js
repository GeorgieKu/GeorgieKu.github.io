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


let video = document.getElementById('video');
let playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', function() {
    video.play();
    playBtn.classList.add('hidden');
})

let memory8Btn = document.getElementById('memory8');
let memory16Btn = document.getElementById('memory16');
let memory8Price = document.getElementById('priceFor8');
let memory16Price = document.getElementById('priceFor16');

if (memory8Btn.classList.contains('active')) {
    memory8Price.style.display = 'block';
    memory16Price.style.display = 'none';
}

if(memory16Btn) {
    memory16Btn.addEventListener('click', function() {
        memory8Price.style.display = 'none';
        memory16Price.style.display = 'block';
    })
}

if(memory8Btn) {
    memory8Btn.addEventListener('click', function() {
        memory8Price.style.display = 'block';
        memory16Price.style.display = 'none';
    })
}



