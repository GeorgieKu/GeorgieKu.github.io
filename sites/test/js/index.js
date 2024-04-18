document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open")
    })
})

function openAcc(toggleButton, content, toggleArrow) {
    toggleButton.addEventListener('click', function() {
        content.classList.toggle('open');
        toggleArrow.classList.toggle('rotate');
        
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let toggleButtons = document.querySelectorAll('.acc');
    let contents = document.querySelectorAll('.content');
    
    toggleButtons.forEach((toggleButton, index) => {
        let toggleArrow = toggleButton.querySelector('svg');
        openAcc(toggleButton, contents[index], toggleArrow);
    });
});





let buttons = document.querySelectorAll('.button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Check if the element has the 'checked' class
        let isChecked = button.classList.contains('checked');

        if (!isChecked) {
            // If the element is not checked, add the 'checked' class
            button.classList.add('checked');
            let gal = button.querySelector('.gal');
            gal.style.display = 'block';
        } else {
            // If the element is checked, remove the 'checked' class
            button.classList.remove('checked');
            let gal = button.querySelector('.gal');
            gal.style.display = 'none';
        }
    });
});

const swiper = new Swiper('.basic-swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 12,
});

document.addEventListener("DOMContentLoaded", function() {
    // Find all elements with the class "tooltip-trigger"
    const tooltipTriggers = document.querySelectorAll(".tooltip-trigger");

    // Iterate over all found elements
    tooltipTriggers.forEach(function(trigger) {
        // Find the element with the class "tooltip-text" (tooltip)
        const tooltipText = trigger.nextElementSibling;

        // Add event listener for mouseover event on the element
        trigger.addEventListener("mouseover", function() {
            tooltipText.style.visibility = "visible";
            tooltipText.style.opacity = "1";
        });

        // Add event listener for mouseout event on the element
        trigger.addEventListener("mouseout", function() {
            tooltipText.style.visibility = "hidden";
            tooltipText.style.opacity = "0";
        });
    });
});