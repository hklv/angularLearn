/**
 * @author <a href="mailto:lvhuikang@gmail.com">lvhuikang</a>
 * 2015/12/9
 */
var myApp1 = angular.module("myApp1", []);
/*var myController = myApp1.controller("myController", function ($scope) {
 $scope.checkBoxIn = true;
 });*/

var startUpController = myApp1.controller("startUpController",function startUpController($scope){
        $scope.computeNeeded = function(){
            $scope.needed = $scope.startingEstimate * 10;
        };

        $scope.requestFunding = function(){
            window.alert("Sorry, please get more customers first.");
        };

});