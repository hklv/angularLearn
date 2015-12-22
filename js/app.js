/**
 * Created by Administrator on 2015/11/17.
 */
var phoneCatCtl = angular.module('phoneCtl', ['ngRoute',
    'phonecatControllers']);

phoneCatCtl.config('routeProvider', function ($routeProvider) {
    $routeProvider.when('/phone', {
        templateUrl: '../web/view/angular_directive_01.html',
        controller: 'PhoneDetail'
    }).otherwise({redirectTo: '/phone'})
});