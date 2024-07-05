document.addEventListener("DOMContentLoaded", function() {

    const header = document.getElementById('header');
    let burger = document.getElementById('burger')
    let search  = document.getElementById('search');
    let lastScrollTop = 0;

    function toggleHeader() {
        header.classList.toggle("open");
    }
    
    burger.addEventListener("click", toggleHeader);
    
    search.addEventListener('click', function() {
        header.classList.toggle("search-open");
        if (header.classList.contains('search-open')) {
            // Remove the current event listener to prevent stacking
            burger.removeEventListener('click', toggleHeader);
            burger.addEventListener('click', function() {
                header.classList.remove('open');
                header.classList.remove('search-open');
                // Reattach the original event listener after closing the search
                burger.removeEventListener('click', arguments.callee);
                burger.addEventListener('click', toggleHeader);
            });
        } else {
            // Ensure the burger click toggles the header correctly
            burger.removeEventListener('click', arguments.callee);
            burger.addEventListener("click", toggleHeader);
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
})