// setTimeout(()=>{
//   history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
// }, 5);



$(document).ready(function(){
  $('.menu-btn').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  $('.email-link').click(function(){
    $('.email').toggleClass("active");
    $('.footer .footer-content .email-link i').toggleClass("active");
  });

  // $('.interests .interst-content img').click(function(){
  //   $('.interests .interst-content img').
  // });


  $(window).scroll(function(){
      // sticky navbar on scroll script
      // if(this.scrollY > 350 &&  this.scrollY < 1000){
      //   $('.about .about-content').addClass("sticky");
      // } else {
      //   $('.about .about-content').removeClass("sticky");
      // }
  });



});

function changeImage(n){
  var images = document.getElementsByClassName("image");
  var captions = document.getElementsByClassName("caption");
  if(n == -1){
    var temp = images[images.length-1].src;
    var ctemp = captions[images.length-1].innerHTML;
    // images[2].src = images[1].src;
    // images[1].src = images[0].src;
    // images[0].src = temp;
    var i;
    for(i=images.length-1; i > 0; i--){
      images[i].src = images[i-1].src;
      captions[i].innerHTML = captions[i-1].innerHTML;
    }
    images[0].src = temp;
    captions[0].innerHTML = ctemp;
  } else {
    var temp = images[0].src;
    var ctemp = captions[0].innerHTML;
    // images[2].src = images[1].src;
    // images[1].src = images[0].src;
    // images[0].src = temp;
    var i;
    for(i=0; i < images.length-1; i++){
      images[i].src = images[i+1].src;
      captions[i].innerHTML = captions[i+1].innerHTML;
    }
    images[images.length-1].src = temp;
    captions[images.length-1].innerHTML = ctemp;
  }
}
