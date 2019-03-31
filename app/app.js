var app = angular.module('myApp', ['ngMaterial']);

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
});