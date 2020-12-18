
$(document).ready(function() {


// Start Page Modal
	// $(document).ready(function () {
	// 	$('#myModal').modal('show');
	// });

	new WOW().init(); 

	// $(".navbar li a").mPageScroll2id();

	// $(".main-footer li a").mPageScroll2id();



// Owl Carousel
$('.carousel-main').owlCarousel({
	items: 3,
	loop: true,
	margin: 50,
	nav: true,
	navText: ['<span class="fas fa-arrow-alt-circle-left fa-2x"></span>','<span class="fas fa-arrow-alt-circle-right fa-2x"></span>'],
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
		},
		600:{
			items:1,
		},
		720:{
			items:2,
		},
		992:{
			items:2,
		},
		1000:{
			items:2,
		},
		1200:{
			items:3,
		}
	}
});


$(".fancybox").fancybox({
	loop: true,
});


});


// $(document).on("scroll", window, function () {
// 	if ($(window).scrollTop()>180) 
// 	{
// 		$(".nav-booking").show();
// 	}
// 	else
// 	{
// 		$(".nav-booking").hide();
// 	}
// });


// $(window).on('load', function() {
//   $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
// });