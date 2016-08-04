angular.module('sampleApp').controller('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/product', {
            templateUrl: 'views/product.html',
            controller: 'ProductController'
        })

        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })

        .when('/todo', {
            templateUrl: 'views/todo.html',
            controller: 'TodoController'
        });

    $locationProvider.html5Mode(true);

}]);
