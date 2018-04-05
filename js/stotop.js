$(document).ready(function(){ 
	$(window).scroll(function(event){
		var scroll=$(window).scrollTop();
		if(scroll>100){
			$("#stotop").addClass("btt-visible")
		}else{
			$("#stotop").removeClass("btt-visible")
		}
	});

	var $root = $('html, body');
	$('a[href^="#"]').click(function () {
		$root.animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
	return false;
	});
});
