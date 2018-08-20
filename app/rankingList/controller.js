(function (angular) {
	'use strict';
	/*
	* 排行榜模块
	* */
	var module = angular.module('movieCat.rankingList', ['ngRoute']);

	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/rankingList', {
			templateUrl: 'rankingList/rankingList.html',
			controller: 'rankingListController'
		});
	}]);

	module.controller('rankingListController', ['$scope',function ($scope) {
		$scope.title = "排行榜50"
	}]);
})(angular);
