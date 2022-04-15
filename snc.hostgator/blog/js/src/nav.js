(function() {
	// var triggerBttn = document.getElementById( 'trigger-overlay' ),
	var triggerBttn = document.getElementById( 'menu-toggle' ),
		overlay = document.querySelector( '.overlay' ),
		icon = document.querySelector( '#hamburger' ),
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.add(icon, 'active');
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
				classie.remove( icon, 'active' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
				classie.remove( icon, 'active' );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
			classie.add( icon, 'active' );
		}
	}

	if (triggerBttn.addEventListener) {
	    triggerBttn.addEventListener( 'click', toggleOverlay );
	}
	else {
	    triggerBttn.attachEvent( 'onclick', toggleOverlay);
	}
})();
