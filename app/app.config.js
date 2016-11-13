(function () {
	'use strict';

	angular
		.module('5minlogo')
		.config(appConfiguration);

	appConfiguration.$inject = ['$urlRouterProvider'];


	function appConfiguration($urlRouterProvider) {
		$urlRouterProvider.otherwise('/font');
	}
})();
