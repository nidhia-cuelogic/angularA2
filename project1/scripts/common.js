function SimpleController($scope) {
    $scope.dataArray = [
        {name: 'nidhi', age: 28, designation: 's/w'},
        {name: 'Kanwal', age: 26, designation: 'sr. s/w'},
        {name: 'viky', age: 27, designation: 'dev'},
        {name: 'Gurjot', age: 24, designation: 'dev1'}
    ]
}
var controllerArray = {};
controllerArray.SimpleController = SimpleController;
var demoApp = angular.module('demoApp', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider.when('/', {
                controller: 'SimpleController',
                templateUrl: 'view/main.html'
            });
        })
        .controller(controllerArray);