
$('#btn-toggle-menu').on('click', function(){
  $(this).toggleClass('close');
  $('nav').slideToggle();
});

$('.outside-caret').on('click', function(){
  $(this).toggleClass('up');
  $(this).next('ul').slideToggle();
});

var window_width = window.innerWidth;
if(window_width > 1025){
  var nav_caret = document.querySelector('.outside-caret');
  nav_caret.parentNode.removeChild(nav_caret);
}

$('.back-to-top').on('click', function(){
    $("html, body").animate({ scrollTop: 0 }, 100);
    return false;
});

$(window).scroll(function(event){
  if(typeof current !== "undefined"){lastScrollTop = current;} else { lastScrollTop = 0; }
  current = $(this).scrollTop();

  if(current > 100){
    $("header").addClass("fixed");
    $(".back-to-top").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
    $(".back-to-top").removeClass("fixed");
  }

});
