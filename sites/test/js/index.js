document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })


    let statementPaidHiddenBlock = document.querySelector('.statement-paid__hidden-block');
    let form = document.querySelector('.statement-paid__from');

    if(form) {
        form.addEventListener('submit', function(event) {

            if (form.checkValidity()) {
                event.preventDefault();
                statementPaidHiddenBlock.style.display = 'flex'; 
            }
        });
    }
    

})

