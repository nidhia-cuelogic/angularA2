function SimpleController($scope) {
    $scope.dataArray = [
        {name: 'nidhi', age: 28, designation: 's/w'},
        {name: 'Kanwal', age: 26, designation: 'sr. s/w'},
        {name: 'viky', age: 27, designation: 'dev'},
        {name: 'Gurjot', age: 24, designation: 'dev1'}
    ]
}
function customUrl($scope,$routeParams){
    $scope.model={
        message:$routeParams.id
    };
    
}
var controllerArray = {};
controllerArray.SimpleController = SimpleController;
var demoApp = angular.module('demoApp', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider.when('/', {
                controller: 'SimpleController',
                templateUrl: 'view/main.html'
            }).when('/view1', {
                templateUrl: 'view/view1.html'
            }).when('/view2', {
                templateUrl: 'view/view2.html'
            }).when('/helloworld', {
                templateUrl: 'view/helloworld.html'
            }).when('/customUrl/:id', {
                controller:'customUrl',
                templateUrl: 'view/customUrl.html'
            }).otherwise({redirectTo: '/'});
        })
        .controller(controllerArray)
        .controller('customUrl',customUrl)
        .directive('footer', function() {
            return {
                templateUrl: "view/partials/footer.html"
            }
        }).directive('header', function() {
            return {
                templateUrl: "view/partials/header.html"
            }
        });