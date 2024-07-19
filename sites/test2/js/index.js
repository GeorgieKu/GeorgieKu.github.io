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

    const tabs = document.querySelectorAll('.treatment__btn');
    const tabContents = document.querySelectorAll('.treatment__tab-1, .treatment__tab-2');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = tab.getAttribute('data-tab');

            tabs.forEach(btn => btn.classList.remove('treatment__btn_active'));
            tab.classList.add('treatment__btn_active');

            tabContents.forEach(content => {
                if (content.classList.contains(`treatment__tab-${target}`)) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    document.querySelectorAll('.checker').forEach(function(label) {
        label.addEventListener('click', function() {
            var checkbox = label.querySelector('.checkbox');
            checkbox.classList.toggle('checked');
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


    const drugTabs = document.querySelectorAll('.drug__btn-2');
    const drugTabContents = document.querySelectorAll('.drug__tab');

    drugTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');

            drugTabs.forEach(t => t.classList.remove('drug__btn-2_active'));
            tab.classList.add('drug__btn-2_active');

            drugTabContents.forEach(content => {
                if (content.id === tabId) {
                    content.classList.add('active');
                } else {
                    console.log(content.id)
                    console.log(tabId)
                    content.classList.remove('active');
                }
            });
        });
    });
})