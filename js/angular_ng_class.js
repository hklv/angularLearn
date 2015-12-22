/**
 * @author <a href="mailto:lvhuikang@gmail.com">lvhuikang</a>
 * 2015/12/21
 */

var appTest = angular.module("appTest", []);
var appController = appTest.controller("appController", function ($scope) {
    $scope.isError = false;
    $scope.isWarning = false;
    $scope.showError = function () {
        $scope.messageText = "this is a error!";
        $scope.isError = true;
        $scope.isWarning = false;
    };
    $scope.showWarning = function () {
        $scope.messageText = "this is a warning";
        $scope.isError = false;
        $scope.isWarning = true;
    };
    $scope.directory = [{name: 'The Handsome Heifer', cuisine: 'BBQ'},
        {name: 'Green\'s Green Greens', cuisine: 'Salads'},
        {name: 'House of Fine Fish', cuisine: 'Seafood'}];
    $scope.selectRestaurant = function (row) {
        $scope.selectedRow = row;
    };

    $scope.imgSrc = 'test.JPEG';
});