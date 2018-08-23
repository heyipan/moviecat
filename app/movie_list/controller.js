(function (angular) {
	'use strict';
	/*
	 * 正在热映模块
	 * */


	var module = angular.module('movieCat.movie_list', ['ngRoute','movieCat.services.http']);

	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/:category/:page', {
			templateUrl: 'movie_list/movie_list.html',
			controller: 'movie_list'
		});
	}]);

	module.controller('movie_list', [
		'$scope',
		'$route',
		'$routeParams',
		'httpService',
		function ($scope,$route,$routeParams,httpService) {
		$scope.loading = true;
		var count = 5;//每页的数量
		var page = parseInt($routeParams.page);//当前的页数
		var start   = (page - 1) * count;//开始
		httpService.jsonp("https://api.douban.com/v2/movie/"+$routeParams.category,{start:start,count:count},function (data) {
			$scope.subjects = data.subjects;//电影条目
			$scope.title = data.title;//列表title
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
