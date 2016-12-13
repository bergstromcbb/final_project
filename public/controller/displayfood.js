app.controller('displayFood', function($scope, recipeStore, $http){

  var recipe = recipeStore.getRecipe();

  $scope.recipe = recipe;

  var foodSearchString = recipe.join(",");

  $scope.recipeArray = [];

  console.log(foodSearchString);

  $http({
    method: 'GET',  

    url:

    'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients' +
    '?fillIngredients=false&ingredients=' + encodeURIComponent(foodSearchString)  +'&limitLicense=false&number=5&ranking=1',
    headers: {
     'X-Mashape-Key': "mB6qAXcS2dmshYvx3CSdxbUsZFbbp1qpWv1jsnGXmktEnkbIl4"
      }
  
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

      console.log("hello");

      $scope.recipeArray.push(recipeObj);
      getRecipe(recipeObj);
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

  function getRecipe(recipe) {
    $http({
      method: "GET",
       url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + recipe.id + '/information',
      headers: {
        'X-Mashape-Key': "mB6qAXcS2dmshYvx3CSdxbUsZFbbp1qpWv1jsnGXmktEnkbIl4"
        }
    }).then(function successCallback(recipeJson) {
      var sourceUrl = recipeJson.data.sourceUrl;
      recipe.sourceUrl = sourceUrl;
    });
  }

  setTimeout(function() {
    console.log($scope.recipeArray);
  }, 5000);

});