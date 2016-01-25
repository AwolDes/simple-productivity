angular.module('app.controllers', [])

.controller('mainCtrl', function($scope, $http) {
    $scope.q1 = "What are your 3 goals today"
    $scope.an1 = {};
    
    $scope.add = function(){
        console.log($scope.an1);
    }
})