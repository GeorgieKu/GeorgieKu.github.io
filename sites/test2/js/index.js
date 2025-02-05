document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
        let body = document.querySelector("body");
        body.classList.toggle("lock");
    })


    
})

let modal = document.querySelector('.modal');
    function openModal() {
        modal.showModal();
    }

    let closeModalBtn = document.querySelectorAll('.modal__close');

   closeModalBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
        modal.close();
    })
   })

   document.addEventListener("DOMContentLoaded", function () {
    const select = document.querySelector(".custom-select");
    const selected = select.querySelector(".select-selected");
    const options = select.querySelector(".select-items");

if(selected) {
    selected.addEventListener("click", function () {
        options.classList.toggle("show");
    });
}
  
if(options) {
    options.addEventListener("click", function (event) {
        if (event.target.tagName === "DIV") {
            selected.textContent = event.target.textContent;
            options.classList.remove("show");
        }
    });
}


    document.addEventListener("click", function (event) {
        if (!select.contains(event.target)) {
            options.classList.remove("show");
        }
    });
});

