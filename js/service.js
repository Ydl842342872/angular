//这里统一管理service(服务)
angular.module('myApp')
	.factory('diyiService', [function () {
		return {
			getPage : function(){
				return '我是第一页';
			}
		}
	}])
	//获取用户信息的服务
	.factory('dierService', [function () {
		var list = [6,0,1,2,3,4,5];
		return {
			getPage : function(){
				return '我是第二页';
			},
			getList : function(){
				console.log("caoniam")
				return list;
			}
		}
		
	}])
	.factory('disanService', ['$http', function ($http) {
		return {
			getPage : function(){
				return '我是第三页';
			},
			getData : function (){
				return $http.get('http://www.vrserver.applinzi.com/aixianfeng/apihome.php');
			}
		}
	}])
	.factory('detailSer', ['$http', function ($http) {
		var list = [
			{ id : 1001, name : '爱鲜蜂1', price : 13},
			{ id : 1002, name : '爱鲜蜂2', price : 13},
			{ id : 1003, name : '爱鲜蜂3', price : 13},
			{ id : 1004, name : '爱鲜蜂4', price : 13}
		]
		return {
			getId : function(aId){
				for(goods of list){
					if(goods.id == aId){
						return goods;
					}
				}
				return null;
			}
		}
	}])