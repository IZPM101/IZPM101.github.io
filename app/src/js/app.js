'use strict';

/* App Config */

var cb_app = angular.module('cb_app', [	
    'ngRoute',
    'ngAnimate',
    'ngAria',
    'ngResource',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngParseExt',
    'ui.bootstrap',	
	'cb_controllers'
]);

cb_app.config(['$compileProvider', function($compileProvider) {	

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|sip|chrome-extension):/);	
    
}]);

cb_app.config(['$httpProvider', function($httpProvider) {
	
	if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }    
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
	
}]);

cb_app.config(['$routeProvider', function($routeProvider) {

	$routeProvider.
	when('/home', {
		templateUrl: './src/partials/home.html',
		controller: 'home_ctrl',
		pageTitle: 'Home',
		currentPage: 'Home'
	}).				
	otherwise({
		redirectTo: '/home'
	});	
	
}]);

