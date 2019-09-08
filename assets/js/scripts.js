(function ($) {
	"use strict";

	$(document).ready(function(){


		$('#slider-wrapper').slick({
			fade: true,
			infinite: true,
			dots: true,
			arrows: false,
			autoplay: true,
  			autoplaySpeed: 2000,
		});



	});

	$("select#country").change(function(){
		var selectedCountry = $("select#country option:selected").val();
		$.ajax({
			type: "POST",
			url: "includes/ajax_city_options.php",
			data: { country : selectedCountry } 
		}).done(function(data){
			$("select#state").empty().append(data);
		});
	});

	// $('.featured-video').each(function(index, item){
	// 	console.log(index);
	// 	console.log(item);
	// 	let current = index + 1;

	// 	$('#vidBox-' + current).VideoPopUp({
	// 		backgroundColor: "#17212a",
	// 		opener: "trigger-" + current,
	// 		maxweight: "640",
	// 		idvideo: "video-" + current,
	// 	});

	// });
	// $('#vidBox').VideoPopUp({
	// 	backgroundColor: "#17212a",
	// 	opener: "trigger",
	// 	maxweight: "640",
	// 	idvideo: "demo" 
	// });

	$('.trigger_video').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
				  '</div>',
	
			srcAction: 'iframe_src',
			}
	});


}(jQuery));