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

  $scope.recipeArray = [];

  console.log(foodSearchString);

  $http({
    method: 'GET',
    url: 
      "testInfo.json"
    // 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients' + 
    // '?fillIngredients=false&ingredients=' + encodeURIComponent(foodSearchString)  +'&limitLicense=false&number=5&ranking=1',
    // headers: {
    //  'X-Mashape-Key': "Qajqo1J4xdmshNRgkEbboXTYJFJYp19ne8jjsnq96e872bitro"
    //   }
  }).then(function successCallback(response) {

    document.body.className = 'ok';

    console.log(response);

    response.data.forEach(function(recipe) {
      console.log(recipe);
      var recipeObj = {
        title: recipe.title,
        image: recipe.image,
        id: recipe.id
      };

      $scope.recipeArray.push(recipeObj);     
      getRecipe(recipeObj.id);
    });

  
    // $scope.entries = response.data.map(function(recipe){
    //   recipeId = recipe.id;
    //   getRecipe(recipeId);
    //   return {
    //     title: recipe.title,
    //     image: recipe.image,
    //     id: recipe.id,
    //   };
    // });
      console.log($scope.recipeArray);
    //   console.log($scope.entries);
    }, function errorCallback(response) {
      document.body.className = 'error';
    });

  function getRecipe(recipeId) {
    $http({
      method: "GET",
      // url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + recipeId + '/information',
      headers: {
       // 'X-Mashape-Key': "Qajqo1J4xdmshNRgkEbboXTYJFJYp19ne8jjsnq96e872bitro"
        }
    }).then(function successCallback(recipeJson) {
      var sourceUrl = recipeJson.data.sourceUrl;
      $scope.recipeArray.forEach(function(recipe) {
        console.log(recipe);
        recipe.sourceUrl = sourceUrl;
      })
    });
  }

  setTimeout(function() {
    console.log($scope.recipeArray);
  }, 5000);

});

app.controller('displayJoke', function($scope, $http){

  $http({
    method: 'GET',
    url: 
    "testInfo.json"
  // 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random',
  // headers: {
  //  'X-Mashape-Key': "mB6qAXcS2dmshYvx3CSdxbUsZFbbp1qpWv1jsnGXmktEnkbIl4"
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
    url: 
    "testInfo.json"
  // 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=5',
  // headers: {
  //  'X-Mashape-Key': "mB6qAXcS2dmshYvx3CSdxbUsZFbbp1qpWv1jsnGXmktEnkbIl4"
  //   }
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

