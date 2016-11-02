'use strict';

angular.module('clientApp')
  .controller('SearchCtrl', [ 'SearchSrv', '$rootScope', '$stateParams','$location', 'toastr',
  function ( searchSrv, $rootScope, $stateParams, $location, toastr) {

    var searchCtrl = this;
    
    searchCtrl.entity = {};

    searchCtrl.cancel = function(){
      $location.go("main");
    };

    searchCtrl.submit = function(){
      console.log('search for ' + searchCtrl.entity.title);
      searchSrv.searchMovie(searchCtrl.entity.title).then(
        function(results){
          console.log(results.data);
          searchCtrl.list = results.data.Search;
          
        }
      );
    };
    
    searchCtrl.getMovie = function(id, index){
      console.log("get Movie " + id);
      searchSrv.getMovie(id).then(
        function(results){
          searchCtrl.list[index].details = results.data;
        }
      );
    }
            
  }]);
