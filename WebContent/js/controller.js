key.controller("carController",function($scope,$http,carService){
	$scope.car="Enter Car Name here!";
	$scope.pname="Possibilities !";
	alert("Welcome to Car finding Application!");


	$scope.checkCar=function(){
		carService.findCarDetail($scope.carname);
		var response = carService.data;
		
		if(angular.isUndefined(response.brand)){
			$scope.datashow=false;
		}else{
			$scope.newcar=new Car(response['model'],response['brand'],response['year'],response['price'],response['photo']);
			$scope.datashow=true;
			return response;
		}
		
	};
		
	$scope.buttonClick=function(){
		alert($scope.carname+" is your car!");
	};

	console.log($scope.buttonClick);

});
