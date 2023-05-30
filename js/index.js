document.addEventListener('DOMContentLoaded', () => {
    // Это модалка для кнопки Подробнее. Чтоб добавить новую надо скопировать блок и добавить цифры как ниже.В HTML добавить классы.
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

    // Модалка для второй карточки Подробнее

    const openButton2 = document.querySelector('.js-open-modal2');
    const modal2 = document.querySelector(openButton2.dataset.target);

    openButton2.addEventListener('click', () => {
        modal2.style.display = 'block';
    });

    modal2.querySelector('.modal-dialog2').addEventListener('click', event => {
        event._isClickWithinModal = true;
    });

    modal2.addEventListener('click', event => {
        if (event._isClickWithinModal) return;
        modal2.style.display = 'none';
    })


    
    // Модалка для 3 карточки Подробнее

    const openButton3 = document.querySelector('.js-open-modal3');
    const modal3 = document.querySelector(openButton3.dataset.target);

    openButton3.addEventListener('click', () => {
        modal3.style.display = 'block';
    });

    modal3.querySelector('.modal-dialog3').addEventListener('click', event => {
        event._isClickWithinModal = true;
    });

    modal3.addEventListener('click', event => {
        if (event._isClickWithinModal) return;
        modal3.style.display = 'none';
    })
});

  Fancybox.bind('[data-fancybox="phone1"]', {
    //
});
Fancybox.bind('[data-fancybox="phone2"]', {
    //
});

//Это модалки для кнопки заказать. Чтобы добавить моадлку к новой карточке. Нужно в hTML добавить ей новый класс.
// прописать openContactЧисло и привязать к кнопке через класс который добавили
var openContact = document.querySelector('.open-modal');
var openContact2 = document.querySelector('.open-modal2');
var openContact3 = document.querySelector('.open-modal3');
var modalContact = document.querySelector('.modal-contact');
var overlay = document.querySelector('.overlay');


if (modalContact) {
  var formContact = modalContact.querySelector('.modal-contact__form');
  let submitbtn = document.querySelector('.submit-btn');
 
// Скопировать вот эту часть и поменять в первом слове цифру
  openContact.addEventListener('click', function (event) {
    event.preventDefault();
    modalContact.classList.add('modal-contact--show');
    overlay.classList.add('overlay--show');
  });
// До сюда и вставить ниже

  openContact2.addEventListener('click', function (event) {
    event.preventDefault();
    modalContact.classList.add('modal-contact--show');
    overlay.classList.add('overlay--show');
  });

  openContact3.addEventListener('click', function (event) {
    event.preventDefault();
    modalContact.classList.add('modal-contact--show');
    overlay.classList.add('overlay--show');
  });


  overlay.addEventListener('click', function (event) {
    modalContact.classList.remove('modal-contact--show');
    overlay.classList.remove('overlay--show');
  });

  submitbtn.addEventListener('click', function (event){
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