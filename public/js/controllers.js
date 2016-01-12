angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope,message) {
    $scope.data ={date:""};
 $scope.today = function() {
    $scope.data.date = new Date();
  };
   $scope.clear = function() {
    $scope.data.date= null;
  };
    $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };
   $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };
  $scope.today();
  $scope.world= "test";

    $scope.hstep = 1;
  $scope.mstep = 1;
    $scope.ismeridian = true;


  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
  $scope.sendData = function(data){
    console.log(data);
     message.sentMessage(data).then(function(resp) {
    $scope.result = resp.data;
    console.log(resp)
    alert("Message Sent.");
  });
  };
  
});
