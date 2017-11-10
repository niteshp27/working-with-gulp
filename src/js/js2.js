$(document).ready(function(){

      var navFlyMenu = $(".nav-flyMenu");
      var windowWidth = $(window).width();

     $( window ).resize(function() {
      if(navFlyMenu.hasClass("showMe") && !navFlyMenu.hasClass("alwaysHidden") && !$('.dotsButton:visible').length == 0 && windowWidth <768 ){
           navFlyMenu.removeClass("showMe");
       }
     });

});
