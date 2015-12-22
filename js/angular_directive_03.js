/**
 * Created by Administrator on 2015/11/17.
 */
var app3 = angular.module('MyApp3', []);
app3.directive('hello3', function () {
    return {
        restrict: 'E',
        template: '<span>Hi There</span>',
        replace: true
    };
});
app3.controller('myCtl',function($scope){
    $scope.things=[1,2,3,4,5,6];
});
