jQuery(document).ready(function($) {
	$('.section').css('min-height', $(window).height());
	$('.one').css('line-height', $(window).height() + "px");
	$('#map').css('min-height', $('.contact').height());
});
$(window).resize(function(e) {
	$('.section').css('min-height', $(window).height());
	$('.one').css('line-height', $(window).height() + "px");
	$('#map').css('min-height', $('.contact').height());
});