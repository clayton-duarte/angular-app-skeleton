//Define the aplication
var app = angular.module("myApp", ["ngRoute", "angular-md5"]);
//routes
app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider.when("/", {
        templateUrl: "templates/app.html",
        controller: "appCtrl"
    }).when("/example", {
        templateUrl: "templates/example.html",
        controller: "boardCtrl as example"
    }).when("/404", {
        templateUrl: "templates/404.html",
        controller: "404Ctrl"
    }).otherwise("/404");
});