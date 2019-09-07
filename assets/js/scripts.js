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

	$('#vidBox').VideoPopUp({
		backgroundColor: "#17212a",
		opener: "trigger",
		maxweight: "640",
		idvideo: "demo" 
	});


}(jQuery));