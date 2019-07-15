$(document).ready(function(){
    $(document).scroll(function(){
    if ($(document).scrollTop() > 1) {
        $('.my-navbar').removeClass('hide');
        $('.my-number').addClass('hide');
        $('.my-btn').addClass('btn-outline-primary');
        $('.my-btn').removeClass('border-white');
        $('.my-btn').removeClass('text-white');
        $('.my-nav').removeClass('bg-transparent');
        $('.my-nav').addClass('bg-white');
    } else {
        $('.my-number').removeClass('hide');
        $('.my-navbar').addClass('hide');
        $('.my-btn').removeClass('btn-outline-primary');
        $('.my-btn').addClass('border-white');
        $('.my-btn').addClass('text-white');
        $('.my-nav').addClass('bg-transparent');
        $('.my-nav').removeClass('bg-white');
    };
  });
  $('.fullBackground').fullClip({
    images: ['images/house.jpg', 'images/road.jpg', 'images/winter.jpg'],
    transitionTime: 2000,
    wait: 5000
  });
});