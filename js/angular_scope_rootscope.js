/**
 * Created by Administrator on 2015/11/17.
 */
var app = angular.module('MyApp', []);
app.controller('MyController1', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.name = "lhk";
}]);

app.controller('MyCtl2', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.name = $rootScope.name;
}]);