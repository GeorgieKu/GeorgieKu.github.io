//tabs

function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
  
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
  
    tabLinks = document.getElementsByClassName("tab");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].style.color = "black";
      tabLinks[i].style.fontWeight = "400";
      tabLinks[i].style.fontFamily = "Inter";
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.style.fontWeight = "700";
    evt.currentTarget.style.fontFamily = "Inter-Bold";
  }
  
  document.getElementById("tab1").style.display = "block";

  //modal

  function openModal1() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal1() {
    document.getElementById("myModal").style.display = "none";
  }
  
  window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function openModal2() {
    document.getElementById("myModal2").style.display = "block";
  }
  
  function closeModal2() {
    document.getElementById("myModal2").style.display = "none";
  }
  
  window.onclick = function (event) {
    var modal = document.getElementById("myModal2");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function openModal3() {
    document.getElementById("myModal3").style.display = "block";
  }
  
  function closeModal3() {
    document.getElementById("myModal3").style.display = "none";
  }
  
  window.onclick = function (event) {
    var modal = document.getElementById("myModal3");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };