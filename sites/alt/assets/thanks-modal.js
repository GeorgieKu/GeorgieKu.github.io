document.addEventListener("DOMContentLoaded", function () {
    const closeThanksModal = document.querySelector('.close_modal_thanks');
    const thanksModal = document.querySelector('.thanks-modal');
    const modal = document.querySelector('.modal-form');
    const overlay = document.querySelector('.form-overlay');
    closeThanksModal.addEventListener('click', function () {
        thanksModal.style.display = "none";
        //modal.classList.remove('show__modal');
        overlay.classList.remove('form-overlay-active');
    });
});