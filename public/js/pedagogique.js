$(document).ready(function(){
	$(".portfolio-thumb").hover(function(){
		$(this).addClass('animated wobble');
	});

	$(".portfolio-thumb").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){
    	$(this).removeClass('animated wobble');
	});
});