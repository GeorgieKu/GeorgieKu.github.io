let contactChecks = document.querySelectorAll('.contact__check');

contactChecks.forEach(function (contactCheck) {
    contactCheck.addEventListener('click', function () {


        contactCheck.classList.toggle('active')
    })
})
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.\^$*+?()[\]{}|])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (encodeURIComponent(value) || "") + expires + "; path=/";
}

const modal = document.getElementById('modal');
const acceptBtn = document.getElementById('acceptBtn');

window.addEventListener('load', function () {
    if (!getCookie('modalAccepted')) {
        modal.showModal();
    }
});

// Обработчик клика по кнопке accept
acceptBtn.addEventListener('click', function () {
    setCookie('modalAccepted', 'true', 30);
    modal.close();
});