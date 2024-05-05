$(document).ready(function () {
});

$(document).ready(function() {
  // header mobile dropdown
  $('.js-header-nav-toggle').click(function(events) {
    $('body').toggleClass('is-menu-show');
  });

  // value from 0 to value
  $('.intro-card__title-count').each(function () {
    var targetValue = $(this).data('value');
    animateNumber(0, targetValue, $(this));
  });

  // slider slick init
  $('.js-intro-slider-init').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    prevArrow: $('.js-intro-slider-control .slider-btn--prev'),
    nextArrow: $('.js-intro-slider-control .slider-btn--next')
  });

  $('.js-projects-slider-init').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    prevArrow: $('.js-projects-slider-control .slider-btn--prev'),
    nextArrow: $('.js-projects-slider-control .slider-btn--next')
  });

  $('.js-license-slider-init').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    prevArrow: $('.js-license-slider-control .slider-btn--prev'),
    nextArrow: $('.js-license-slider-control .slider-btn--next'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.js-news-slider-init').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    prevArrow: $('.js-news-slider-control .slider-btn--prev'),
    nextArrow: $('.js-news-slider-control .slider-btn--next'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.js-partners-slider-init').slick({
    arrows: false,
    dots: false,
    speed: 2400,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    variableWidth: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: false,
    centerMode: true,
    focusOnSelect: true,
  });
});

function animateNumber(currentValue, targetValue, element) {
  if (currentValue < targetValue) {
    element.text(currentValue);
    setTimeout(function () {
      animateNumber(currentValue + 1, targetValue, element);
    }, 34);
  }
}