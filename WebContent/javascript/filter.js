angular.module('phonecatfilter', [])
.filter('checkmark', function(){
	return function(input){
		return input ? 'u\2713' : '\u2718';
	};
	
});