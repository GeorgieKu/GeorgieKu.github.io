(function () {
  var root = document.querySelector(".case-gallery[data-folder]");
  if (!root || typeof Swiper === "undefined") {
    return;
  }

  var base = root.getAttribute("data-base") || "";
  var folder = root.getAttribute("data-folder");
  var manifestUrl = base + "img/" + folder + "/gallery.json";

  fetch(manifestUrl)
    .then(function (res) {
      if (!res.ok) {
        throw new Error("gallery.json");
      }
      return res.json();
    })
    .then(function (items) {
      if (!items.length) {
        return;
      }

      var mainWrapper = root.querySelector(".case-gallery__main-wrapper");
      var thumbsWrapper = root.querySelector(".case-gallery__thumbs-wrapper");
      var imgBase = base + "img/" + folder + "/";

      items.forEach(function (item) {
        var mainSlide = document.createElement("div");
        mainSlide.className = "swiper-slide";
        mainSlide.innerHTML =
          '<figure class="case-gallery__figure">' +
          '<img src="' +
          imgBase +
          item.file +
          '" alt="' +
          item.alt +
          '" loading="lazy" decoding="async" />' +
          "</figure>";
        mainWrapper.appendChild(mainSlide);

        var thumbSlide = document.createElement("div");
        thumbSlide.className = "swiper-slide";
        thumbSlide.innerHTML =
          '<img src="' +
          imgBase +
          item.file +
          '" alt="" loading="lazy" decoding="async" />';
        thumbsWrapper.appendChild(thumbSlide);
      });

      var thumbs = new Swiper(root.querySelector(".case-gallery__thumbs"), {
        spaceBetween: 10,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
      });

      new Swiper(root.querySelector(".case-gallery__main"), {
        spaceBetween: 16,
        loop: items.length > 1,
        pagination: {
          el: root.querySelector(".case-gallery__pagination"),
          clickable: true,
        },
        navigation: {
          nextEl: root.querySelector(".case-gallery__btn--next"),
          prevEl: root.querySelector(".case-gallery__btn--prev"),
        },
        thumbs: {
          swiper: thumbs,
        },
        keyboard: {
          enabled: true,
        },
      });
    })
    .catch(function () {
      root.closest(".case-gallery-section").style.display = "none";
    });
})();
