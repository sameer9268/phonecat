var phonecatServices = angular.module('phonecatServices', ['ngResource']);

    phonecatServices.factory('Phone', ['$resource',function($resource){
         return $resource('Data/:phoneId.json', {}, {
         query: {method:'GET', params:{phoneId:'phone'}, isArray:true}
    });
  }]);