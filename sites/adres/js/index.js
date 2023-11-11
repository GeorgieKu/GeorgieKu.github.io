document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})

const swiper = new Swiper('.hero__swiper', {
    // Optional parameters
    direction: 'horizontal',
  
    // If we need pagination
    pagination: {
      el: '.hero-pagination',
      type: "fraction",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.hero-button-next',
      prevEl: '.hero-button-prev',
    },

  });

  const swiper2 = new Swiper('.live__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 0,
  
    // If we need pagination
    pagination: {
      el: '.live-pagination',
      type: "fraction",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.live-button-next',
      prevEl: '.live-button-prev',
    },

  });

  const swiper3 = new Swiper('.tab-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 0,
  
    // If we need pagination
    pagination: {
      el: '.tab-pagination',
      type: "fraction",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.tab-button-next',
      prevEl: '.tab-button-prev',
    },

  });

  function openTab(tabName) {
    // Скрыть все табы
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
      tabs[i].classList.remove("active");
    }
    
    // Показать выбранный таб
    var selectedTab = document.getElementById(tabName + "-tab");
    selectedTab.style.display = "block";
    selectedTab.classList.add("active");
  }

  const slider1 = document.getElementById("flat-slider");
if (slider1) {
  noUiSlider.create(slider1, {
    start: [19, 40],
    connect: true,
    step: 1,
    range: {
      min: 19,
      max: 70
    }
  });

  const inputs1 = [document.getElementById("input-0"), document.getElementById("input-1")];

  slider1.noUiSlider.on("update", function(values, handle) {
    inputs1[handle].value = Math.round(values[handle]);
  });

  const setSliderValue1 = (index, value) => {
    let sliderValues = [null, null];
    sliderValues[index] = value;
    slider1.noUiSlider.set(sliderValues);
  };

  inputs1.forEach(function(input, index) {
    input.addEventListener("change", function(event) {
      setSliderValue1(index, event.currentTarget.value);
    });
  });
}

const slider2 = document.getElementById("flat-slider-2");
if (slider2) {
  noUiSlider.create(slider2, {
    start: [2, 8],
    connect: true,
    step: 1,
    range: {
      min: 2,
      max: 8
    }
  });

  const inputs2 = [document.getElementById("input-2"), document.getElementById("input-3")];

  slider2.noUiSlider.on("update", function(values, handle) {
    inputs2[handle].value = Math.round(values[handle]);
  });

  const setSliderValue2 = (index, value) => {
    let sliderValues = [null, null];
    sliderValues[index] = value;
    slider2.noUiSlider.set(sliderValues);
  };

  inputs2.forEach(function(input, index) {
    input.addEventListener("change", function(event) {
      setSliderValue2(index, event.currentTarget.value);
    });
  });
}

const slider3 = document.getElementById("flat-slider-3");
if (slider3) {
  noUiSlider.create(slider3, {
    start: [2, 15],
    connect: true,
    step: 1,
    range: {
      min: 2,
      max: 25
    }
  });

  const inputs3 = [document.getElementById("input-4"), document.getElementById("input-5")];

  slider3.noUiSlider.on("update", function(values, handle) {
    inputs3[handle].value = Math.round(values[handle]);
  });

  const setSliderValue3 = (index, value) => {
    let sliderValues = [null, null];
    sliderValues[index] = value;
    slider3.noUiSlider.set(sliderValues);
  };

  inputs3.forEach(function(input, index) {
    input.addEventListener("change", function(event) {
      setSliderValue3(index, event.currentTarget.value);
    });
  });
}

var button = document.getElementById("footer__arrow");

button.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});