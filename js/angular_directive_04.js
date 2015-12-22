/**
 * Created by Administrator on 2015/11/17.
 */
var expandModule = angular.module('expandModule', []);

expandModule.directive('expander', function () {
    return {
        restrict: 'E',
        template: '<div>'
        + '<div class="title" ng-click="toggle()">{{title}}</div>'
        + '<div class="body" ng-show="showMe" ng-transclude></div>'
        + '</div>',
        replace: true,
        transclude: true,
        scope: {
            title: '=expanderTitle'
        },
        link: function (scope, element, attrs) {
            scope.showMe = false;
            scope.toggle = function () {
                scope.showMe = !scope.showMe;
            }
        }
    };
});

expandModule.controller('SomeController', function ($scope) {
    $scope.title = '点击展开';
    $scope.text = '这里是内容';
});