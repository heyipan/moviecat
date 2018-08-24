/**
 * Created by Administrator on 2018/8/23 0023.
 */
(function (angular) {
	var module = angular.module("movieCat.directives",[]);
	module.directive("autoFocus",['$location',function ($location) {
		var path = $location.path();
		return {
			restrict:'A',
			link:function ($scope,elem,attr,controllers) {
				$scope.$location = $location;
				var aLink = elem.children().attr("href").split("/")[1];
				$scope.$watch('$location.path()',function (now) {
					if (now.indexOf(aLink) != -1){
						elem.parent().children().removeClass("active");
						elem.addClass("active");
					}
				});
			}
		}
	}])
})(angular);
