/**
 * Created by Administrator on 2018/8/23 0023.
 */
(function (angular) {
	var module = angular.module("movieCat.directives",[]);
	module.directive("autoFocus",['$location',function ($location) {
		var path = $location.path();
		return {
			restrict:'A',
			link:function (scope,elem,attr,controllers) {
				var aLink = elem.children().attr("href").split("/")[1];
				if (path.indexOf(aLink) != -1){
					console.log("11")
					elem.addClass("active");
				}
				elem.on("click",function () {
					elem.parent().children().removeClass("active");
					elem.addClass("active");
				})
			}
		}
	}])
})(angular);
