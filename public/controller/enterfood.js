app.controller('enterFood', function($scope, recipeStore){

  $scope.onclick = function(foodsToAdd){

    var recipe = $scope.recipeData;

    var foodsToMatch = [recipe.protein, recipe.vegetable, recipe.starch];

    recipeStore.setRecipe(foodsToMatch);

    console.log(foodsToMatch);

    location.hash = "/results";
  };

});

//goes with display food
