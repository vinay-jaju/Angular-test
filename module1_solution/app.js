(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){

$scope.textOutput="";
  $scope.checkingLunch=function(){
    var listItems=$scope.lunchItems;
    if(listItems==null || listItems==""){
      $scope.textOutput="Please enter data first";
    }
    else{
    var totalItems=listItems.split(",").length;
    if(totalItems>3){
      $scope.textOutput="Too much!";
    }
    else{
       $scope.textOutput="Enjoy!";
    }
  }
}
  
};

})();
