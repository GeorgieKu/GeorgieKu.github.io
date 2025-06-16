
document.addEventListener('click', function(event) {
  var navbarCollapse = document.querySelector('.navbar-collapse');
  var navbarToggler = document.querySelector('.navbar-toggler');
  
  if (navbarCollapse.classList.contains('show') && event.target !== navbarCollapse && event.target !== navbarToggler && !navbarCollapse.contains(event.target)) {
    navbarToggler.click();
  }
});

