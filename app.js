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



////start the api controller
app.controller('displayJoke', function($http){
  var joke = recipeJoke.getRecipe();

  $scope.recipe = recipe;
});

})();




//API key FoodToFork---> 873e64556154738153c31e102ea6836f 

// var xhr = new XMLHttpRequest();

// xhr.onload = function() {
//   if (xhr.status === 200) {
//     console.log(xhr.status);
//     console.log(xhr.response);
//   }
// };


// xhr.open('GET', 'https://www.reddit.com/r/aww/.json', true);
// xhr.send(null);

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

// request.open("GET", "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random", true);

// request.setRequestHeader("X-Mashape-Key", "Qajqo1J4xdmshNRgkEbboXTYJFJYp19ne8jjsnq96e872bitro");

// request.send(null);


//////////////////////////////make controller and have angular inject $http server into it
//then add controller to page.

$http({
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random',
  headers: {
   'X-Mashape-Key': "Qajqo1J4xdmshNRgkEbboXTYJFJYp19ne8jjsnq96e872bitro"
    }
}).then(function successCallback(response) {
            document.body.className = 'ok';
            console.log(request.responseText);
  }, function errorCallback(response) {
            document.body.className = 'error';
  });



