(function() {
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
    $routeProvider.otherwise({
        template: "This is the default."
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

    recipeStore.setRecipe(recipe);

    console.log(foodsToMatch);
    location.hash = "/results";
};

});

app.controller('displayFood', function($scope, recipeStore){
  var recipe = recipeStore.getRecipe();

  $scope.recipe = recipe;

});

<<<<<<< HEAD


app.controller('displayJoke', function($scope, $http){

$http({
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random',
  headers: {
   'X-Mashape-Key': "Qajqo1J4xdmshNRgkEbboXTYJFJYp19ne8jjsnq96e872bitro"
    }
}).then(function successCallback(response) {
            document.body.className = 'ok';
            $scope.joke = response.data.text;
            console.log(response.data);
  }, function errorCallback(response) {
            document.body.className = 'error'
        });
});

app.controller('displayRecipes', function($scope, $http){

$http({
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=5',
  headers: {
   'X-Mashape-Key': "Qajqo1J4xdmshNRgkEbboXTYJFJYp19ne8jjsnq96e872bitro"
    }
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
            console.log($scope.recipes)
  }, function errorCallback(response) {
            document.body.className = 'error'
        });
});



})();

// var request = new XMLHttpRequest();
// request.onreadystatechange = function() {
//     if (request.readyState === 4) {
//         if (request.status === 200) {
//             document.body.className = 'ok';
//             console.log(request.responseText);
//         } else {
//             document.body.className = 'error';
//         }
//     }
// };

<<<<<<< HEAD
// //http://food2fork.com/api/search?key=873e64556154738153c31e102ea6836f
// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random")
// .header("X-Mashape-Key", "Qajqo1J4xdmshNRgkEbboXTYJFJYp19ne8jjsnq96e872bitro")
// .header("Accept", "application/json")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });
// //http://food2fork.com/api/get?key=873e64556154738153c31e102ea6836f
// //http://www.recipepuppy.com/api/
request.send(null);
=======
// request.open("GET", "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random", true);

// request.setRequestHeader("X-Mashape-Key", "Qajqo1J4xdmshNRgkEbboXTYJFJYp19ne8jjsnq96e872bitro");


// request.send(null);

/////////*********???????????????////////////

>>>>>>> 2d360584a2b3b246fbce98232f2c2169419d2843
