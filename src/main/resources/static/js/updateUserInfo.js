function sendRequest(){
    var UserName = $('#UserName').val();
    var ItemName = $('#ItemName').val();

//    $('#UserName').text(response.UserName);
//    $('#ItemName').text(response.ItemName);

}

function displayResponse() {
    var trans_table = document.getElementById("transTable");
    trans_table.style.display='block';

    var data_table = document.getElementById("dataTable");
    data_table.style.display='block';

}