/**
 * App
 * @desc Intouch App
 */
(function () {
	'use strict';

	angular
		.module('5minlogo', [
			'ngAnimate',
			'ngCookies',
			'ngResource',
			'ngSanitize',
			'ngTouch',
			'ui.router',
			'perfect_scrollbar',
			'anim-in-out'
		])
		.run(appRun);

	appRun.$inject = ['$rootScope', 'LogoService'];

	/**
	 * App run
	 * @param  {service} $rootScope
	 */
	function appRun($rootScope, LogoService) {
        $rootScope._ = window._;
		$rootScope.icons = []; // initialize icon set with empty, this will be populated with the icons from TheNoutProject, or from local storage on the browser
		WebFont.load({
			google: {
				families: LogoService.getFonts()
			}
		});
	}

})();
