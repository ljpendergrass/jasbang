var spellControllers = angular.module('spellControllers', []);

spellControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/spells.json').then(function(response){
    // console.log(response.data); // test
    $scope.spells = response.data;

    // filter defaults
    $scope.Filter = new Object();
    $scope.Filter.casterClass = {
      'bard' : 'bard',
      'cleric' : 'cleric',
      'clerictrickery' : 'clerictrickery',
      'druid' : 'druid',
      'paladin' : 'paladin',
      'ranger' : 'ranger',
      'sorcerer' : 'sorcerer',
      'warlock' : 'warlock',
      'wizard' : 'wizard'
    };
    //default order
    $scope.OrderFilter = 'name';
    });
}]);

myApp.filter('searchFilter',function($filter) {
  return function(items,searchFilter) {
    var isSearchFilterEmpty = true;
    angular.forEach(searchFilter, function(searchstring) {
      if(searchstring !=null && searchstring !=""){
        isSearchFilterEmpty= false;
      }
    });
    if(!isSearchFilterEmpty){
                var result = [];
                angular.forEach(items, function(item) {
                    var isFound = false;
                     angular.forEach(item, function(term,key) {
                         if(term != null &&  !isFound){
                             term = term.toString();
                             term = term.toLowerCase();
                                angular.forEach(searchFilter, function(searchstring) {
                                    searchstring = searchstring.toLowerCase();
                                    if(searchstring !="" && term.indexOf(searchstring) !=-1 && !isFound){
                                       result.push(item);
                                        isFound = true;
                                    }
                                });
                         }
                            });
                       });
            return result;
        }else{
        return items;
        }
    }
});
