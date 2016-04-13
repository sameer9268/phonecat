var app = angular.module('myApp',['ngRoute','phonecatAnimations','phonecatmod','phonecatfilter','phonecatServices']);
                                     
   app.config(function($routeProvider){
	  
	   $routeProvider.when('/phones',{
		   
		   templateUrl: 'phonecat1.html',
		   controller: 'mainctrl',
		   
	   })
	   .when('/phones/:phoneId',{
		   templateUrl : 'phonecat2.html', 
		   controller: 'Detailctrl', 
	   })
	   .otherwise({
		   redirectTo:'/phones',
	   
                                        
                                        
   });
   });
	   

