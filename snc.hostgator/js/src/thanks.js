// PREPENDS ::
	// ASSETS/MAGNIFIC-POPUP/SRC/JS/CORE.JS
	// ASSETS/MAGNIFIC-POPUP/SRC/JS/INLINE.JS

jQuery(window).load(function(){
	jQuery.magnificPopup.open({
		items: {src: '#thanks-modal'},
		fixedContentPos: true,
		alignTop: true,
		removalDelay: 400,
		mainClass: 'mfp-zoom-in'}, 
	0);
});
