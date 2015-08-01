angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // Will move to factory later
  // console.log("Loggin $scope", $scope);

  $scope.data = {
    links: null,
    
  };
  

  
  $scope.getLinks = function(){
    
    Links.getData().then(function(data){
      $scope.data.links = data;
    });    
  }


  

  $scope.getLinks();
  
});





