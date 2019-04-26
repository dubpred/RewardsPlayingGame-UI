var global;
var counter = 0;
var tier;

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
global = response;
  console.log(response);

displayResponse();
generateCircle();



});
}

function displayResponse() {

$('#name').text(global.name);
$('#tier').text(global.tier);
$('#pointsBalance').text(global.pointsBalance);
var totalPoints = global.pointsBalance+global.pointToNextLevel;
$("#totalForTier").text(totalPoints);

    var tierTitle = document.getElementById("tierTitle");
    tierTitle.style.display="block";

    var pointsTitle = document.getElementById("pointsTitle");
    pointsTitle.style.display="block";

    var pointsBalance = document.getElementById("pointsBalance");
    pointsBalance.style.display="block";

    var totalForTier = document.getElementById("totalForTier");
    totalForTier.style.display="block";



//    var trans_table = document.getElementById("transTable");
//    trans_table.style.display='block';
//
//    var data_table = document.getElementById("dataTable");
//    data_table.style.display='block';

//generateCircle();

}

function generateCircle() {

    var c = document.getElementById("container");
    if(c.style.display=="block"){
        c.style.display="none";
    }

        var bar = new ProgressBar.Circle(container, {
          color: '#000',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 4,
          trailWidth: 1,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: false
          },
          from: { color: '#fcd5b7', width: 1 },
          to: { color: '#ea6c0b', width: 4 },
          // Set default step function for all animate calls
          step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
              circle.setText('');
            } else {
              circle.setText(value+'%');
            }

          }
        });
        bar.text.style.fontFamily = 'PNCSans-Medium';
        bar.text.style.fontSize = '2rem';

//        var pointToNextLevel = document.getElementById("pointToNextLevel");
//        var pointsBalance = document.getElementById("pointsBalance");

        var pointToNextLevel = global.pointToNextLevel;
        var pointsBalance = global.pointsBalance;
        var fraction = pointsBalance/(pointsBalance+pointToNextLevel);

        bar.animate(fraction);  // Number from 0.0 to 1.0

//        table();
}

function table() {

var payload, myObj, myObj2, i, txt = "";

           payload = [
           {
               "name": "Aaron Pavlick",
               "pointsBalance": 600,
               "tier": 0,
               "pointToNextLevel": 1400,
               "table": [
                   {
                       "product": "PNC ONYX Card",
                       "transactionCatagory": "TRAVEL",
                       "vendor": null,
                       "transactionAmount": 50,
                       "pointAmount": 150
                   },
                   {
                       "product": "PNC ONYX Card",
                       "transactionCatagory": "TRAVEL",
                       "vendor": null,
                       "transactionAmount": 50,
                       "pointAmount": 150
                   },
                   {
                       "product": "PNC ONYX Card",
                       "transactionCatagory": "TRAVEL",
                       "vendor": null,
                       "transactionAmount": 50,
                       "pointAmount": 150
                   }
               ]
           }];

         myObj = payload[0].table;
         console.log("payload[4].table = "+myObj);


                    myObj2 = [
                         {
                         "name":"John",
                         "age":"30",
                         "cars":"Ford",
                         "animal":"dog",
                         "color":"green"},
                         {
                         "name":"Kevin",
                         "age":"20",
                         "cars":"Subaru",
                         "animal":"cat",
                         "color":"purple"},
                         {"name":"Mike",
                         "age":"40",
                         "cars":"Lexus",
                         "animal":"bird",
                         "color":"yellow"}
                         ];


                    txt += "<table class=\"table\"><thead><tr><th>Product</th><th>Transaction Category</th><th>Vendor</th><th>Transaction Amount</th><th>Point Amount</th></tr></thead><tbody>";
                    for (i = 0; i < myObj.length; i++) {
                        txt += "<tr><td class=>" + payload[0].table[i].product + "</td>";
                        txt += "<td>" + payload[0].table[i].transactionCatagory + "</td>";
                        txt += "<td>" + payload[0].table[i].vendor + "</td>";
                        txt += "<td>" + payload[0].table[i].transactionAmount + "</td>";
                        txt += "<td>" + payload[0].table[i].pointAmount + "</td></tr>";
                        }
                        txt += "</tbody></table>";
                    document.getElementById("demo").innerHTML = txt;

}