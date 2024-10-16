let darkModeBtn = document.getElementById('darkModeBtn')
let searchInput = document.getElementById('searchInput')
let searchList = document.getElementById('searchList')
let searchBtn = document.getElementById('searchBtn')
let header = document.querySelector('header')
let closeBtn = document.getElementById('closeBtn')

darkModeBtn.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
})

searchInput.addEventListener('click', function(event) {
    searchList.style.display = 'flex';
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    const isClickInsideInput = searchInput.contains(event.target);
    const isClickInsideList = searchList.contains(event.target);

    if (!isClickInsideInput && !isClickInsideList) {
        searchList.style.display = 'none';
    }
});

searchBtn.addEventListener('click', function() {
    if(window.innerWidth <= 768) {
        searchInput.style.display = 'block';
        searchInput.style.position = 'absolute';
        searchInput.style.left = '20px';
        searchInput.style.width = 'calc(100% - 90px)';
        searchInput.style.borderRadius = '3px';
        darkModeBtn.classList.add('hidden')
        closeBtn.classList.remove('hidden')
        
    }
})

closeBtn.addEventListener('click', function() {
    darkModeBtn.classList.remove('hidden');
    closeBtn.classList.add('hidden');
    searchInput.style.display = 'none';
})
