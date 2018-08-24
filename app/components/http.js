/**
 * Created by Administrator on 2018/8/22 0022.
 */
(function (angular) {
	var module = angular.module("movieCat.services.http",[]);
	module.service("httpService",['$window','$document',function ($window,$document) {
		this.jsonp = function(url, data, callback) {
			var fnSuffix = Math.random().toString().replace('.', '');
			var cbFuncName = 'my_json_cb_' + fnSuffix;
			// 不推荐 在angular中 $window 就是 window 而$document[0] 对象就是document对象
			var querystring = url.indexOf('?') == -1 ? '?' : '&';
			for (var key in data) {
				querystring += key + '=' + data[key] + '&';
			}
			querystring += 'callback=' + cbFuncName;
			var scriptElement = $document[0].createElement('script');
			scriptElement.src = url + querystring;
			$window[cbFuncName] = function (data) {
				callback(data);
				//清除请求标签
				document.body.removeChild(scriptElement);
			};
			document.body.appendChild(scriptElement);
		};
	}])
})(angular)
