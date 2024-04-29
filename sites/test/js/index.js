let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let searching = document.getElementById('searching')

input.addEventListener('input', function() {
    btn.removeAttribute('disabled', 'disabled')
    if (input.value === '') {
        btn.setAttribute('disabled', 'disabled')
    }
})

btn.addEventListener('click', function() {
    searching.style.display = 'block'

    
})
