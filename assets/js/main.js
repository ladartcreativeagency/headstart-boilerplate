(function(window, $){

'use strict';

// Document -------------------------------------------------------------------

// When using jQuery, use
jQuery(document).ready(function($) {

	console.log('## Document ready');

	// VARS -------------------------------------------------------------------
	//

	var
		$window = $(window),
		$body = $('body')
	;

	// ACTIONS ----------------------------------------------------------------
	//

	// $elem.on('something', doSomething);

	//
	// FUNCTIONS --------------------------------------------------------------
	//
    init(); 

    // call all custom functions
	function init() {
		userAgentCheck();
		testThis();
	}
 	
	function userAgentCheck() {
     var b = document.documentElement;
      b.setAttribute('data-useragent',  navigator.userAgent);
      b.setAttribute('data-platform', navigator.platform );
      b.className += ((!!('ontouchstart' in window) || !!('onmsgesturechange' in window))?' touch':'');
	
	  console.log('userAgent Checked');
	} // end userAgentCheck();


	function testThis() {
		$( 'p' ).prepend( '<strong>Hello </strong>' );
	} // end testThis();



});

}(window, $));