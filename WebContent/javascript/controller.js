
/*var phonecatmod = angular.module('phonecatmod', []);

phonecatmod.controller('mainctrl',['$scope', '$http', function($scope, $http){
	$http.get('Data/phone.json').success(function(data){ 
		$scope.phones = data;
	
	
	});
	
	$scope.phones=[
	              {'name': 'iphone',
	            	'snippet': 'just got faster with iphone'  },
	              {'name': 'Android',
	            	'snippet': 'one of the most beautiful name'},
	              {'name': 'LG',
	            	'snippet': 'it is third awesome phone on list'}
	              ];
	
	$scope.sortby="age";
	
	
}]);

phonecatmod.controller('Detailctrl', ['$scope','$routeParams','$http',function($scope,$routeParams, $http){
	 $http.get('Data/' + $routeParams.phoneId + '.json').success(function(data) {
	      $scope.phone = data;
	      $scope.imageproperty = data.images[0];
	    });
	 	 $scope.setImage = function(imageUrl){
	 	 $scope.imageproperty = imageUrl;  
	 	 };
	  }]);*/
	 

var phonecatmod = angular.module('phonecatmod', []);

phonecatmod.controller('mainctrl',['$scope', 'Phone', function($scope, Phone){
	$scope.phones = Phone.query();
	$scope.sortby="age";
		
}]);

phonecatmod.controller('Detailctrl', ['$scope','$routeParams','Phone',function($scope,$routeParams, Phone){
	
	$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
	      $scope.imageproperty = phone.images[0];	
	    });
	 	 $scope.setImage = function(imageUrl){
	 	 $scope.imageproperty = imageUrl;  
	 	 };
	  }]);
	 

                                       
                                  