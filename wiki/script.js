(function () {
	angular.module('WikiApp', [])
		.controller('WikiAppController', WikiAppController)
		.service('WikiAppService', WikiAppService);



		WikiAppService.$inject = ["$http"]
		function WikiAppService($http){
			var service = this;

// https://cors-anywhere.herokuapp.com/
			
			service.getSearch = function(searchTerm){

				return $http({
  					method: 'GET',
  					url: 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + searchTerm + "&prop=info|extracts&inprop=url"
					}).then(function successCallback(response) {
					return response;
  					});

			}
		}

		WikiAppController.$inject = ["WikiAppService"]	
		function WikiAppController (WikiAppService) {
			var ctrl = this;
		
		ctrl.search = function(){
			 $(".interact").fadeOut();

			 setTimeout(function(){
			 	 $(".resetBtn").fadeIn();
			 	 WikiAppService.getSearch(ctrl.searchTerm).then(function(data){
			 	ctrl.searched = data.data.query.pages
			 	})
			 	},300)	
			

		}	
		}
		$(".resetBtn").on("click", function(){
			$(".resetBtn").fadeOut();
			$(".interact").fadeIn();
			$(".hook").html("");
		})

})();

