$(document).ready(function(){
    $('.menu-btn').click(function(){
      $('.side-bar').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
      // $('.projects .max-width .container').toggleClass("active");
    });

    $('.sidemenu').click(function(){
      $('.side-bar').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
      // $('.projects .max-width .container').toggleClass("active");
    });

    $(window).scroll(function(){
      if(this.scrollY > 100){
        $('.nav-bar').addClass("active");
      } else {
        $('.nav-bar').removeClass("active");
      }
  });

  
  });