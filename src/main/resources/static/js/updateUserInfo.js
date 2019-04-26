var global;

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
//
//$('#name').text(response.name);
//$('#pointsBalance').text(response.pointsBalance);
//$('#tier').text(response.tier);
//$('#pointToNextLevel').text(response.pointToNextLevel);
////table needed
//$('#product0').text(response.table[0].product);
//$('#product1').text(response.table[1].product);
//$('#product2').text(response.table[2].product);
////$('#product3').text(response.table[3].product);
////$('#product4').text(response.table[4].product);
//$('#transactionCatagory0').text(response.table[0].transactionCatagory);
//$('#transactionCatagory1').text(response.table[1].transactionCatagory);
//$('#transactionCatagory2').text(response.table[2].transactionCatagory);
////$('#transactionCatagory3').text(response.table[3].transactionCatagory);
////$('#transactionCatagory4').text(response.table[4].transactionCatagory);
//$('#vendor0').text(response.table[0].vendor);
//$('#vendor1').text(response.table[1].vendor);
//$('#vendor2').text(response.table[2].vendor);
////$('#vendor3').text(response.table[3].vendor);
////$('#vendor4').text(response.table[4].vendor);
//$('#transactionAmount0').text(response.table[0].transactionAmount);
//$('#transactionAmount1').text(response.table[1].transactionAmount);
//$('#transactionAmount2').text(response.table[2].transactionAmount);
////$('#transactionAmount3').text(response.table[3].transactionAmount);
////$('#transactionAmount4').text(response.table[4].transactionAmount);
//$('#pointAmount0').text(response.table[0].pointAmount);
//$('#pointAmount1').text(response.table[1].pointAmount);
//$('#pointAmount2').text(response.table[2].pointAmount);
////$('#pointAmount3').text(response.table[3].pointAmount);
////$('#pointAmount4').text(response.table[4].pointAmount);


//displayResponse();

generateCircle();
table();


});
}

function displayResponse() {

//    var tier = document.getElementById("tier");
//    tier.style.display="block";



//    var trans_table = document.getElementById("transTable");
//    trans_table.style.display='block';
//
//    var data_table = document.getElementById("dataTable");
//    data_table.style.display='block';

//generateCircle();

}

function generateCircle() {

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
        console.log("pointToNextLevel = " + pointToNextLevel);
        var pointsBalance = global.pointsBalance;
        var fraction = pointsBalance/pointToNextLevel;
        console.log("fraction = " + fraction);

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