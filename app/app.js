(function (angular) {
	'use strict';
	/*
	* 主模块
	*
	* */
	var moviecat = angular.module('movieCat', [
		'ngRoute',
		'movieCat.movie_list',
	]);
	moviecat.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
	}]);
})(angular);
