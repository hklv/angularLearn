/**
 * @author <a href="mailto:lvhuikang@gmail.com">lvhuikang</a>
 * 2015/12/10
 */
var myApp_ngShow = angular.module("myApp_ngShow");
var ng_showController = myApp_ngShow.controller("ng_showController", ['$scope', function ($scope) {
    $scope.isDisabled = false;
    $scope.stun = function () {
        $scope.isDisabled = true;
    }
}]);