angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  // console.log("Loggin links", Links);
  $scope.link = {
    links: null
  };


  $scope.addLink = function(link){


    // console.log("Loggin location", $location);
    Links.addLink().then(function(){
      $scope.link.links = link;
    });
  };
  $scope.addLink();
});
