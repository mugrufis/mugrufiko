(function () {
	'use strict'

	angular.module('public')
		.controller('MyInfoController', MyInfoController)

	MyInfoController.$inject = ['UserService','user','ApiPath'];
	function MyInfoController(UserService, user,ApiPath) {
		var infoCtrl = this;
		 infoCtrl.user = user;
		 infoCtrl.ApiPath = ApiPath;
		}
	

})();