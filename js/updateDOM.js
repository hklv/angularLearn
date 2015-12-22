/**
 * @author <a href="mailto:lvhuikang@gmail.com">lvhuikang</a>
 * 2015/12/22
 */
var appModule = angular.module("appModule", []);

appModule.controller("appController", function ($scope) {
    $scope.information= {text: 'nothing click yet'};
    $scope.clickUnfocused = function () {
        $scope.information.text = 'unfocused button clicked';
    };

    $scope.clickFocused = function () {
        $scope.information.text = 'focus button clicked';
    }
});


appModule.directive('ngbkFocus', function () {
    return {
        link: function (scope, elements, attrs, controller) {
            elements[0].focus();
        }
    };
});