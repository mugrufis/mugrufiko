(function() {
'use strict';

angular.module('MenuApp')
  .component('items', {
    templateUrl: 'js/templates/items.template.html',
    bindings: {
      menuItems: '<'
    }
  });

})();