    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("burger").addEventListener("click", function () {
            document.querySelector("header").classList.toggle("open")
        })
    })

    document.addEventListener('DOMContentLoaded', () => {

        const customCheckboxes = document.querySelectorAll('.custom-checkbox');

        customCheckboxes.forEach(wrapper => {

            let checkbox = wrapper.querySelector('.real-check');
            if (!checkbox) {
                checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'real-check';
                checkbox.style.display = 'none';
                wrapper.insertBefore(checkbox, wrapper.firstChild);
            }


            const outerRect = wrapper.querySelector('.outer-rect');
            const tumbler = wrapper.querySelector('.tumbler');


            const syncView = () => {
                if (checkbox.checked) {
                    wrapper.classList.add('checked');

                } else {
                    wrapper.classList.remove('checked');

                }
            };


            syncView();


            wrapper.addEventListener('click', (e) => {

                if (e.target.closest('a')) return;

                checkbox.checked = !checkbox.checked;


                syncView();


                checkbox.dispatchEvent(new Event('change'));
            });
        });
    });


    const swiper = new Swiper('.projects__swiper', {

        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 40,


        navigation: {
            nextEl: '.projects__next',
            prevEl: '.projects__prev',
        },

        breakpoints: {
            320: {
                slidePerView: 1,
            },
            576: {
                slidePerView: 'auto'
            }
        }
    });

    function openAcc(toggleButton, content, toggleArrow) {
        toggleButton.addEventListener('click', function () {
            content.classList.toggle('open');
            toggleArrow.classList.toggle('rotate');

        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        let toggleButtons = document.querySelectorAll('.acc');
        let contents = document.querySelectorAll('.faq__qusetion');

        toggleButtons.forEach((toggleButton, index) => {
            let toggleArrow = toggleButton.querySelector('svg');
            openAcc(toggleButton, contents[index], toggleArrow);
        });
    });
    let modal = document.querySelector('.modal');

    function openModal() {

        modal.showModal();

        modal.addEventListener('click', handleOutsideClick);
    }

    function closeModal() {
        modal.close();
    }

    function handleOutsideClick(event) {
        if (event.target === modal) {
            modal.close();
        }
    }

    let scrollBtn = document.querySelector('.footer__btn-2');

    if (scrollBtn) {
        scrollBtn.addEventListener('click', function (event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }