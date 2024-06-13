


    let overlay = document.getElementById('overlay');
    let closeBtn = document.getElementById('closeBtn');
    let modal = document.getElementById('modal');
    let openModalBtn = document.getElementById('subscribeBtn');
    let modalInput = document.getElementById('modalInput');
    let modalBtn = document.getElementById('modalBtn');
    let modalForm = document.getElementById('modalForm')
    let modalTextblock = document.getElementById('modalTextblock');
    let subscribeBlock = document.getElementById('subscribeBlock');
    let envelope = document.getElementById('envelope');


    const searchButton = document.querySelector('.search');
    const header = document.querySelector('.header');
    const logo = document.getElementById('logo');
    const headerLink = document.getElementById('headerLink');
    const loginBtn = document.getElementById('loginBtn');
    const headerInput = document.getElementById('headerInput');
    const filter = document.getElementById('filter');
    const searchBtn = document.getElementById('searchBtn');
    
    openModalBtn.addEventListener('click', function() {
      overlay.style.display = 'block';
      modal.style.display = 'block';
      modal.style.animation = 'scaler .3s ease forwards';
      closeBtn.style.display = 'block';
    
    
    });
    
    closeBtn.addEventListener('click', function() {
      overlay.style.display = 'none';
      modal.style.animation = 'scalerOut .3s ease';
      closeBtn.style.display = 'none';
      setTimeout(() => {
        modal.style.display = 'none'
      }, 300);
    })
    
  
    
    modalInput.addEventListener('input', function () {
        modalBtn.disabled = modalInput.value === '';
    });
    
    modalForm.addEventListener('submit', function() {
      modalForm.style.display = 'none'
      modalTextblock.style.display = 'block'
      closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
        modal.style.animation = 'scalerOut .3s ease';
      })
    })
    

    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
      
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove("active");
        }
        evt.currentTarget.classList.add("active");
      }
    

    /* Search */
const $searchElems = document.querySelectorAll(".search");
$searchElems.forEach(($search) => {
  const $toggle = $search.querySelector(".search__toggle");
  $toggle?.addEventListener("click", () => {
    $search.classList.toggle("search--active");
  });

  const $close = $search.querySelector(".search__btn--close");
  $close?.addEventListener("click", () => {
    $search.classList.remove("search--active");
  });
});