$(document).ready(function () {
	if ($(document).scrollTop() > 1) {
		$('.my-navbar').removeClass('hide');
		$('.my-number').addClass('hide');
		$('.my-btn').addClass('btn-outline-primary');
		$('.my-btn').removeClass('border-white');
		$('.my-btn').removeClass('text-white');
		$('.my-nav').removeClass('bg-transparent');
		$('.my-nav').addClass('bg-white');
		$('.my-nav').removeClass('navbar-in-top');
	} else {
		$('.my-number').removeClass('hide');
		$('.my-navbar').addClass('hide');
		$('.my-btn').removeClass('btn-outline-primary');
		$('.my-btn').addClass('border-white');
		$('.my-btn').addClass('text-white');
		$('.my-nav').addClass('bg-transparent');
		$('.my-nav').removeClass('bg-white');
		$('.my-nav').addClass('navbar-in-top');
	}
	$(document).scroll(function () {
		if ($(document).scrollTop() > 1) {
			$('.my-navbar').removeClass('hide');
			$('.my-number').addClass('hide');
			$('.my-btn').addClass('btn-outline-primary');
			$('.my-btn').removeClass('border-white');
			$('.my-btn').removeClass('text-white');
			$('.my-nav').removeClass('bg-transparent');
			$('.my-nav').addClass('bg-white');
			$('.my-nav').removeClass('navbar-in-top');
		} else {
			$('.my-number').removeClass('hide');
			$('.my-navbar').addClass('hide');
			$('.my-btn').removeClass('btn-outline-primary');
			$('.my-btn').addClass('border-white');
			$('.my-btn').addClass('text-white');
			$('.my-nav').addClass('bg-transparent');
			$('.my-nav').removeClass('bg-white');
			$('.my-nav').addClass('navbar-in-top');
		}
	});

	$('.fullBackground').fullClip({
		images: ['images/slider-01.png', 'images/slider-02.png', 'images/slider-03.png', 'images/slider-04.png', 'images/slider-05.png', 'images/slider-06.png', 'images/slider-07.png', 'images/slider-08.png'],
		transitionTime: 1000,
		wait: 5000
	});

	// jQuery('img.svg').each(function(){
	// 	var $img = jQuery(this);
	// 	var imgID = $img.attr('id');
	// 	var imgClass = $img.attr('class');
	// 	var imgURL = $img.attr('src');
	//
	// 	jQuery.get(imgURL, function(data) {
	// 		// Get the SVG tag, ignore the rest
	// 		var $svg = jQuery(data).find('svg');
	//
	// 		// Add replaced image's ID to the new SVG
	// 		if(typeof imgID !== 'undefined') {
	// 			$svg = $svg.attr('id', imgID);
	// 		}
	// 		// Add replaced image's classes to the new SVG
	// 		if(typeof imgClass !== 'undefined') {
	// 			$svg = $svg.attr('class', imgClass+' replaced-svg');
	// 		}
	//
	// 		// Remove any invalid XML tags as per http://validator.w3.org
	// 		$svg = $svg.removeAttr('xmlns:a');
	//
	// 		// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
	// 		if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
	// 			$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
	// 		}
	//
	// 		// Replace image with new SVG
	// 		$img.replaceWith($svg);
	//
	// 	}, 'xml');
	// });
});