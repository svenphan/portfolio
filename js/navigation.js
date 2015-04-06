$(function() {
    var nav = $(".workNav");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            nav.addClass("scrollStyle");
        } else {
            nav.removeClass("scrollStyle");
        }
    });
    console.log($(document).scrollTop());
});

