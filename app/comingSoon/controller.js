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

		module.controller('comingSoonController', ['$scope','$http',function($scope,$http) {
			$scope.title = "即将上映";

			$http.get("../app/coming_soon.json").then(function (response) {
				if (response.status == 200){
					$scope.subjects = response.data.subjects;
				}else {
					$scope.message = "请求数据错误："+response.statusText;
				}
			},function (response) {
				$scope.message = "请求数据错误："+response.statusText;
			})

		}]);
})(angular);
