(function ()
{
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope','$filter','$injector'];

function LunchCheckController($scope,$filter,$injector){
$scope.name = "";
$scope.msg="";


$scope.check_if_too=function(){
  var itemCount =0;
  if ($scope.name != ""){
   itemCount = getItemCount($scope.name);
  console.log(itemCount);

  if(itemCount<=3)
  {
    $scope.msg = "Enjoy";
  }
  else if (itemCount>3)
  {
    $scope.msg = "Too much";
  }
  }else {
  $scope.msg="Pls Enter data First";
  }
  console.log($scope.msg);

};
console.log($injector.annotate(LunchCheckController));
}

function getItemCount(Items) {
  var arrayOfStrings = Items.split(',');
  return arrayOfStrings.length;
}



}
)();
