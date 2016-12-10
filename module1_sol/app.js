(function() {
	'use strict'

	angular.module('LunchCheck',[])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController ($scope){

		$scope.food = ""
		$scope.fontColor = {};
		$scope.borderCol = {};

		$scope.turnGreen = function (){
    	
    		$scope.fontColor = {"color":"green"};
    		$scope.borderCol = {"border-color":"green",
    							"box-shadow":"2px 2px 20px green"};
    	}

		$scope.turnRed = function() {
    		$scope.fontColor = {"color":"red"};
    		$scope.borderCol = {"border-color":"red",
    							"box-shadow":"2px 2px 20px red"};
		}
		

		$scope.howMuch = function (){
			 var x = $scope.food.split([','])
			 var counter = 0
			 for (var i = x.length - 1; i >= 0; i--) {
			 	if(x[i].replace(/\s/g, '').length){
			 	counter += 1}
			 }
			 
			 if ((counter > 0) && (counter <= 3)) {
			 	$scope.message = "Enjoy!";
			 	$scope.turnGreen()
			 } else if (counter > 3){
			 	$scope.message = "Too Much!"
			 	$scope.turnGreen()
			 }else {
			 	$scope.message =  "Please enter data first"
			 	$scope.turnRed()
			 }
			
			console.log(counter)
			console.log(x)
			
		};

	

	};
})();