$(document).ready(function(){

//Default Hide
$('.workContainerJordan,.workContainerJawbone,.workContainerDutchDesign,.workDetailContainer,#glennthepug').hide();
//$('.workContainerJordan,.workContainerJawbone,.workContainerDutchDesign,#glennthepug').hide();

//Creating a Button hover for each work element
//Jordan Hover Buton
$(".Jordan").on({
    mouseenter: function () {
        $('.workContainerJordan').fadeIn("slow");
        $('.Jawbone,.DutchDesign').addClass('fade');
    	$('.svenType,.workContainerJawbone,.workContainerDutchDesign').hide();
    	$('#rightLine,#leftLine').addClass('animate');

    },
    mouseleave: function () {
    	$('.Jawbone,.DutchDesign').removeClass('fade');
        $('.workContainerJordan').hide();
        $('.svenType').fadeIn("slow");
        
    },
    click: function (){
         $(this).off('mouseleave');
         $('.workDetailContainer').fadeIn("slow");
         $('.workContainerJordan,.workContainerJawbone,.workContainerDutchDesign,.svenType').hide();
    }
});


//Jawbone Button
$(".Jawbone").on({
    mouseenter: function () {
        $('.workContainerJawbone').fadeIn("slow");
        $('.Jordan,.DutchDesign').addClass('fade');
    	$('.svenType,.workContainerDutchDesign,.workContainerJordan').hide();
    	$('#rightLine,#leftLine').addClass('animate');
    },
    mouseleave: function () {
        $('.Jordan,.DutchDesign').removeClass('fade');
        $('.workContainerJawbone').hide();
        $('.svenType').fadeIn("slow");
        
    }
    
});

//DutchDesign Button
$(".DutchDesign").on({
    mouseenter: function () {
        $('.workContainerDutchDesign').fadeIn("slow");
        $('.Jordan,.Jawbone').addClass('fade');
    	$('.svenType,.workContainerJawbone,.workContainerJordan').hide();
        $('#rightLine,#leftLine').addClass('animate');
    },
    mouseleave: function () {
        $('.Jordan,.Jawbone').removeClass('fade');
        $('.workContainerDutchDesign').hide();
        $('.svenType').fadeIn("slow");
    }
});

$(".closeBtn").on('click',function(){
    $('.workDetailContainer').hide();
    $('.svenType').show();
    $('.Jawbone,.DutchDesign,.Jordan').removeClass('fade');
});


// $("#pugButton").on('click',function(){
//     $('#glennthepug').show();
//     $('.svenType').hide();
// })
});
