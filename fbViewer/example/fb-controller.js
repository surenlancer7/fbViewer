(function() {
    'use strict';
    var module = angular.module('fbController',['formBuilder']);
    
    module.controller('fbController', function($scope) {
    $scope.html = [{"id":"textbox","component":"textInput","editable":false,"index":0,"label":"Name","description":"Your name","placeholder":"Your name","options":[],"required":true,"validation":"/.*/"}];    
    $scope.goToFormViewer = function(input) {
        console.log(input);
        $scope.html = [];
        $scope.html = input;
      };

    });
})();