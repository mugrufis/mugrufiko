(function () {
	'use strict'

angular.module('public')
	.controller('SignUpController',SignUpController)


	SignUpController.$inject = ['MenuService','UserService'];
	function SignUpController(MenuService, UserService) {
	    var $ctrl = this;
	    var user = {};
	    $ctrl.control = {};
	    $ctrl.control.responeArrived = true;

		$ctrl.submit = function (favDishNum) {
			MenuService.getMenuItem(favDishNum.toUpperCase()).then(function (response) {
				user.firstName = $ctrl.user.firstName;
				user.lastName = $ctrl.user.lastName;
				user.email = $ctrl.user.email;
				user.phone = $ctrl.user.phone;
				if(!user.phone){
					user.phone = "No Phone number registered."
				}
				user.favDishNum = favDishNum.toUpperCase();
				user.favDish = response.data;
				$ctrl.control.responeArrived = true;
				$ctrl.control.infoSave = true;
				UserService.addUser(user)
      			return response.data;
    			},function (error) {
    				$ctrl.control.responeArrived = false;
    				$ctrl.control.infoSave = false;
    			})
		
			
		
		

		
		};


	}


})();