'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
   .controller('MainCtrl', function($rootScope, $scope, $state, $window ) {
        $rootScope.pageTitle = "Home";
        
        var mainCtrl = this;

        mainCtrl.sideMenuOpen = false;

        mainCtrl.$state = $state;
        
        mainCtrl.toggle = true;
        
        mainCtrl.responsiveMode = window.innerWidth <= 768 ? true : false;
        
        mainCtrl.sidebarVisible = mainCtrl.responsiveMode ? false : true;
        
        angular.element($window).bind('resize', function() {
          $scope.$apply();
        });
        
        mainCtrl.menuClick = function() {
            if( mainCtrl.responsiveMode ) {
                mainCtrl.toggleSidebar();
            }
        };

        mainCtrl.toggleSidebar = function($event) {
            mainCtrl.sidebarVisible = !mainCtrl.sidebarVisible;
        }
});