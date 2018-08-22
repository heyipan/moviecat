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

	module.controller('rankingListController', ['$scope','$http',function ($scope,$http) {
		$scope.title = "排行榜50";


		$http.get("../app/top_data.json").then(function (response) {
			$scope.subjects = response.data.subjects;
		},function (response) {

		})
	}]);
})(angular);
