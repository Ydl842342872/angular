angular.module('myApp', ['ngRoute', 'angularCSS'])
//	.run(['$window', '$rootScope', function ($window, $rootScope){
//		$rootScope.$on('$locationChangeSuccess', function () {
//			//如果浏览器地址包含 market（闪送超市）那么就隐藏footer
//			if ($window.location.href.indexOf('dier') != -1) {
//				$rootScope.rootIsFooterShow = false;
//			} else {
//				$rootScope.rootIsFooterShow = true;
//			}
//		});
//	}])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/yi', {
			templateUrl : './view/diyi.html',
			controller : 'diyiCon as diyi'
		})
		.when('/er', {
			templateUrl : './view/dier.html',
			controller : 'dierCon as dier'
		})
		.when('/san', {
			templateUrl : './view/disan.html',
			controller : 'disanCon as disan'
		})
		.when('/si', {
			templateUrl : './view/disi.html',
			controller : 'disiCon as disi'
		})
		.when('/detail/:personId', {
			templateUrl : './view/detail.html',
			controller : 'derailCon as dera'
		})
		.otherwise({
			redirectTo : '/yi'
		})
	}])
