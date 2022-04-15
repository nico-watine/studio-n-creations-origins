$(document).ready(function() {
	$(".fancybox").fancybox({
		padding : 0,
		openEffect  : 'none',
		closeEffect	: 'none',
		closeClick : true,

		openEffect : 'elastic',
		openSpeed  : 150,

		closeEffect : 'elastic',
		closeSpeed : 150,

		helpers : {
			title : {
				type : 'over'
			}
		}
	});
});
skrollr.init({
    mobileCheck: function() {
            //hack - forces mobile version to be off
            return false;
        },
        forceHeight: false,
        smoothScrolling: true
});