(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// 'item' is injected through state's resolve
ItemsController.$inject = ['menuItems']
function ItemsController(menuItems) {
  var itemCtrl = this;
  console.log("Menu Items are ", menuItems)
  	itemCtrl.menuItems = menuItems.menu_items;
}

})();