'use strict';

angular.module('iniciaApp', []);

angular.module('iniciaApp', [])
  .controller('AppCtrl', [ '$scope', function($scope){

    var vm = this;

    vm.title = "Sails in action";


    io.socket.on('user', function(event){
      console.log(event);
      vm.find();
    });

    vm.find = function(){
      io.socket.get('/user', function(data){
        vm.users = data;
        $scope.$apply();
      });
    }

    vm.find();

  }]);
