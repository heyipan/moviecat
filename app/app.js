(function (angular) {
	'use strict';
	/*
	* 主模块
	*
	* */
	var movieCat = angular.module('movieCat', ['ngRoute','movieCat.movie_list']);
	movieCat.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
	}]);

	movieCat.controller("toggleController",['$scope','$location',function ($scope,$location) {
		$scope.$location = $location;
		$scope.$watch("$location.path()",function (now,old) {
			if (now.indexOf('in_theaters') != -1){
				$scope.toggle = "in_theaters";
			}else if (now.indexOf('coming_soon') != -1){
				$scope.toggle = "coming_soon";
			}else if (now.indexOf("top250") != -1 ){
				$scope.toggle = "top250";
			}
		})
	}])
})(angular);
