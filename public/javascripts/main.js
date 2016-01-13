(function(){

	var app = angular.module('myApp', ['ngRoute'])
    
	
	app.config(['$routeProvider', function ($routeProvider){
    	$routeProvider
    		.when('/', {
        		templateUrl: '/assets/partials/load.html',
				controller: 'LoadController'
    		})
    		.otherwise({redirectTo: '/'});
    }]);
	
	app.controller('LoadController', function($scope, LoadService){
		
		LoadService.getFromServer().then(function(json){
			$scope.object = json;
			console.log($scope.object);
		});
	});
	
	app.factory('LoadService', function($q, $http){
		return {
			getFromServer: function (){
				var deferred = $q.defer();
				
				$http.get('api/json', {}).then(
					function(response){
						console.log(response);
						deferred.resolve(response.data);
					}, function (error){
						console.log(error);
						deferred.reject(error);
					}
				)
				return deferred.promise;
			}
		}
	});
    	
}());