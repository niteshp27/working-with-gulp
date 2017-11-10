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
