/**
 * @author <a href="mailto:lvhuikang@gmail.com">lvhuikang</a>
 * 2015/12/22
 */
var appForm = angular.module("appForm", []);
appForm.controller("formController", function ($scope) {
    $scope.message = '';
    $scope.addUser = function () {
        $scope.message = "thank you " + $scope.user.first + " we add you";
    };
});