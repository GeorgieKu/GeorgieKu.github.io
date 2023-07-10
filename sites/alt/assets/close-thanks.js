document.addEventListener("DOMContentLoaded", function () {
    const closeModalThanks = document.querySelector('.close_modal_thanks');
    const thanksModal = document.querySelector('.thanks-modal');
    
    closeModalThanks.addEventListener('click', function () {
        thanksModal.classList.add('fade__modal');
    });
    closeModalThanks.addEventListener('touched', function () {
        thanksModal.classList.add('fade__modal');
    });
    function removeBlock() {
        timeoutId = setTimeout(() => {
            thanksModal.style.display = "none";
        }, 900);  
        timeoutId = setTimeout(() => {
            thanksModal.removeAttribute("style");
        }, 900); 
    }
    closeModalThanks.addEventListener('click', removeBlock);
    closeModalThanks.addEventListener('touched', removeBlock);
});