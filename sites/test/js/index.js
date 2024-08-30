document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })

    const dateInputs = document.querySelectorAll('.date__input');
    
    dateInputs.forEach(function(dateInput) {
     
        dateInput.setAttribute('type', 'text');
        
   
        new AirDatepicker(dateInput, {
            dateFormat: 'dd.MM.yyyy',
      
            onSelect: function(formattedDate) {

            }
        });
    });

})

