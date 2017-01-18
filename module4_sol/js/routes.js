// (function () {
// 'use strict';

// angular.module('MenuApp')
// .config(RoutesConfig);

// RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
// function RoutesConfig($stateProvider, $urlRouterProvider) {


//   $urlRouterProvider.otherwise('/');

  
//   $stateProvider
//   .state('home', {
//     url: '/',
//     templateUrl: 'js/templates/home.template.html'
//   })

 
//   .state('categories', {
//     url: '/categories',
//     templateUrl: 'js/templates/categories.template.html',
//     controller: 'CategoriesController as categoriesCtrl',
//     resolve: {
//       categories: ['MenuDataService', function(MenuDataService) {
//         return MenuDataService.getAllCategories().then(function(response) {
//           return response.data;
//         });
//       }]
//     }
// })
// }

// })();
(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'js/templates/home.template.html'
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'js/templates/categories.template.html',
    controller: 'CategoriesController as categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategories().then(function(response) {
          return response.data;
        });
      }]
    }
  })

  .state('items', {
    url: '/items/{shortName}',
    templateUrl: 'js/templates/items.template.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      menuItems: ['$stateParams','MenuDataService', function($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.shortName).then(function(response) {
            return response.data
            
                });
            }]
    }
  })

  
  ;
}

})();