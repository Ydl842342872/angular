angular.module('myApp')
	.controller('diyiCon',['$css', 'diyiService', function($css ,diyis){
		var self = this;
		$css.add('./css/diyi.css');
		self.name = diyis.getPage();
	}])
	.controller('dierCon',['$css', 'dierService', function($css, diers){
		$css.add('./css/dier.css');
		var self1 = this;
		self1.name = diers.getPage();
		self1.arr = diers.getList();
		console.log(self1.arr);
	}])
	.controller('disanCon',['$css', 'disanService', function($css, disans){
		$css.add('./css/disan.css');
		var self = this;
		disans.getData().then(function(response){
			self.data = response.data.data.menu;
		},function(response){
			console.log(response);
		})
	}])
	.controller('disiCon',['$css', function ($css){
		$css.add('./css/disi.css');
	}])
	.controller('derailCon',['$css', '$routeParams', 'detailSer', '$location', function ($css,$routeParams,detail,$location){
		var self = this;
		self.perObj = detail.getId($routeParams.personId);
		self.goBack = function(){
			$location.path('san');
		}
	}])