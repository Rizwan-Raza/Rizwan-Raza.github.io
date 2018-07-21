(function ($) {
    "use strict";

    /*	
	Table OF Contents
	==========================
	1-Navigation
	2-CarouselFredsel
	3-Tooltip
	4-Flex slider
	5-Pop-up
	6-Accordian
	7-Tab
	8-Contact
	9-Newsletter
	*/



    /*===================
	 1-Navigation
	 ===================*/
	 
	
	var $nav_link, last_id, menu_items = $( '#navList' ).find( 'a[href^="#"]' ), leftPos, newWidth, isNavClicked = false,
    $mainNav_animate = $("#menus");
			 

    $mainNav_animate.append("<li id='XV-lamp'></li>");

    var $animation_tool = $("#XV-lamp");

    $animation_tool
        .width($(".current").width())
        .css("left", $(".current").position().left)
        .data("origLeft", $(".current").position().left)
        .data("origWidth", $animation_tool.width());
	 
	 
	 function xv_lava($el) {
        leftPos = $el.position().left;
        newWidth = $el.width();
        $animation_tool.stop().animate({
            left: leftPos,
            width: newWidth,
        });
	}
	 
	
    $(window).scroll(function () {
        navAction();
    });
    navAction();

    function navAction() {
        if($(".navbar").offset().top > 75) {
            $(".navbar-inner").addClass("sticky");
			$(".scrolltop").show();
			
        } else {
            $(".navbar-inner").removeClass("sticky");
			$(".scrolltop").hide();
        }
    }
	$(window).on("resize", function () {
	 	xv_lava($(".navbar-inner li.current"), 400);
    }).resize();
    /*ScrollTOp*/
	
	
	$('.scrolltop').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        },400);
        return false;
    });
	
    $('#menus a.scrol-it').click(function () {
		isNavClicked = true;
		$('#menus li').removeClass('current');
		$(this).parent('.parrent').addClass('current');
		xv_lava($(this).parent('.parrent'));
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 85
        },400,function() {
			isNavClicked = false;
		});
        return false;
    });
	
	$('#home').bind('inview',function (event, visible){
		
	if (visible === true){
		
		 if(!isNavClicked){
			$('#menus li').removeClass("current");
			$('#menus li.parrent').eq(0).addClass("current");
			$nav_link=$('#menus li.current');
			xv_lava($nav_link);
		 }
	
	}});
	
	$('#services2').bind('inview',function (event, visible){
	if (visible === true){
		 if(!isNavClicked){
			$('#menus li').removeClass("current");
			$('#menus li.parrent').eq(1).addClass("current");
			$nav_link=$('#menus li.current');
			xv_lava($nav_link);
		 }
	}});
	
	$('#about').bind('inview',function (event, visible){
	if (visible === true){
		 if(!isNavClicked){
			$('#menus li').removeClass("current");
			$('#menus li.parrent').eq(2).addClass("current");
			$nav_link=$('#menus li.current');
			xv_lava($nav_link);
		 }
	}});

	$('#portfolio').bind('inview',function (event, visible){
	if (visible === true){
		 if(!isNavClicked){
			$('#menus li').removeClass("current");
			$('#menus li.parrent').eq(3).addClass("current");
			$nav_link=$('#menus li.current');
			xv_lava($nav_link);
		 }
	}});
	
	$('#blog-wrapper').bind('inview',function (event, visible){
	if (visible === true){
		 if(!isNavClicked){
			$('#menus li').removeClass("current");
			$('#menus li.parrent').eq(4).addClass("current");
			$nav_link=$('#menus li.current');
			xv_lava($nav_link);
		 }
	}});
	
	$('#contact').bind('inview',function (event, visible){
	if (visible === true){
		 if(!isNavClicked){
			$('#menus li').removeClass("current");
			$('#menus li.parrent').eq(5).addClass("current");
			$nav_link=$('#menus li.current');
			xv_lava($nav_link);
		 }
	}});
	
	
	$('ul.nav li.dropdown a').click(
		function(){
			
			var state = $(this).data('toggleState');
			if(state) {
			   $(this).parent('ul.nav li.dropdown').children('ul.dropdown-menu').slideUp();
			} else {
				 $(this).parent('ul.nav li.dropdown').children('ul.dropdown-menu').slideDown();
			}
			$(this).data('toggleState', !state);
	});
	
	$('.btn-navbar').click(
		function(){
			var state = $(this).data('toggleState');
			if(state) {
			   $('.nav-collapse.collapse').css('height','0px');
			} else {
				 $('.nav-collapse.collapse').css('height','auto');
			}
			$(this).data('toggleState', !state);
	});
	
	
    /*======================
	 3-Tooltip
	 =======================*/
    if($("[data-rel=tooltip]").length) {
        $("[data-rel=tooltip]").tooltip();
    }



    /*======================
	 4-Flex slider
	 =======================*/

    $('#testimonals-slide,#project-slider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        pauseOnHover: true,
        slideshowSpeed: 4000,
        direction: "horizontal" //Direction of slides
    });
	
	 
	 $('#headerCarousel').carousel({
        interval: 3000
    });
	
	


    /*====================== 
	 5-Pop-up
	 ======================*/
    $('.popcarousel').carousel({
        interval: 6000
    });

    /*Magnific-popup*/
    $('.folio').each(function(){
    	$(this).magnificPopup({
	        items: [{
	            src: '#item' + $(this).attr("item"),
	            type: 'inline'
	        }],
	        gallery: {
	            enabled: true
	        },
	        mainClass: 'mfp-fade',
	        removalDelay: 160,
	        type: 'image'
	    });
    });
	$('.closePopup').click(function() {
    	$.magnificPopup.instance.close();
	});
	$.fn.getMaginificPopup = function (itemNum, direction) {
		var max = 8;
		var min = 1;
		switch (direction) {
		case 'next':
			if(itemNum != max){
				itemNum ++;
			}else{
				itemNum = min;
			}
			break;
		case 'previous':
			if(itemNum != min){
				itemNum --;
			}else{
				itemNum = max;
			}
			break;	

		default:
			break;
		}
    	$.magnificPopup.instance.close();
    	setTimeout(function(){$('[item=' + itemNum + ']').click();},200);
	};


    /*================
	 6-Accordian
	 ===============*/
    $(".collapse").collapse({
        parent: "#accordion2"
    });

    $('.collapse').on('show hide', function (e) {
        $(e.target).siblings('.accordion-heading').find('.btn-accordion span').toggleClass('icon-plus icon-minus', 200);
    });

    /*================
	 7-Tab
	 ===============*/
    $('#tabs1 a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })

  

    /*==================
	 9-Contact
	 ======================*/
	 
	 
    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    $("#contactForm #submit").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

        if(name == '' || !IsEmail(email) || subject == '' || message == '') {
            $('#contact .alert-error').slideDown('slow');
        } else {
            $.ajax({
                type: "POST",
                url: "php/contact.php",
                data: dataString,
                success: function () {
                    $('#contact .alert-error').hide();
                    $('#contactForm').slideToggle('slow');
                    $('#contact .alert-success').slideToggle('slow');
                }
            });
        }
        return false;
    });

    /*==================
	 10-Newsletter
	 ======================*/
    $("#newsletter-form #nl-go").click(function () {
        var name = $("#nl-name").val();
        var email = $("#nl-email").val();
        var dataString = 'name=' + name + '&email=' + email;

        if(name == '' || !IsEmail(email)) {
            $('#newsletter .alert-error').slideDown('slow');
        } else {
            $.ajax({
                type: "POST",
                url: "php/newsletter.php",
                data: dataString,
                success: function () {
                    $('#newsletter .alert-error').hide();
                    $('#newsletter-form').slideToggle('slow');
                    $('#newsletter .alert-success').slideToggle('slow');
                }
            });
        }
        return false;
    });


    //IE8-9 placeholder fix
    $('input[placeholder]').each(function () {
        var input = $(this);
        $(input).val(input.attr('placeholder'));

        $(input).focus(function () {
            if(input.val() == input.attr('placeholder')) {
                input.val('');
            }
        });

        $(input).blur(function () {
            if(input.val() == '' || input.val() == input.attr('placeholder')) {
                input.val(input.attr('placeholder'));
            }
        });
    });

	
	 $("body").niceScroll({cursorminheight:60,touchbehavior:false,cursorcolor:"#ee3729",cursorborder :"0",cursorwidth:6,background:"#333",autohidemode:false});
	 

})(jQuery);