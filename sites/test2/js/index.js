document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })


    const swiper = new Swiper('.hero__swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
    });


    document.querySelectorAll('.checker').forEach(function(label) {
        label.addEventListener('click', function(event) {

            event.preventDefault();
            
            
            let hiddenCheckbox = label.querySelector('.hidden-checkbox');
            hiddenCheckbox.checked = !hiddenCheckbox.checked;
            
  
            let checkbox = label.querySelector('.checkbox');
            if (hiddenCheckbox.checked) {
                checkbox.classList.add('checked');
                hiddenCheckbox.setAttribute('checked', 'checked')
            } else {
                checkbox.classList.remove('checked');
                hiddenCheckbox.removeAttribute('checked', 'checked')
            }
        });
    });

    let drugBtn1 = document.getElementById('drugBtn1')
    let drugBtn2 = document.getElementById('drugBtn2')
    let drugBtn3 = document.getElementById('drugBtn3')
    let firstRow = document.getElementById('firstRow')
    let secondRow = document.getElementById('secondRow')
    let thirdRow = document.getElementById('thirdRow')
    let tabImage1 = document.getElementById('tabImage-1')
    let tabImage2 = document.getElementById('tabImage-2')
    let tabImage3 = document.getElementById('tabImage-3')

    drugBtn1.addEventListener('click', function() {
        drugBtn1.classList.add('drug__btn_active')
        drugBtn2.classList.remove('drug__btn_active')
        drugBtn3.classList.remove('drug__btn_active')

        firstRow.classList.add('active-row')
        secondRow.classList.remove('active-row')
        thirdRow.classList.remove('active-row')

        tabImage1.classList.add('active-img')
        tabImage2.classList.remove('active-img')
        tabImage3.classList.remove('active-img')
    })

    drugBtn2.addEventListener('click', function() {
        drugBtn1.classList.remove('drug__btn_active')
        drugBtn2.classList.add('drug__btn_active')
        drugBtn3.classList.remove('drug__btn_active')

        firstRow.classList.remove('active-row')
        secondRow.classList.add('active-row')
        thirdRow.classList.remove('active-row')

        tabImage1.classList.remove('active-img')
        tabImage2.classList.add('active-img')
        tabImage3.classList.remove('active-img')
    })

    drugBtn3.addEventListener('click', function() {
        drugBtn1.classList.remove('drug__btn_active')
        drugBtn2.classList.remove('drug__btn_active')
        drugBtn3.classList.add('drug__btn_active')

        firstRow.classList.remove('active-row')
        secondRow.classList.remove('active-row')
        thirdRow.classList.add('active-row')

        tabImage1.classList.remove('active-img')
        tabImage2.classList.remove('active-img')
        tabImage3.classList.add('active-img')
    })


  
})