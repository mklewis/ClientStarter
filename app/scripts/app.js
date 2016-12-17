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
    'matchMedia' 
  ]);
