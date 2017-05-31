
var app = angular.module("mySvc", []);
app.service("todoReq", function ($http, $sce) {
    var url = "https://itunes.apple.com/search?term=beyonce&entity=musicVideo"
    var trust = $sce.trustAsResourceUrl(url)
    this.getWebsite = function () {
        return $http.jsonp(trust);
    };

});

