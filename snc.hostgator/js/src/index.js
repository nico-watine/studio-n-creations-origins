// PREPENDS ::
	// ASSETS/SKROLLR/DIST/SKROLLR.MIN.JS
	// ASSETS/SKROLLR-STYLESHEETS/DIST/SKROLLR.STYLESHEETS.MIN.JS
	// ASSETS/MAGNIFIC-POPUP/SRC/JS/CORE.JS
	// ASSETS/MAGNIFIC-POPUP/SRC/JS/INLINE.JS

if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    skrollr.init({
        forceHeight: false,
        smoothScrolling: true
    });
}

$(document).ready(function() {
	$('.open-popup-link').magnificPopup({
		type:'inline',
		fixedContentPos: true,
		midClick: true,
		removalDelay: 400,
		mainClass: 'mfp-zoom-in'
	});
});

