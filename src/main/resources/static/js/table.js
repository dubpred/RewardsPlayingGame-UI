var myObj, i, txt = "";
                    myObj = [
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


                    txt += "<table class=\"table\"><thead><tr><th>Column1</th><th>Column2</th><th>Column3</th><th>Column4</th><th>Column5</th></tr></thead><tbody>";
                    for (i = 0; i < myObj.length; i++) {
                        txt += "<tr><td class=>" + myObj[i].name + "</td>";
                        txt += "<td>" + myObj[i].age + "</td>";
                        txt += "<td>" + myObj[i].cars + "</td>";
                        txt += "<td>" + myObj[i].animal + "</td>";
                        txt += "<td>" + myObj[i].color + "</td></tr>";
                        }
                        txt += "</tbody></table>";
                    document.getElementById("demo").innerHTML = txt;