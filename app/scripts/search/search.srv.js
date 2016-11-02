'use strict';

angular.module('clientApp')
  .factory('SearchSrv', ['$q', '$http','AppConfig', function ($q, $http, AppConfig) {
    
    var searchMovie = function(search){
      return $http.get(AppConfig.apiUrl+'/?s='+search);
    };

    var getMovie = function(id){
      return $http.get(AppConfig.apiUrl+'/?i='+id);
    }
  
//   var listMembers = function(){
//       return $http.get(AppConfig.apiUrl+'/members/', {});
//   };

//   var getMember = function(id){
//       return $http.get(AppConfig.apiUrl+'/members/'+id, {});
//   };

//   var createMember = function(entity){
//       return $http.post(AppConfig.apiUrl+'/members/', entity);
//   };

//   var updateMember = function(id, entity){
//       return $http.put(AppConfig.apiUrl+'/members/'+id, entity);
//   };

  return {
    searchMovie: searchMovie,
    getMovie: getMovie
    //   listMembers: listMembers,
    //   getMember: getMember,
    //   createMember: createMember,
    //   updateMember: updateMember
  };
}]);
