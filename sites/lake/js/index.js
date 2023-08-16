new AirDatepicker('#datapicker', {
    range: true,
    multipleDatesSeparator: ' - '
});

const swiper = new Swiper('.hotel__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 20,
    slidesPerView: 'auto',

  });

  const swiper2 = new Swiper('.entertainment__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 30,
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        spaceBetween: 12,
      },
      720: {
        spaceBetween: 30,
      }
    }

  });

  const swiper4 = new Swiper('.rooms__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 0,
    
  

  });

  const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const closeButton = document.querySelector("#close-btn");
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");

  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

closeButton.addEventListener('click', closeMenu);

function closeMenu() {
  popup.classList.remove('open');
  hamb.classList.remove('active');

}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}