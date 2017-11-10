console.log("j1");

$(document).ready(function(){
      var navFlyMenu = $(".nav-flyMenu");
      $(document).on("click",function(e)
      {
          e.stopPropagation();
          if (!navFlyMenu.is(e.target) && navFlyMenu.has(e.target).length === 0 )
          {
              navFlyMenu.addClass("alwaysHidden");
          }
      });

});

$(document).ready(function(){

      var navFlyMenu = $(".nav-flyMenu");
      var windowWidth = $(window).width();

     $( window ).resize(function() {
      if(navFlyMenu.hasClass("showMe") && !navFlyMenu.hasClass("alwaysHidden") && !$('.dotsButton:visible').length == 0 && windowWidth <768 ){
           navFlyMenu.removeClass("showMe");
       }
     });

});
