app.controller('displayPairings', function($scope, $http){

  $scope.sideArray = [];


  $http({
    method: 'GET',  

    url:

    'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search' +
    '?type=side+dish&limitLicense=false&number=5',
    headers: {
     'X-Mashape-Key': "mB6qAXcS2dmshYvx3CSdxbUsZFbbp1qpWv1jsnGXmktEnkbIl4"
      }
  
  }).then(function successCallback(response) {

    document.body.className = 'ok';

    console.log(response);

    response.data.results.forEach(function(recipe) {
      console.log(recipe);
      var recipeObj = {
        title: recipe.title,
        image: recipe.imageUrls,
        id: recipe.id
      };

      $scope.sideArray.push(recipeObj);
      getRecipe(recipeObj);
    });
      console.log($scope.sideArray);
    //   console.log($scope.entries);
    }, function errorCallback(response) {
      document.body.className = 'error';
    });

  $scope.dessertArray = [];

  $http({
    method: 'GET',  

    url:

    'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search' +
    '?type=dessert&limitLicense=false&number=5',
    headers: {
     'X-Mashape-Key': "mB6qAXcS2dmshYvx3CSdxbUsZFbbp1qpWv1jsnGXmktEnkbIl4"
      }
  
  }).then(function successCallback(response) {

    document.body.className = 'ok';

    console.log(response);

    response.data.results.forEach(function(recipe) {
      console.log(recipe);
      var recipeObj = {
        title: recipe.title,
        image: recipe.imageUrls,
        id: recipe.id
      };

      $scope.dessertArray.push(recipeObj);
      getRecipe(recipeObj);
    });
      console.log($scope.dessertArray);
    //   console.log($scope.entries);
    }, function errorCallback(response) {
      document.body.className = 'error';
    });

  $scope.drinksArray = [];

  $http({
    method: 'GET',  

    url:

    'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search' +
    '?type=drink&limitLicense=false&number=5',
    headers: {
     'X-Mashape-Key': "TdZaGg4EqomshnhTijbPEVMKcxAGp1ph81AjsnkQ8nsV88618i"
      }
  
  }).then(function successCallback(response) {

    document.body.className = 'ok';

    console.log(response);

    response.data.results.forEach(function(recipe) {
      console.log(recipe);
      var recipeObj = {
        title: recipe.title,
        image: recipe.imageUrls,
        id: recipe.id
      };

      $scope.drinksArray.push(recipeObj);
      getRecipe(recipeObj);
    });
      console.log($scope.drinksArray);
    //   console.log($scope.entries);
    }, function errorCallback(response) {
      document.body.className = 'error';
    });

  function getRecipe(recipe) {
    $http({
      method: "GET",
       url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + recipe.id + '/information',
      headers: {
        'X-Mashape-Key': "TdZaGg4EqomshnhTijbPEVMKcxAGp1ph81AjsnkQ8nsV88618i"
        }
    }).then(function successCallback(recipeJson) {
      var sourceUrl = recipeJson.data.sourceUrl;
      recipe.sourceUrl = sourceUrl;
    });
  }

  // setTimeout(function() {
  //   console.log($scope.drinksArray);
  // }, 5000);

});