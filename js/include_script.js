include1('jquery.fancybox.css');
include2('jquery.fancybox.pack.js');
include2('finezoom.js');
include3('jquery.singlePageNav.js');

// Ajay Edit Start
//$('.maind li:nth-child(17)').css('display', 'none');
//
$(document).ready(function() {
        x = Math.floor((Math.random() * 9) + 1);
    y = Math.floor((Math.random() * 9) + 1);
	$("#cal_div").html(x+"+"+y+" = ?");
	$("#cal_div_home").html(x+"+"+y+" = ?");
	$("#captcha_check").val(x+y);
	$("#captcha_check_home").val(x+y);
    // $(".maind li:first").before('<li class="nav-item"><a href="arihant-anant.html">Arihant Anant - <span>Taloja</span></a></li>');
    // $("#project_name option:first").after($('<option>').val('Taloja - ARIHANT ANANT').text('Taloja - ARIHANT ANANT'));
    
    // $(".maind li:first").before('<li class="nav-item"><a href="arihant-anaika.html">Arihant Anaika - <span>Taloja</span></a></li>');
    // $("#project_name option:first").after($('<option>').val('Arihant Anaika').text('Taloja - ARIHANT ANAIKA'));
    // $('#project_name').append($('<option>').val('Arihant Anaika').text('Arihant Anaika'));
});


// Ajay Edit End 
function include2(url2){ 
  document.write('<script type="text/javascript" src="fancybox/'+ url2 + '"></script>'); 
  return false ;
}
function include1(url2){ 
  document.write('<link href="fancybox/'+ url2 + '" rel="stylesheet" type="text/css" media="screen">'); 
  return false ;
}
function include3(url3){ 
  document.write('<script type="text/javascript" src="js/'+ url3 + '"></script>'); 
  return false ;
}

$(function(){
	
	var menu = $('.project_navigation'),
		pos = menu.offset();
		
		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('default')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('default').addClass('fixed').fadeIn('fast');
			
					$('.small-logo img').css("display", "block");
					$('.small-logo h3').css("display", "block");
					
				
				});
			} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('fixed').addClass('default').fadeIn('fast');
				
				 $('.small-logo img').css("display", "block");
					$('.small-logo h3').css("display", "block");
									
					
				});
				
				
				 // bind change event to select
      $('#dynamic_select').on('change', function () {
          var url = $(this).val(); // get selected value
          if (url) { // require a URL
              window.location = url; // redirect
          }
          return false;
      });
			}
		});





    $(window).scroll(function () {

        var y = $(this).scrollTop();

        $('.project_navigation li a.link').each(function (event) {
            if (y >= $($(this).attr('href')).offset().top - 163) {
                $('.project_navigation li a.link').not(this).removeClass('select');
                $(this).addClass('select');
            }
        });

    });
	

  


  // Prevent console.log from generating errors in IE for the purposes of the demo
            if ( ! window.console ) console = { log: function(){} };

            // The actual plugin
            $('#nav-mobile').singlePageNav({
                offset: ($('#nav-mobile').outerHeight()+100),
                filter: ':not(.external)',
                updateHash: true,
                beforeStart: function() {
                    console.log('begin scrolling');
                },
                onComplete: function() {
                    console.log('done scrolling');
                }
            });
  
  
  

  $("#nav-trigger span, #nav-mobile li a").click(function(){
    if ($("nav#nav-mobile .ent").hasClass("expanded")) {
        $("nav#nav-mobile .ent.expanded").removeClass("expanded").slideUp(250);            
    } else {
        $("nav#nav-mobile .ent").addClass("expanded").slideDown(250);            
    }
  });



	});
	
	

$(document).ready(function () {
	
	

	
	
            $('#Openregister').click(function () {
                $('#Openregister').animate({ 'right': '0px' }, 500).hide("slide", {
                    direction: "right"
                }, 500);
                $('.regform').animate({ 'right': '0px' }, 800).show("slide", {
                    direction: "right"
                }, 800);
            });
            $('#Closeregister').click(function () {
                $('.regform').animate({ 'right': '0px' }, 500).hide("slide", {
                    direction: "right"
                }, 800);
                $('#Openregister').animate({ 'right': '0px' }, 500).show("slide", {
                    direction: "right"
                }, 500);
            });

            $('.openregisterMob').click(function () {
                $('.regform').animate({ 'right': '0px' }, 500).show("slide", {
                    direction: "right"
                }, 800);
            });
            $('#Closeregister').click(function () {
                $('.regform').animate({ 'right': '0px' }, 500).hide("slide", {
                    direction: "right"
                }, 800);

            });
 
        });
		
		
		
		
		
		
		


$(document).ready(function($) {
	$(".fancybox-img").fancybox({
	loop: false,
			autoPlay   : false,
	});

$(".zoomimage").fancybox({
      mouseWheel : false,
      afterShow:function(){
        console.log( $('.fancybox-image').height() );
        $('.fancybox-image').finezoom({
          max_zoom:6
        });
      }
  });	
	
 
 $(".price-schedule").fancybox({
            maxWidth    : 600,
            maxHeight   : 580,
            fitToView   : false,
            width       : '90%',
            height      : '90%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none',
	        	type: "iframe",
        });
 
 
$(".refer").fancybox({
            maxWidth    : 600,
            maxHeight   : 450,
            fitToView   : false,
            width       : '90%',
            height      : '90%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none',
	        	type: "iframe",
        }); 
 

$(".enquiry").fancybox({
            maxWidth    : 500,
            maxHeight   : 350,
            fitToView   : false,
            width       : '90%',
            height      : '90%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none',
	        	type: "iframe",
        });	
		
		$(".mob-enquiry").fancybox({
            maxWidth    : 500,
            maxHeight   : 450,
            fitToView   : false,
            width       : '90%',
            height      : '90%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none',
	        	type: "iframe",
        });	
		
		$(".bro-enquiry").fancybox({
            maxWidth    : 500,
            maxHeight   : 320,
            fitToView   : false,
            width       : '90%',
            height      : '90%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none',
	        	type: "iframe",
        });	
			
	
	$(".disclaimer").fancybox({
            maxWidth    : 600,
            maxHeight   : 340,
            fitToView   : false,
            width       : '70%',
            height      : '70%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none',
		        type: "iframe",
        });
		
		
               		
		
		
		$('.navi-getion nav').meanmenu();
$(".navi-getion nav ul li").hover(function(){
			 menu=$(this);menu.children("a").addClass("highlight");		
			 menu.children("ul.maind").css('display','block');
			 menu.children("ul.maind").stop(false,true).fadeIn("fast");},
			function(){
			 menu=$(this);
			 menu.children("a").removeClass("highlight");
			 menu.children("ul.maind").fadeOut("fast");
	 		});
			
			








	
	$('.bxslider').bxSlider();
	$('.bxslider-inner').bxSlider({
		pager: false,
		controls: true,
		mode:"fade",
		auto: false,
		infiniteLoop: false,
hideControlOnEnd: true,
		
  });
  
  
  $('.slider1').bxSlider({
minSlides: 1,
maxSlides: 2,
moveSlides: 1,
auto:false,  
pager: false,
controls: true,
infiniteLoop: false,
hideControlOnEnd: true,
slideMargin: 0
});
  
  $('.healthcare-slider ul').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    controls: true,
    pager: false,
    slideWidth: 550,
    useCSS: false,
	infiniteLoop: false,
hideControlOnEnd: true,
    slideMargin: 40
  });
if ($(window).width() < 960) {
   $('.bxflcarousel').bxSlider({
  minSlides: 1,
  maxSlides: 1,
  controls: true,
  pager: false,
  slideWidth: 550,
  useCSS: false,
  infiniteLoop: false,
hideControlOnEnd: true,
  slideMargin: 40
});
	$('.bxcarousel').bxSlider({
  minSlides: 1,
  maxSlides: 1,
  controls: true,
  pager: false,
  slideWidth: 850,
  infiniteLoop: false,
hideControlOnEnd: true,
  slideMargin: 10
});
}
else {
   $('.bxflcarousel').bxSlider({
  minSlides: 4,
  maxSlides: 4, infiniteLoop: false,
   hideControlOnEnd:true,
   startSlide: 0,
  controls: true,
  pager: false,   moveSlides: 1,
        startSlide: 1,
  slideWidth: 550, easing: "easeInBounce",
        pager: !1,
  useCSS: false, 
  slideMargin: 40
});
	$('.bxcarousel').bxSlider({
  minSlides: 4,
  maxSlides: 4,  infiniteLoop: false,
   hideControlOnEnd: true,
   startSlide: 0,
  pager: true, moveSlides: 1,
        startSlide: 0, easing: "easeInBounce",
        pager: !1, 
   
  controls: true,
  slideWidth: 850,
  slideMargin: 10
});





$(".bx-controls-direction").on( "click", ".bx-prev.disabled", function() {
    var slideQty = slider.getSlideCount();
    slider.goToSlide(slideQty-1);
});

$(".bx-controls-direction").on( "click", ".bx-next.disabled", function() {
    slider.goToSlide(0);
});
}	



		

$(document).ready(function($) { 



if (($(window).width() <= 1366) && $(window).width() >= 1000) {
                    $('.pro-feat-slider').bxSlider({
                        minSlides: 6,
                        maxSlides: 6,
                        controls: true,
                        pager: false,
                        slideWidth: 260,
                        useCSS: false,
                        slideMargin: 20,
						touchEnabled: false,
						infiniteLoop: false,
						hideControlOnEnd: true,
                        auto:false
                    });

                }
                else if ($(window).width() < 900) {
                    $('.pro-feat-slider').bxSlider({
                        minSlides: 1,
                        maxSlides: 1,
                        controls: true,
                        pager: false,
                        slideWidth: 260,
                        useCSS: false,
                        slideMargin: 20,
						touchEnabled: false,
						infiniteLoop: false,
						hideControlOnEnd: true,
                        auto:false
                    });

                }
                else {
                    $('.pro-feat-slider').bxSlider({
                        minSlides: 7,
                        maxSlides: 6,
                        controls:  true,
                        pager: false,
                        slideWidth: 260,
                        useCSS: false,
                        slideMargin: 50,
						touchEnabled: false,
						infiniteLoop: false,
						hideControlOnEnd: true,
                        auto:false
                    });

                }
				
if (($(window).width() <= 1366) && $(window).width() >= 1000) {
                    $('.flor-plan-slider').bxSlider({
                        minSlides: 4,
                        maxSlides: 4,
                        controls: true,
                        pager: false,
                        slideWidth: 381,
                        useCSS: false,
                        slideMargin: 20,
						touchEnabled: false,
						infiniteLoop: false,
						hideControlOnEnd: true,
                    });

                }
                else if ($(window).width() < 1000) {
                    $('.flor-plan-slider').bxSlider({
                        minSlides: 1,
                        maxSlides: 1,
                        controls: true,
                        pager: false,
                        slideWidth: 381,
                        useCSS: false,
                        slideMargin: 20,
						touchEnabled: false,
						infiniteLoop: false,
						hideControlOnEnd: true,
                    });

                }
                else {
                    $('.flor-plan-slider').bxSlider({
                        minSlides: 4,
                        maxSlides: 4,
                        controls:  true,
                        pager: false,
                        slideWidth: 381,
                        useCSS: false,
                        slideMargin: 50,
						touchEnabled: false,
						infiniteLoop: false,
						hideControlOnEnd: true
                    });

                }


if (($(window).width() <= 1000) && $(window).width() >= 700) {
                    $('.ongo-slider').bxSlider({
                        minSlides: 2,
                        maxSlides: 2,
                        controls: true,
                        pager: false,
                        slideWidth: 381,
                        useCSS: false,
                        slideMargin: 20,
						touchEnabled: false,
						infiniteLoop: false,
						hideControlOnEnd: true,
                    });

                }
                else if ($(window).width() < 699) {
                    $('.ongo-slider').bxSlider({
                        minSlides: 1,
                        maxSlides: 1,
                        controls: true,
                        pager: false,
                        slideWidth: 381,
                        useCSS: false,
                        slideMargin: 20,
						touchEnabled: false,
						infiniteLoop: false,
						hideControlOnEnd: true,
                    });

                }
                else {
                    $('.ongo-slider').bxSlider({
                        minSlides: 4,
                        maxSlides: 4,
                        controls:  true,
                        pager: false,
                        slideWidth: 381,
                        useCSS: false,
                        slideMargin: 50,
						touchEnabled: false,
						infiniteLoop: false,
						hideControlOnEnd: true
                    });

                }

});

 
  



		
		
		
		
		
	
		});

