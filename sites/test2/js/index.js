function openAcc(toggleButton, content, toggleArrow) {
    toggleButton.addEventListener('click', function() {
        content.classList.toggle('open');
        toggleArrow.classList.toggle('rotate');
        toggleArrow.classList.toggle('colored')
        
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let toggleButtons = document.querySelectorAll('.faq__block');
    let contents = document.querySelectorAll('.content');
    
    toggleButtons.forEach((toggleButton, index) => {
        let toggleArrow = toggleButton.querySelector('.arrow-btn');
        openAcc(toggleButton, contents[index], toggleArrow);
    });
});

