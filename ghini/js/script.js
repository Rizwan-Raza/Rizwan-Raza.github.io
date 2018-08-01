$(document).ready(function(){
	$(".arrowdown").click(function() {
    	$('html,body').animate({
        	scrollTop: $(".home-top").offset().top
        }, 'slow');
	});
});