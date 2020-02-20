'use strict';

/* Services */

var cb_services = angular.module('cb_services', [
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
]);

cb_services.factory('loading', ['$uibModal', '$timeout', function($uibModal, $timeout) {
	return {
		loadingBarModalInstance : null,
		messages: { heading: "Loading...", progress: "" },
		delayTimeout: null,
		show: function(alt_messages) {
			var instance_messages = this.messages;
			if (typeof(alt_messages) != 'undefined') {
				instance_messages = alt_messages;
			}
			
			var self = this;
			$timeout.cancel(self.delayTimeout);
			if (this.loadingBarModalInstance != null) {
				//Modal instance already showing...
				return;
			}
			//Loading not showing
			this.loadingBarModalInstance = $uibModal.open({
				animation: false,
				keyboard: false,
				backdrop : 'static',
				templateUrl: 'js/partials/loading.html',
				controller: 'loading_modal_ctrl',
				windowClass: 'loading-modal-window',
				size: 'sm',
				resolve: {
					items: function () {
						return instance_messages;
					}
				}	
			});
		},
		showDelayed: function(time) {
			var self = this;
			$timeout.cancel(self.delayTimeout);
			self.delayTimeout = $timeout(function() { self.show(); },time);
		},
		hide: function() {
			var self = this;
			$timeout.cancel(self.delayTimeout);
			$timeout(function() { 
				if (self.loadingBarModalInstance != null) { 
					self.loadingBarModalInstance.close(); 
					self.loadingBarModalInstance = null; 
				} 
			},750); 
			//Need to delay for a bit because you can't close a modal immediately after opening.
		}
	};
}]);

cb_services.controller('loading_modal_ctrl', function ($scope, items) {
	$scope.messages = items;
});