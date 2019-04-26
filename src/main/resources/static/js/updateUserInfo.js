function sendRequest(){
    var UserName = $('#UserName').val();
    var ItemName = $('#ItemName').val();

//    $('#UserName').text(response.UserName);
//    $('#ItemName').text(response.ItemName);

}

function displayResponse() {
    var res_block = document.getElementById("response-block");
    var blue_bar = document.getElementById("blue-bar");
    var trans_table = document.getElementById("transTable");
    res_block.style.display='block';
    blue_bar.style.display='block';
    trans_table.style.display='block';

    data = {"vendor":"starbucks","transactioncategory":"food","amount":"$4.00","postedDate":"9/22/2014","ptsEarned":"12"};
    var tr;
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].vendor + "</td>");
        tr.append("<td>" + data[i].transactioncategory + "</td>");
        tr.append("<td>" + data[i].amount + "</td>");
        $('table').append(tr);
    }

}