function scrollNav() {
    $('.header_item a').click(function(){
      $(".active").removeClass("active");     
      $(this).addClass("active");
      
      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 160
      }, 100);
      return false;
    });
  }
  scrollNav();

