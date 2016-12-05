(function() {
var app = angular.module("recipeCook", ["ngRoute"]); // create the module

app.config(function($routeProvider) {
    $routeProvider.when("/popular", {
        templateUrl: "views/popular.html"
    });
    $routeProvider.when("/custom", {
        templateUrl: "views/custom.html",
        controller: ""
    });
    $routeProvider.when("/pairings", {
        templateUrl: "views/pairings.html",
        controller: ""
    });
    $routeProvider.otherwise({
        template: "This is the default."
    });
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

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState === 4) {
        if (request.status === 200) {
            document.body.className = 'ok';
            console.log(request.responseText);
        } else {
            document.body.className = 'error';
        }
    }
};
request.open("GET", 'http://food2fork.com/api/get?key=873e64556154738153c31e102ea6836f', true);
//http://food2fork.com/api/search?key=873e64556154738153c31e102ea6836f 
//http://food2fork.com/api/get?key=873e64556154738153c31e102ea6836f
//http://www.recipepuppy.com/api/
request.send(null);






