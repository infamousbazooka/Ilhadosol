jQuery(document).ready(function($) {
	$('.section').css('min-height', $(window).height());
	$('.one').css('line-height', $(window).height() + "px");
	$('#map').css('min-height', $('.contact').height());
});

$(window).bind('scroll', function() {
	if ($(window).scrollTop() > 100) {
		$('.logo').css('display', 'none');
		$('header').css('backgroundColor', 'rgba(34,34,34,.8)');
	}
	else {
		$('.logo').css('display', 'inline-block');
		$('header').css('backgroundColor', 'rgba(34,34,34,1)');
	}
});