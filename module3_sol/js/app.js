(function () {
	'use strict';

	angular.module(`NarrowItDownApp`,[])
		.controller('NarrowItDownController',NarrowItDownController)
		.service('MenuSearchService', MenuSearchService)
		.directive('foundItems',FoundItemsDirective);
//-----------------------Directive-----------
function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'sortedMenu.html',
    scope: {
      items: '<',
      remove: '&'

}
  };

  return ddo;
}

//---------------Controller---------------
NarrowItDownController.$inject = ['MenuSearchService']
	function NarrowItDownController(MenuSearchService){
		var narrow = this;
		narrow.search =
				function(){
				var searchTerm = narrow.searchTerm
				MenuSearchService.getMatchedMenuItems(searchTerm)
						.then(function(data) {
								narrow.categories = data;
								console.log("menu data : ", data);
						});
			};
		narrow.remove = function (index){
			console.log("test")
			narrow.categories.splice(index,1)
	 }
	}

//-------------Service-------------------
MenuSearchService.$inject = ['$http']
	function MenuSearchService ($http,searchTerm){
		var service = this;

		service.getMatchedMenuItems = function(searchTerm){
			return $http({
				method: "GET",
				url:("https://davids-restaurant.herokuapp.com/menu_items.json")
		})
			.then(function (response) {
    		var menuItems = response.data;
				return sortResponse(menuItems.menu_items, searchTerm);
		});

	};
	function sortResponse(index, searchTerm) {
				var newMenu = [];
				for(var i = 0; i < index.length ; i++ ){
					if(index[i].description.indexOf(searchTerm) !== -1) {
          			newMenu.push(index[i]);
					}
				}
				return newMenu
			}
}
})();