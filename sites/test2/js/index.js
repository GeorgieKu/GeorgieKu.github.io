function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function fadeInElement(element) {
    element.style.opacity = "1";
  }
  
  var img2 = document.querySelector(".main__img2");
  
  window.addEventListener("scroll", function () {
    if (isElementInViewport(img2)) {
      fadeInElement(img2);
    }
  });