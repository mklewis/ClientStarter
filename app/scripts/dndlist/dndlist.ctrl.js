'use strict';

angular.module('clientApp')
  .controller('DNDListCtrl', [ '$rootScope', '$scope',
  function ( $rootScope, $scope ) {

    var dndlistCtrl = this;
    
    // searchCtrl.entity = {};
    
    $rootScope.pageTitle = "DND List";

    dndlistCtrl.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        dndlistCtrl.models.lists.A.push({label: "Item A" + i});
        dndlistCtrl.models.lists.B.push({label: "Item B" + i});
    }

    // Model to JSON for demo purpose
    $scope.$watch('dndlistCtrl.models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
    

            
  }]);
