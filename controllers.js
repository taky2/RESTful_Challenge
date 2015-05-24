var ngApp = angular.module('ng-app', []);
ngApp.controller('repoCntrl', function($scope, $http) {
  
  $scope.searchFilter = null;
  $scope.commitsArray = [];


  $scope.searchFilter = function (commit) {
    var keyword = new RegExp($scope.commitFilter, 'i');
    return !$scope.commitFilter || keyword.test(commit.hash) || keyword.test(commit.message)
    || keyword.test(commit.date) || keyword.test(commit.author.raw);
  };


  $scope.commitsData = function(){
    $http.get('https://bitbucket.org/api/2.0/repositories/battlemidget/python-salesforce/commits')
    .success(function(data){
      $scope.commitsArray = data;
    });
  }
  $scope.commitsData();


  $scope.commitsArray2 = [];   
  $scope.commitsData2 = function(){
  	$http.get('https://bitbucket.org/api/2.0/repositories/battlemidget/python-salesforce/commits/?page=2')
  	.success(function(data){
  		$scope.commitsArray2 = data;
  	});
  }
  $scope.commitsData2();


  $scope.commitsArray3 = [];   
  $scope.commitsData3 = function(){
  	$http.get('https://bitbucket.org/api/2.0/repositories/battlemidget/python-salesforce/commits/?page=3')
  	.success(function(data){
  		$scope.commitsArray3 = data;
  	});
  }
  $scope.commitsData3();

});


