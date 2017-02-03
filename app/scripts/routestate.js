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
            name: 'ngtable',
            url: '/ngtable',
            templateUrl: 'views/ngtable.html',
            controller: 'NgTableCtrl',
            controllerAs: 'ngtableCtrl'
        })
        .state({
            name: 'dndlist',
            url: '/dndlist',
            templateUrl: 'views/dndlist.html',
            controller: 'DNDListCtrl',
            controllerAs: 'dndlistCtrl'
        });


        
        $urlRouterProvider.otherwise('/main');

        
    }]
);