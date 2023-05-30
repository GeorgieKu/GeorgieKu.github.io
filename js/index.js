document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.js-open-modal');
    const modal = document.querySelector(openButton.dataset.target);

    openButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    modal.querySelector('.modal-dialog').addEventListener('click', event => {
        event._isClickWithinModal = true;
    });

    modal.addEventListener('click', event => {
        if (event._isClickWithinModal) return;
        modal.style.display = 'none';
    })
});

  Fancybox.bind('[data-fancybox="phone1"]', {
    //
});
Fancybox.bind('[data-fancybox="phone2"]', {
    //
});


var openContact = document.querySelector('.open-modal');
var modalContact = document.querySelector('.modal-contact');
var overlay = document.querySelector('.overlay');


if (modalContact) {
  var formContact = modalContact.querySelector('.modal-contact__form');
  var submitbtn = document.querySelector('.submit-btn');
 

  openContact.addEventListener('click', function (event) {
    event.preventDefault();
    modalContact.classList.add('modal-contact--show');
    overlay.classList.add('overlay--show');
  });



  overlay.addEventListener('click', function (event) {
    modalContact.classList.remove('modal-contact--show');
    overlay.classList.remove('overlay--show');
  });

  submitbtn.addEventListener('click', function (event)  {
    modalContact.classList.remove('modal-contact--show');
    overlay.classList.remove('overlay--show');
  })

  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      if (modalContact.classList.contains('modal-contact--show')) {
        modalContact.classList.remove('modal-contact--show');
        overlay.classList.remove('overlay--show');
      }
    }
  });
  };