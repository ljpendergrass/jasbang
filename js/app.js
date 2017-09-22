var myApp = angular.module('myApp',[
  'ngRoute',
  'spellControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/spellbook', {
    templateUrl: 'partials/spellbook.html',
    controller: 'ListController'
  }).
  otherwise({
    redirectTo: '/spellbook'
  })
}]);
