var payload, myObj, myObj2, i, txt = "";

//           payload = [
//           {
//               "name": "Aaron Pavlick",
//               "pointsBalance": 600,
//               "tier": 0,
//               "pointToNextLevel": 1400,
//               "table": [
//                   {
//                       "product": "PNC ONYX Card",
//                       "transactionCatagory": "TRAVEL",
//                       "vendor": null,
//                       "transactionAmount": 50,
//                       "pointAmount": 150
//                   },
//                   {
//                       "product": "PNC ONYX Card",
//                       "transactionCatagory": "TRAVEL",
//                       "vendor": null,
//                       "transactionAmount": 50,
//                       "pointAmount": 150
//                   },
//                   {
//                       "product": "PNC ONYX Card",
//                       "transactionCatagory": "TRAVEL",
//                       "vendor": null,
//                       "transactionAmount": 50,
//                       "pointAmount": 150
//                   }
//               ]
//           }];

         payload = global;
         myObj = payload[0].table;
//         console.log("payload[4].table = "+myObj);
//
//
//                    myObj2 = [
//                         {
//                         "name":"John",
//                         "age":"30",
//                         "cars":"Ford",
//                         "animal":"dog",
//                         "color":"green"},
//                         {
//                         "name":"Kevin",
//                         "age":"20",
//                         "cars":"Subaru",
//                         "animal":"cat",
//                         "color":"purple"},
//                         {"name":"Mike",
//                         "age":"40",
//                         "cars":"Lexus",
//                         "animal":"bird",
//                         "color":"yellow"}
//                         ];


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