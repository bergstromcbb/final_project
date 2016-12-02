(function() {
var app = angular.module("recipeCook", ["ngRoute"]); // create the module

app.config(function($routeProvider) {
    $routeProvider.when("/popular", {
        templateUrl: "views/popular.html"
    });
    $routeProvider.when("/custom", {
        templateUrl: "views/custom.html",
        controller: ""
    });
    $routeProvider.when("/pairings", {
        templateUrl: "views/pairings.html",
        controller: ""
    });
    $routeProvider.otherwise({
        template: "This is the default."
    });
});

})();