$(document).ready(function () {
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
});