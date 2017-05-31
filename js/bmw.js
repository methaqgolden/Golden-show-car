var app = angular.module("app.bmw", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/bmw", {
        templateUrl: "./view/bmw.html",
        controller: "bmwCtrl"
    })
})
app.controller("bmwCtrl", function ($scope) {
    $scope.names = [
        {
            name: "BMW-5",
            price: "$65000",
            year: 2018,
            img: "http://1.bp.blogspot.com/-7qbTzVqBvd8/ThzXZa7EXBI/AAAAAAAASIw/nRHaVFsfUkM/s1600/BMW-750Li-2011-02.jpg"
                },
        {
            name: "BMW-6",
            price: "$55000",
             year: 2017,
            img: "https://www.almrsal.com/wp-content/uploads/2014/03/The-back-of-the-car-2015-BMW-I8.jpg"
                },
        {
            name: "BMW-X5",
            price: "$70000",
             year: 2018,
            img: "http://www.almrsal.com/wp-content/uploads/2016/04/bmw-class-7-2017-5.jpg"
                }
            ]
})
