document.addEventListener("DOMContentLoaded", function() {

    const header = document.getElementById('header');
    const burger = document.getElementById('burger');
    const search = document.getElementById('search');
    let lastScrollTop = 0;

    function toggleHeader() {
        console.log('toggleHeader triggered');
        header.classList.toggle("open");
    }

    function openSearch() {
        console.log('openSearch triggered');
        header.classList.add("search-open");
        header.classList.remove("open");
        burger.removeEventListener('click', toggleHeader);
        burger.addEventListener('click', closeSearch);
    }

    function closeSearch() {
        console.log('closeSearch triggered');
        header.classList.remove("search-open");
        burger.removeEventListener('click', closeSearch);
        burger.addEventListener('click', toggleHeader);
    }

    burger.addEventListener("click", toggleHeader);
    search.addEventListener('click', function() {
        console.log('search click triggered');
        if (header.classList.contains('search-open')) {
            closeSearch();
        } else {
            openSearch();
        }
    });

    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        function openAcc(toggleButton, content) {
            toggleButton.addEventListener('click', function() {
                content.classList.toggle('open');
                if (content.classList.contains('open')) {
                    document.getElementById('plus-minus').textContent = '-'
    
                }
                else {
                    document.getElementById('plus-minus').textContent = '+'
                }
                
            });
        }
        
    
            let toggleButtons = document.querySelectorAll('.acc');
            let contents = document.querySelectorAll('.content');
            
            toggleButtons.forEach((toggleButton, index) => {
                openAcc(toggleButton, contents[index], );
            });
    
            let openModal = document.getElementById('openModal');
            let modal = document.getElementById('modal');
            let overlay = document.getElementById('overlay');
            let closeBtn = document.getElementById('closeBtn');
            let video = document.querySelector('.modal video')
    
            openModal.addEventListener('click', function() {
                modal.style.display = 'block'
                overlay.style.display = 'block'
                video.play()
    
            })
    
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none'
                overlay.style.display = 'none'
                video.pause()
            })
    
            overlay.addEventListener('click', function() {
                modal.style.display = 'none'
                overlay.style.display = 'none'
                video.pause()
            })
          
            const titles = document.querySelectorAll('.spacer__title');
            const texts = document.querySelectorAll('.spacer__text');
            const spacer = document.querySelector('.spacer');
            const spacerImg = document.querySelector('.spacer__img');
            const numbersBlock = document.querySelector('.numbers');
            
            let spacerVisible = false;
            
            // Функция для управления видимостью элементов
            const toggleVisibility = (elements, isVisible) => {
                elements.forEach(element => {
                    if (isVisible) {
                        element.classList.add('visible');
                    } else {
                        element.classList.remove('visible');
                    }
                });
            };
            
            // Наблюдатель для .spacer__title
            const spacerObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    toggleVisibility(titles, entry.isIntersecting);
                    spacerVisible = entry.isIntersecting;
                });
            }, {
                threshold: 0.5
            });
            
            // Наблюдаем за .spacer
            spacerObserver.observe(spacer);
            
            // Наблюдатель для .spacer__text
            const numbersObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (spacerVisible) {
                        toggleVisibility(texts, true);
                    } else {
                        toggleVisibility(texts, entry.isIntersecting);
                    }
                });
            }, {
                threshold: 0.5
            });
            
            // Наблюдаем за .numbers
            numbersObserver.observe(numbersBlock);
            
            // Наблюдаем каждый блок чисел в обратном порядке (снизу вверх)
            const numberBlocks = document.querySelectorAll('.numbers__block');
            const numberBlocksObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            }, {
                threshold: 0.5
            });
            
            for (let i = numberBlocks.length - 1; i >= 0; i--) {
                numberBlocksObserver.observe(numberBlocks[i]);
            }
            
            // Добавляем эффект масштабирования изображения при прокрутке
            let lastScrollTop = 0;
            
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;
            
                // Эффект масштабирования на изображении
                let scaleFactor = 1 + scrollPosition / 500; // Можно настроить коэффициент масштабирования
                if (scaleFactor > 1.3) {
                    scaleFactor = 1.3;
                }
                spacerImg.style.transform = `scale(${scaleFactor})`;
            });
            
    }

    
})