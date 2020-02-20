'use strict';

/* Controllers */

var cb_controllers = angular.module('cb_controllers', [
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
    'cb_services'
]);

cb_controllers.controller('global_ctrl', ['$scope', '$location', function($scope, $location) {

	/* Global Initiation */
	$scope.init_global = function() {
		console.log('%cGlobal Initiation Succesful', 'color: green');
    };
    
    /* Routes */
	$scope.activePage = function(route) {
        return route === $location.path();
    };	

}]);

cb_controllers.controller('home_ctrl', ['$scope', function($scope) {

	/* Global Initiation */
	$scope.init_home = function() {
		console.log('%cHome Initiation Succesful', 'color: green');
    };
    

}]);