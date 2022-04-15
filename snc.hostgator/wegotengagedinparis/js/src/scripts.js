// PREPENDS ::
	// BOOTSTRAP JS/TRANSITION.JS
	// BOOTSTRAP JS/TAB.JS

	// /assets/bower_components/skrollr/dist/skrollr.min.js

// SKROLLR INIT (PROPOSAL-STORY)
// skrollr.init({
// 	forceHeight: false
// });

if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    skrollr.init({
        forceHeight: false
    });
}

var isMobile = { 
Android: function() { return navigator.userAgent.match(/Android/i); }, 
BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

jQuery(function($) {
    // if (!isMobile.any())
    // $('#is-desktop').addClass('show');
    if (isMobile.any())
    $('#is-desktop').addClass('hide');
});