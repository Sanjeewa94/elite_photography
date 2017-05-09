$(".close_btn").hide();

$(document).ready(function(){
    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});

$(document).ready(function(){
	$('#demo1').skdslider({delay:5000, animationSpeed: 2000,showNextPrev:true,showPlayButton:false,autoSlide:true,animationType:'fading',stopSlidingAfter:false});
	
	$('#responsive').change(function(){
	  $('#responsive_wrapper').width(jQuery(this).val());
	  $(window).trigger('resize');
	});
});