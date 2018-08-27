(function (angular) {
	'use strict';
	/*
	* 主模块
	*
	* */
	var movieCat = angular.module('movieCat', [
		'ngRoute',
		'movieCat.movie_detail',
		'movieCat.movie_list',
		'movieCat.directives'
	]);
	movieCat.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
	}]);

	movieCat.controller("searchController",['$scope','$route',function ($scope,$route) {

		$scope.input = '';
		$scope.search = function () {
			$route.updateParams({category:'search',q: $scope.input});
		}
	}]);
/*
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
	}])*/
})(angular);
