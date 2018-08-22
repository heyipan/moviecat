(function (angular) {
	'use strict';
	/*
	 * 正在热映模块
	 * */


	var module = angular.module('movieCat.hotShowing', ['ngRoute','movieCat.services.http']);

	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/hotShowing/:page', {
			templateUrl: 'hotShowing/hotShowing.html',
			controller: 'hotShowingController'
		});
	}]);

	module.controller('hotShowingController', [
		'$scope',
		'$route',
		'$routeParams',
		'httpService',
		function ($scope,$route,$routeParams,httpService) {
		$scope.title = "正在热映";
		$scope.loading = true;
		var count = 5;//每页的数量
		var page = parseInt($routeParams.page);//当前的页数
		var start   = (page - 1) * count;
		httpService.jsonp("https://api.douban.com/v2/movie/in_theaters",{start:start,count:count},function (data) {
			$scope.subjects = data.subjects;
			$scope.total = data.total;//总的数据数
			$scope.pageNum = Math.ceil($scope.total/count);
			$scope.page = page;
			$scope.loading = false;
			$scope.$apply();
		});

		$scope.go = function (pageNow) {
			if (pageNow >=1  && pageNow <= $scope.pageNum){
				$route.updateParams({page:pageNow});
			}

		}


	}]);

})(angular);
