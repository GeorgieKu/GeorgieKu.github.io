


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
    

      function handleSearchClick() {
        if (window.matchMedia("(max-width: 992px)").matches) {
            closeSearch.style.display = 'flex';
            logo.style.display = 'none';
            headerLink.style.display = 'none';
            loginBtn.style.display = 'none';
            headerInput.style.display = 'block';
            headerInput.style.maxWidth = 'unset';
            searchBtn.style.borderRight = 'unset';
            filter.style.display = 'block';
        }
    }
    
    // Function to handle the close search button click
    function handleCloseSearchClick() {
        if (window.matchMedia("(max-width: 992px)").matches) {
            closeSearch.style.display = 'none';
            logo.style.display = 'block';
            headerLink.style.display = 'flex';
            loginBtn.style.display = 'flex';
            headerInput.style.display = 'none';
            headerInput.style.maxWidth = '';
            searchBtn.style.borderRight = '';
            filter.style.display = 'none';
        }
    }
    
    // Add event listeners
    searchButton.addEventListener('click', handleSearchClick);
    closeSearch.addEventListener('click', handleCloseSearchClick);
