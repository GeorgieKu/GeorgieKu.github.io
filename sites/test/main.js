document.addEventListener("DOMContentLoaded", function() {
  let header = document.getElementById('header')
  let burger = document.getElementById('burger')
  let overlay = document.getElementById('overlay')
  let openDropDowns = document.querySelectorAll('.menu__link_dd')
  let submenu = document.querySelector('.submenu')
  let openSubDropDowns = document.querySelectorAll('.submenu__item_dd')
  let submenuRight = document.querySelector('.submenu-right')

  burger.addEventListener("click", function() {
    header.classList.toggle("open")
    overlay.classList.toggle("visible")
  })

  openDropDowns.forEach(function(openDropDown) {
    openDropDown.addEventListener('click', function() {
      openDropDown.classList.toggle('active')
      submenu.classList.toggle('show')
    })
  });

  openSubDropDowns.forEach(function(openSubDropDown) {
    openSubDropDown.addEventListener('click', function() {
      openSubDropDown.classList.toggle('active')
      submenuRight.classList.toggle('show')
    })
  });


})