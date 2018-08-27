(function (angular) {
	'use strict';
	/*
	 * 正在热映模块
	 * */


	var module = angular.module('movieCat.movie_detail', ['ngRoute','movieCat.services.http']);

	module.config(['$routeProvider', function ($routeProvider) {

		$routeProvider.when('/detail/:id', {
			templateUrl: 'detail/detail.html',
			controller: 'detail'
		});
	}]);

	module.controller('detail', [
		'$scope',
		'$route',
		'$routeParams',
		'httpService',
		function ($scope,$route,$routeParams,httpService) {
			$scope.loading = true;

			httpService.jsonp("https://api.douban.com/v2/movie/subject/"+$routeParams.id,{},function (data) {
				$scope.subjects = data;
				$scope.title = data.title;//列表title
				$scope.loading = false;
				$scope.$apply();
			});

		}]);

})(angular);
