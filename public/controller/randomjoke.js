app.controller('displayJoke', function($scope, $http){

  $http({
    method: 'GET',
    url:
  'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random',
  headers: {
   'X-Mashape-Key': "Qajqo1J4xdmshNRgkEbboXTYJFJYp19ne8jjsnq96e872bitro"
     }

}).then(function successCallback(response) {
  document.body.className = 'ok';
  $scope.joke = response.data.text;
  console.log(response.data);
}, function errorCallback(response) {
  document.body.className = 'error';
});

});