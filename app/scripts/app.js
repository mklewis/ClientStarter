'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
var app = angular
  .module('clientApp', [
    'ngResource',
    'ngSanitize',
    'ui.router',
    'toastr',
    'ui.bootstrap',
    'smart-table',  
    'matchMedia',
    'ngTable'
  ])
  .directive('reponsive-table', function(){
    return {
                require: '^ngTable',
                restrict: ['E', 'A'],
                scope: {
                  breakPoints: '='
                },
                replace: true,
                controller: VisibilityCtrl,
                controllerAs: 'ctrl'
                
            }

  })
  .controller('ResponsiveTableCtrl', ["$scope", "screenSize",
    function ($scope, screenSize) {
        var vm = this;
      
        vm.xs = screenSize.on('xs', function(isMatch){  
          if(vm.size !== 'xs'){
            vm.size = 'xs';
            vm.sizeChanged(vm.size);
          }
          vm.xs = isMatch;
        });

        vm.sm = screenSize.on('sm', function(isMatch){  
          if(vm.size !== 'sm'){
            vm.size = 'sm';
            vm.sizeChanged(vm.size);
          }
          vm.sm = isMatch;
        });

        vm.md = screenSize.on('md', function(isMatch){  
          if(vm.size !== 'md'){
            vm.size = 'md';
            vm.sizeChanged(vm.size);
          }
          vm.md = isMatch;
        });

        vm.lg = screenSize.on('lg', function(isMatch){  
          if(vm.size !== 'lg'){
            vm.size = 'lg';
            vm.sizeChanged(vm.size);
          }
          vm.lg = isMatch;
        });

        vm.sizeChanged = function(size) {
            console.log("Size Changed " + size);

            // if (column.show()) {
            //     column.show(false);
            //     ngTpStorage.setValue(column.title(), false);
            // } else {
            //     column.show(true);
            //     ngTpStorage.setValue(column.title(), true);
            // }
        };
    }
  ]);

