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
