var app = angular.module("myApp", ["ngRoute", "app.bmw", "app.ford", "app.nissan", "mySvc"])
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");

})
app.controller("mainCtrl", function ($scope) {
    
})
