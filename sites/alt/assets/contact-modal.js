document.addEventListener("DOMContentLoaded", function () {
    const contactUs = document.querySelectorAll('.title-text-container-contact');
    const closeModal = document.querySelector('.close_modal');
    const closeModalThanks = document.querySelector('.close_modal_thanks');
    const modal = document.querySelector('.modal-form');
    const formContent = document.querySelector('.form-feedback');
    const overlay = document.querySelector('.form-overlay');
    const sendBtn = document.querySelector('.feedback-btn_modal');
    

    function modalOpenContact (trigger) {
        contactUs.forEach((item, i, arr) => {
            arr[i].addEventListener(trigger, function () {
                modal.classList.add('block');
                modal.classList.add('show__modal');
                formContent.style.display = "block";
                overlay.classList.add('form-overlay-active');
            });
        });
        
    }
    modalOpenContact('click');
    modalOpenContact('touched');

    function listenerScroll(trigger) {
        contactUs.forEach(item => {
            item.addEventListener(trigger, function() {
                const topClient = item.getBoundingClientRect();
                modal.style.top = 150 + window.pageYOffset + 'px';
            });
        });
    }
    listenerScroll('click');
    listenerScroll('touched');

    sendBtn.addEventListener('click', function() {
        modal.classList.remove('block');
    });

    function closeModalWindow (trigger, responseTrigger) {
        trigger.addEventListener(responseTrigger, function () {
            modal.classList.remove('show__modal');
            modal.classList.add('fade__modal');
            overlay.classList.remove('form-overlay-active');
            //modal.classList.remove('block');
        });
    }
    closeModalWindow(closeModal, 'click');
    closeModalWindow(closeModal, 'touched');
    
    function removeClasses() {
        timeoutId = setTimeout(() => {
            modal.classList.remove('block');
            modal.classList.remove('fade__modal');
        }, 1000);    
    }
    function removeBlock() {
        timeoutId = setTimeout(() => {
            modal.classList.remove('block');
        }, 1000);   
    }
    function removerModal (responseTrigger) {
        closeModal.addEventListener(responseTrigger, removeClasses);
    }
    removerModal('click');
    removerModal('touched');
    function removerThanksModal (responseTrigger) {
        closeModalThanks.addEventListener(responseTrigger, removeBlock);
    }
    removerThanksModal('click');
    removerThanksModal('touched');
});