/**
 * @author <a href="mailto:lvhuikang@gmail.com">lvhuikang</a>
 * 2015/12/9
 */
var myApp = angular.module("myApp", []);
myApp.controller("shopCart", ['$scope',function ($scope) {
    $scope.items = [
        {title: 'Think IN Java', price: 66, quantity: 1},
        {title: 'HTTP', price: 33, quantity: 1}
    ];
    $scope.remove = function (index) {
        $scope.items.splice(index, 1);
    };
}]);
