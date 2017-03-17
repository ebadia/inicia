'use strict';

angular.module('iniciaApp', []);

angular.module('iniciaApp', [])
  .controller('AppCtrl', ['$scope', function($scope){
    io.socket.get('/user', function(data){
      $scope.users = data;
      $scope.$apply();
    })
  }]);
