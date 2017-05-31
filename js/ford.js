var app = angular.module("app.ford", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/ford", {
        templateUrl: "./view/ford.html",
        controller: "fordCtrl"
    })
})
app.controller("fordCtrl", function ($scope) {
    $scope.names = [
        {
            name: "FORD-5",
            price: "$45000",
             year: 2017,
            img: "http://www.almrsal.com/wp-content/uploads/2013/02/images4.jpg"
                },
        {
            name: "FORD-6",
            price: "$56000",
             year: 2018,
            img: "http://www.almuraba.net/2012/Ford-Edge/draft_lens17672510module148447581photo_12984327632012-ford-edge.jpg"
                },
        {
            name: "FORD-z",
            price: "$50000",
             year: 2017,
            img: "http://www.speeed.com/GUI/Upload/ford_explorer-fwrd_ksblwrr.jpg"
                }
            ]
})