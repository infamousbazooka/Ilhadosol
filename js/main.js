jQuery(document).ready(function($) {
	$('.section').css('min-height', $(window).height());
	$('.m-section').css('min-height', $(window).height() - $('.menu').height());
	$('.center').css('line-height', $(window).height() - $('.menu').height() + "px");
	$('.third').css('line-height', $(window).height() + "px");
	$('.plan').css('line-height', $(window).height() + "px");
});
var num = $('.menu').height() + 10;
$(window).bind('scroll', function() {
	if ($(window).scrollTop() > num) {
		$('.menu').addClass('fixed');
	}
	else {
		var num = $('.menu').height() + 10;
		$('.menu').removeClass('fixed');
	}
});