angular.module('starter.services', [])
.factory('message',['$http',function($http){
return{
  sentMessage:function(data){
    var accountid="is";
    var password="wavecell";
    var subaccountid="is_std";
    var datetime = data.date+'T'+data.time;
    alert(datetime);
    alert(data);
    // return $http.get('http://wms1.wavecell.com/Send.asmx/SendMT?AccountId='+accountid+'&Body='+data.body+'&Destination='+data.destination+'&Encoding=ASCII&Password='+password+'&ScheduledDateTime=&Source='+data.source+'&SubAccountId='+subaccountid+'&UMID='); 
  //   .then(function successCallback(response) {
  //     console.log("success");
  //     console.log(response);
  //   // this callback will be called asynchronously
  //   // when the response is available
  // }, function errorCallback(response) {
  //     console.log("failed");
  //     console.log(response);
  //   // called asynchronously if an error occurs
  //   // or server returns response with an error status.
  // });
  }
}

}]);