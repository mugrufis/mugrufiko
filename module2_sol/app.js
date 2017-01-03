(function() {
	'use strict';


	angular.module("ShoppingListCheckOff",[])
		.controller("ToBuyController",ToBuyController)
		.controller("AlreadyBoughtController",AlreadyBoughtController)
		.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

	ToBuyController.$inject = ["ShoppingListCheckOffService"];
	function ToBuyController(ShoppingListCheckOffService) {
		var buy = this
		buy.shoppingList = ShoppingListCheckOffService.buyList();
		buy.itemCross = ShoppingListCheckOffService.itemCross;
		buy.listChecker = function (buyList) {
		if(buyList[0] ==undefined){
				
				return true}
			};
	};



	AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var bought = this;
		bought.shoppingList = ShoppingListCheckOffService.boughtList();
		bought.listChecker = function (boughtList) {
			if(boughtList[0] ==undefined){
				return true}
		}
	};	


		function ShoppingListCheckOffService ()	{
		var service = this;
		

			var buyList = [
  				{
    				name: "Cookies",
    				quantity: "2"
  				},
  				{
    				name: "XL Cookies",
				    quantity: "200"
				},
				{
 				   name: "Chocolate Filled Cookies",
    				quantity: "300"
				},
				{
				    name: "More Cookies",
				    quantity: "300"
				},
				{
				    name: "'How to lose weight on your own' manual",
				    quantity: "1"
				}
			];


			var boughtList = [];


			service.itemCross = function (itemIndex) {
    			var item = buyList[itemIndex]
    			boughtList.push(item);
    			buyList.splice(itemIndex, 1)

  			};



			service.buyList = function(){return buyList};
			service.boughtList = function(){
				
				return boughtList
				

			};

		};

		
})();