var ngApp = angular.module('ng-app', []);

ngApp.controller('repoCntrl', function($scope, $http) {

  $scope.repoData = function(){

    $http.get('https://bitbucket.org/api/2.0/repositories/battlemidget/python-salesforce/')
      .success(function(data){
        $scope.mainRepo = data;

      });
  }


  $scope.commitsData = function(){
  
    $http.get('https://bitbucket.org/api/2.0/repositories/battlemidget/python-salesforce/commits')
    .success(function(data){
      $scope.foo = data;
    });

  }

  $scope.repoData();
  $scope.commitsData();

});
