"use strict"
key.service("carService", function($http) {
	var vm=this;
	vm.data={};
	
	this.findCarDetail=function(brand){
		$http.get("http://localhost:8080/spring-app-mobile/mobile/validateCar?brand="+brand).success(function(response){
			vm.data=response;
		}).error(function(data, status, header, config){
			vm.data=response;
		});
		
	};
});