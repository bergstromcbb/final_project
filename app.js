var app = angular.module("recipeCook", ["ngRoute"]); // create the module

app.config(function($routeProvider) {
  $routeProvider.when("/popular", {
    templateUrl: "views/popular.html",
    controller:"displayRecipes"
  });
  $routeProvider.when("/custom", {
    templateUrl: "views/custom.html",
    controller: "enterFood"
  });
  $routeProvider.when("/pairings", {
    templateUrl: "views/pairings.html",
    controller: "displayPairings"
  });
  $routeProvider.when("/results", {
    templateUrl: "views/results.html",
    controller: "displayFood"
  });
  $routeProvider.when("/splash", {
    templateUrl: "views/splash.html",
    controller:""
  });
  $routeProvider.otherwise({
    redirectTo: "/splash"
  });

});



