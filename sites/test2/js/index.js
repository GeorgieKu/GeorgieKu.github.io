let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let searching = document.getElementById('searching')

document.addEventListener("DOMContentLoaded", function () {
    // Display spinner for 3 seconds
    document.querySelectorAll('.spinner').forEach(spinner => {
        spinner.style.display = 'inline-block'; // Show spinner
        setTimeout(() => {
            spinner.style.display = 'none'; // Hide spinner after 3 seconds
            // Show card content
            spinner.parentElement.querySelector('.hit-block').style.display = 'inline-block';
            spinner.parentElement.querySelector('.price-block').style.display = 'inline-block';
            spinner.parentElement.nextElementSibling.style.display = 'flex';
        }, 3000);
    });
});

// input.addEventListener('input', function() {
//     btn.removeAttribute('disabled', 'disabled')
//     if (input.value === '') {
//         btn.setAttribute('disabled', 'disabled')
//     }
// })

// btn.addEventListener('click', function() {
//     searching.style.display = 'block'

    
// })


