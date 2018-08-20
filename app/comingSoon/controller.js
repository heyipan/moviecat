(function (angular) {
	'use strict';
	/*
	* 即将上映模块
	* */
	var module = angular.module('movieCat.comingSoon', ['ngRoute']);

		module.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/comingSoon', {
				templateUrl: 'comingSoon/comingSoon.html',
				controller: 'comingSoonController'
			});
		}]);

		module.controller('comingSoonController', ['$scope',function($scope) {
			$scope.title = "即将上映";

		}]);
})(angular);
