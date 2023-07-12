$(function () {
    $('.mask__btn').on('click', function (e) {
        showModal('one')
    })
    //setTimeout(() => {
    //    showModal('two')
    //}, 120000); /* время в миллисекундах */
    //}, 60000); /* время в миллисекундах */
    //$(document).mouseleave(function(e){
    //    if (e.clientY < 10) {
    //        showModal('two')
    //    }
    //});
    $('.form__link--btn').on('click', function (e) {
        hideModal()
    })
});
function showModal(modalName) {
    let body = $('body')
    let modalMain = $('.modal')
    let shadow = $('.modal__shadow')
    let activeModal = $('.modal__view.active')
    let viewModal = $('.modal__' + modalName)

    if (activeModal.length > 0) {
        activeModal.removeClass('active')
        viewModal.addClass('active')
    }
    else {
        body.addClass('no_scroll')
        shadow.addClass('show')
        modalMain.addClass('viewed')
        viewModal.addClass('active')
    }
}
function hideModal () {
    let body = $('body')
    let modalMain = $('.modal')
    let shadow = $('.modal__shadow')
    let activeModal = $('.modal__view.active')
    console.log(activeModal)
    activeModal.removeClass('active')
    body.removeClass('no_scroll')
    shadow.removeClass('show')
    modalMain.removeClass('viewed')
}