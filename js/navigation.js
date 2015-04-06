 $(function() {
     var nav = $(".workNav");
     $('#workDetailContainer').scroll(function() {    
         var scroll = $(this).scrollTop();
    
         if (scroll >= 200) {
             nav.addClass("scrollStyle");
         } else {
             nav.removeClass("scrollStyle");
         }
     });
 });
