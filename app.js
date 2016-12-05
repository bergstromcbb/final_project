(function() {
var app = angular.module("recipeCook", ["ngRoute"]); // create the module

app.config(function($routeProvider) {
    $routeProvider.when("/popular", {
        templateUrl: "views/popular.html",
        controller:""
    });
    $routeProvider.when("/custom", {
        templateUrl: "views/custom.html",
        controller: "enterFood"
    });
    $routeProvider.when("/pairings", {
        templateUrl: "views/pairings.html",
        controller: "displayFood"
    });
    $routeProvider.otherwise({
        template: "This is the default."
    });
});

app.factory("recipeStore", function(){
    var recipe={};
    return{
        setRecipe: function(food){
            recipe = food;
        },
        getRecipe: function(){
            return recipe;
        }
    };

});

app.controller('enterFood', function($scope, recipeStore){

  $scope.onclick = function(foodsToAdd){

    var recipe = $scope.recipeData;

    var foodsToMatch = [recipe.protein, recipe.vegetable, recipe.starch];

    recipeStore.setRecipe(recipe);

    console.log(foodsToMatch);
    location.hash = "/pairings";
};

});

app.controller('displayFood', function($scope, recipeStore){
  var recipe = recipeStore.getRecipe();

  $scope.recipe = recipe;
});

})();



