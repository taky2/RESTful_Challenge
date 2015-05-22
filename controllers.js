var ngApp = angular.module('ng-app', []);
ngApp.controller('repoCntrl', function($scope, $http) {

  $scope.commitArray1 = [];
  $scope.commitsData1 = function(){
  
    $http.get('https://bitbucket.org/api/2.0/repositories/battlemidget/python-salesforce/commits')
      .success(function(data){
        $scope.commitArray1 = data;
    });
  }
  $scope.commitsData1();

  $scope.commitArray2 = [];
  $scope.commitsData2 = function(){
  
    $http.get('https://bitbucket.org/api/2.0/repositories/battlemidget/python-salesforce/commits?page=2')
      .success(function(data){
        $scope.commitArray2 = data;
    });
  }
  $scope.commitsData2();

  $scope.commitArray3 = [];
  $scope.commitsData3 = function(){
  
    $http.get('https://bitbucket.org/api/2.0/repositories/battlemidget/python-salesforce/commits?page=3')
      .success(function(data){
        $scope.commitArray3 = data;
    });
  }
  $scope.commitsData3();
});
