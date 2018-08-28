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
	movieCat.constant("appConfig",{
		'pageSize':5,
		'listAddress':"https://api.douban.com/v2/movie/",
		'detailAddress':"https://api.douban.com/v2/movie/subject/"

	});
	movieCat.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
	}]);

	movieCat.controller("searchController",['$scope','$window','$location','$route',function ($scope,$window,$location,$route) {

		$scope.input = '';
		$scope.search = function () {

			$scope.input = '';
			$scope.search = function () {
				$route.updateParams({category:'search',q: $scope.input});
			}

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
