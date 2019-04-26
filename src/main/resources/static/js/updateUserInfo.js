function sendRequest(){
    var userId = $('#UserId').val();


var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:8081/api/user?userId="+userId,
  "method": "GET",
  "headers": {
    "Content-Type": "application/json",
//    "Access-Control-Allow-Origin": "*",
//    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
//    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
//    "User-Agent": "PostmanRuntime/7.11.0",
    "Accept": "*/*",
    "Cache-Control": "no-cache",
    "Postman-Token": "92307aeb-dff6-474e-95cc-6e83b6251096,d2be72c5-4ae3-4d96-805c-0127db367824",
//    "Host": 'localhost:8081',
    "accept-encoding": "gzip, deflate",
    "Connection": "keep-alive",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": ""
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
//    $('#UserName').text(response.UserName);
//    $('#ItemName').text(response.ItemName);

}

function displayResponse() {
    var trans_table = document.getElementById("transTable");
    trans_table.style.display='block';

    var data_table = document.getElementById("dataTable");
    data_table.style.display='block';

}