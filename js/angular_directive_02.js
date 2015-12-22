/**
 * Created by Administrator on 2015/11/17.
 */
var app2 = angular.module('MyApp2', []);
app2.directive('hello2', function () {
    return {
        restrict: 'E',
        template: '<div>Hi there <span ng-transclude></span></div>',
        transclude: true,
        replace:true

    };
});
