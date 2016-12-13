app.controller('displayRecipes', function($scope, $http){

  $http({
    method: 'GET',
    url:

  'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=5',
  headers: {
   'X-Mashape-Key': "mB6qAXcS2dmshYvx3CSdxbUsZFbbp1qpWv1jsnGXmktEnkbIl4"
    }

 }).then(function successCallback(response) {
  document.body.className = 'ok';
  $scope.recipes = response.data.recipes.map(function(recipe){
    return {
      title: recipe.title,
      image: recipe.image,
      time: recipe.readyInMinutes,
      link: recipe.sourceUrl,
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