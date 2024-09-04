document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })

    let statementPaidHiddenBlock = document.querySelector('.statement-paid__hidden-block');
    let statementPaidBtn = document.querySelector('.statement-paid__btn');
    let form = document.querySelector('.statement-paid__from');

    form.addEventListener('submit', function(event) {

        if (form.checkValidity()) {
            event.preventDefault();
            statementPaidHiddenBlock.style.display = 'flex'; 
        }
    });

})

