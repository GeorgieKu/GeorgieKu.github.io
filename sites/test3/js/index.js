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
    
            const targets = document.querySelectorAll('.spacer__title, .spacer__text');
            const spacer = document.querySelector('.spacer');
            const spacerImg = document.querySelector('.spacer__img');
            
            const observer = new IntersectionObserver((entries, observer) => {
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
        
            targets.forEach(target => {
                observer.observe(target);
            });
        
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;
    
        
                // Scale effect on image
                let scaleFactor = 1 + scrollPosition / 1000; // Adjust scale factor as needed
                if (scaleFactor > 1.3) {
                    scaleFactor = 1.3;
                }
                spacerImg.style.transform = `scale(${scaleFactor})`;
            });
    }

    
})