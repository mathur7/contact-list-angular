'use strict';
angular.module("contactApp", [])
  .controller('ContactController', function($scope, $http){
    function fetch(){
      $http.get("https://candidate-test.herokuapp.com/contacts")
       .success(function(response){ $scope.contacts = response; });
    };
    fetch();
  })