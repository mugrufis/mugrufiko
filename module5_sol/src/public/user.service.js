(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

//UserService.$inject = ['']
 function UserService() {
  var service = this;
  var newUser = {};
  service.addUser = function (user){
        newUser.firstName = user.firstName;
        newUser.lastName = user.lastName;
        newUser.email = user.email;
        newUser.phone = user.phone;
        newUser.favDishNum = user.favDishNum;
        newUser.favDish = user.favDish;
        newUser.registered = true;
  };

  service.getUser = function () {
    return newUser;  
  }

 }



})();
