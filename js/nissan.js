var app = angular.module("app.nissan", ["ngRoute", "mySvc"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/nissan", {
        templateUrl: "./view/nissan.html",
        controller: "nissanCtrl"
    })
})
app.controller("nissanCtrl", function ($scope, todoReq) {
    $scope.arr = [];
    todoReq.getWebsite().then(function (response) {
            $scope.arr = response.data.results;
            console.log($scope.arr);
        },
        function (err) {
            console.log(err.statusText + " " + err.status);
            console.log(err)

        });


});
