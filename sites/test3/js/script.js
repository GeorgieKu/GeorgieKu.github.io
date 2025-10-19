let contactChecks = document.querySelectorAll('.contact__check');

contactChecks.forEach(function (contactCheck) {
    contactCheck.addEventListener('click', function () {


        contactCheck.classList.toggle('active')
    })
})
let modal = document.getElementById('modal');

modal.showModal()

let acceptBtn = document.getElementById('acceptBtn');

acceptBtn.addEventListener('click', function () {
    modal.close()
})