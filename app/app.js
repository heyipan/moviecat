(function (angular) {
	'use strict';
	/*
	* 主模块
	*
	* */
	var moviecat = angular.module('movieCat', [
		'ngRoute',
		'movieCat.hotShowing',
		'movieCat.comingSoon',
		'movieCat.rankingList'
	])
	moviecat.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/hotShowing/1'});
	}]);
})(angular)
