'use strict';

angular.module('clientApp')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    //.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state({
            name: 'main',
            url: '/main',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'mainCtrl'
            
        })
        .state({
            name: 'search',
            url: '/search',
            templateUrl: 'views/search.form.html',
            controller: 'SearchCtrl',
            controllerAs: 'searchCtrl'
        })
        .state({
            name: 'table',
            url: '/table',
            templateUrl: 'views/table.html',
            controller: 'TableCtrl',
            controllerAs: 'tableCtrl'
        });


        
        $urlRouterProvider.otherwise('/main');

        
    }]
);