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
    controller: "displayJoke"
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

app.factory("recipeStore", function(){
  var recipe=[];
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
    
    recipeStore.setRecipe(foodsToMatch);

    console.log(foodsToMatch);

    location.hash = "/results";
  };

});

app.controller('displayFood', function($scope, recipeStore, $http){

  var recipe = recipeStore.getRecipe();

  $scope.recipe = recipe;

  var foodSearchString = recipe.join(",");

  console.log(foodSearchString);

  $http({
    method: 'GET',
    url: 
    "testInfo.json"
  // 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients' + 
  // '?fillIngredients=false&ingredients=' + encodeURIComponent(foodSearchString)  +'&limitLicense=false&number=5&ranking=1',
  // headers: {
   // 'X-Mashape-Key': "Qajqo1J4xdmshNRgkEbboXTYJFJYp19ne8jjsnq96e872bitro"
    // }
}).then(function successCallback(response) {

  document.body.className = 'ok';
console.log(response);
  $scope.entries = response.data.map(function(recipe){
    return {
      title: recipe.title,
      image: recipe.image,
      link: recipe.link,
      // time: recipe.readyInMinutes,
      // ingredients: recipe.extendedIngredients.map(function(ingredient){
      //   return {
      //     name: ingredient.originalString
      //   };
      // })
    };
  });
  
  console.log($scope.entries);
}, function errorCallback(response) {
  document.body.className = 'error';
});


});

app.controller('displayJoke', function($scope, $http){

  $http({
    method: 'GET',
    url: "testInfo.json"
  // 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random',
  // headers: {
  //  'X-Mashape-Key': "Qajqo1J4xdmshNRgkEbboXTYJFJYp19ne8jjsnq96e872bitro"
  //   }
}).then(function successCallback(response) {
  document.body.className = 'ok';
  $scope.joke = response.data.text;
  console.log(response.data);
}, function errorCallback(response) {
  document.body.className = 'error';
});

});


app.controller('displayRecipes', function($scope, $http){

  $http({
    method: 'GET',
    url: "testInfo.json"
  // 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=5',
  // headers: {
  //  'X-Mashape-Key': "Qajqo1J4xdmshNRgkEbboXTYJFJYp19ne8jjsnq96e872bitro"
  //   }
  // url: 
  // 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=5',
  // headers: {
   // 'X-Mashape-Key': "Qajqo1J4xdmshNRgkEbboXTYJFJYp19ne8jjsnq96e872bitro"
 }).then(function successCallback(response) {
  document.body.className = 'ok';
  $scope.recipes = response.data.recipes.map(function(recipe){
    return {
      title: recipe.title,
      image: recipe.image,
      time: recipe.readyInMinutes,
      ingredients: recipe.extendedIngredients.map(function(ingredient){
        return {
          name: ingredient.originalString
        };
      })
    };
  });
  console.log(response.data);
  console.log($scope.recipes);
}, function errorCallback(response) {
  document.body.className = 'error';
});

});

