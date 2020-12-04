
$(document).ready(function() {


	new WOW().init(); 

	$(".navbar li a").mPageScroll2id();

	$(".main-footer li a").mPageScroll2id();



// Owl Carousel
$('.carousel-main').owlCarousel({
	items: 3,
	loop: true,
	// autoplay: true,
	// autoplayTimeout: 5000,
	margin: 50,
	nav: true,
	dots: true,
	navText: [' <span class="fas fa-arrow-alt-circle-left fa-2x"></span>',' <span class="fas fa-arrow-alt-circle-right fa-2x"></span>'],
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:true,
			dots: true,
		},
		600:{
			items:1,
			nav:true,
			dots: true,
		},
		720:{
			items:2,
			nav:true,
			loop:true,
			dots: true,
		},
		992:{
			items:2,
			nav:true,
			loop:true,
			dots: true,
		},
		1000:{
			items:2,
			nav:true,
			loop:true,
			dots: true,
		},
		1200:{
			items:3,
			nav:true,
			loop:true,
			dots: true,
		}
	}
});

});


// $(window).on('load', function() {
//   $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
// });