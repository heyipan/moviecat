(function (angular) {
	'use strict';
	/*
	 * 正在热映模块
	 * */


	var module = angular.module('movieCat.hotShowing', ['ngRoute']);

	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/hotShowing', {
			templateUrl: 'hotShowing/hotShowing.html',
			controller: 'hotShowingController'
		});
	}]);

	module.controller('hotShowingController', ['$scope', function ($scope) {
		$scope.title = "正在热映";

		$scope.subjects = [
			{
				"rating": {
					"max": 10,
					"average": 7.3,
					"stars": "40",
					"min": 0
				},
				"genres": [
					"剧情",
					"喜剧"
				],
				"title": "一出好戏",
				"casts": [
					{
						"alt": "https://movie.douban.com/celebrity/1274242/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1656.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1656.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1656.jpg"
						},
						"name": "黄渤",
						"id": "1274242"
					},
					{
						"alt": "https://movie.douban.com/celebrity/1138320/",
						"avatars": {
							"small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1268.jpg",
							"large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1268.jpg",
							"medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1268.jpg"
						},
						"name": "舒淇",
						"id": "1138320"
					},
					{
						"alt": "https://movie.douban.com/celebrity/1274388/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356403251.95.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356403251.95.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356403251.95.jpg"
						},
						"name": "王宝强",
						"id": "1274388"
					}
				],
				"collect_count": 361850,
				"original_title": "一出好戏",
				"subtype": "movie",
				"directors": [
					{
						"alt": "https://movie.douban.com/celebrity/1274242/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1656.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1656.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1656.jpg"
						},
						"name": "黄渤",
						"id": "1274242"
					}
				],
				"year": "2018",
				"images": {
					"small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529571873.jpg",
					"large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529571873.jpg",
					"medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529571873.jpg"
				},
				"alt": "https://movie.douban.com/subject/26985127/",
				"id": "26985127"
			},
			{
				"rating": {
					"max": 10,
					"average": 7.8,
					"stars": "40",
					"min": 0
				},
				"genres": [
					"纪录片"
				],
				"title": "大三儿",
				"casts": [
					{
						"alt": "https://movie.douban.com/celebrity/1399300/",
						"avatars": {
							"small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
							"large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
							"medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
						},
						"name": "叶云",
						"id": "1399300"
					}
				],
				"collect_count": 2195,
				"original_title": "大三儿",
				"subtype": "movie",
				"directors": [
					{
						"alt": "https://movie.douban.com/celebrity/1331818/",
						"avatars": {
							"small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524120551.67.jpg",
							"large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524120551.67.jpg",
							"medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524120551.67.jpg"
						},
						"name": "佟晟嘉",
						"id": "1331818"
					}
				],
				"year": "2018",
				"images": {
					"small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530569532.jpg",
					"large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530569532.jpg",
					"medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530569532.jpg"
				},
				"alt": "https://movie.douban.com/subject/27119292/",
				"id": "27119292"
			},
			{
				"rating": {
					"max": 10,
					"average": 7.1,
					"stars": "35",
					"min": 0
				},
				"genres": [
					"喜剧",
					"动画",
					"奇幻"
				],
				"title": "精灵旅社3：疯狂假期",
				"casts": [
					{
						"alt": "https://movie.douban.com/celebrity/1054523/",
						"avatars": {
							"small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28807.jpg",
							"large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28807.jpg",
							"medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28807.jpg"
						},
						"name": "亚当·桑德勒",
						"id": "1054523"
					},
					{
						"alt": "https://movie.douban.com/celebrity/1022649/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36102.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36102.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36102.jpg"
						},
						"name": "凯瑟琳·哈恩",
						"id": "1022649"
					},
					{
						"alt": "https://movie.douban.com/celebrity/1054409/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1091.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1091.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1091.jpg"
						},
						"name": "史蒂夫·布西密",
						"id": "1054409"
					}
				],
				"collect_count": 26485,
				"original_title": "Hotel Transylvania 3: Summer Vacation",
				"subtype": "movie",
				"directors": [
					{
						"alt": "https://movie.douban.com/celebrity/1016727/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24281.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24281.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24281.jpg"
						},
						"name": "格恩迪·塔塔科夫斯基",
						"id": "1016727"
					}
				],
				"year": "2018",
				"images": {
					"small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530591543.jpg",
					"large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530591543.jpg",
					"medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530591543.jpg"
				},
				"alt": "https://movie.douban.com/subject/26630714/",
				"id": "26630714"
			}
		]


	}]);

})(angular)
