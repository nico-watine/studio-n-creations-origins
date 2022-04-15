// 26,516
// 13,864

// PREPENDS ::
	// ASSETS/SKROLLR/DIST/SKROLLR.MIN.JS
	// ASSETS/FITTEXT.JS/JQUERY.FITTEXT.JS

$("#portfolio_header").fitText(0.9, { minFontSize: '54px', maxFontSize: '140px' });
$("#zaraza_header").fitText(0.9, { minFontSize: '36px', maxFontSize: '140px' });

$(window).scroll(function() {
	$('#jdf-gif').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass("fadeInLeft visible");
		}
	});
	$('#dofv-mobile').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass("slideInUp visible");
		}
	});
	$('#dmesa-screen').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+640) {
			$(this).addClass("zoomIn visible");
		}
	});
	$('#dmesa-screen').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+640) {
			$(this).addClass("zoomIn visible");
		}
	});
	$('#a-plus-mockup').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+640) {
			$(this).addClass("slideInRight visible");
		}
	});
});

if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    skrollr.init({
        forceHeight: false,
        smoothScrolling: true
    });
}

