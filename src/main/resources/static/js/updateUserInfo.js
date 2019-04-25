function sendRequest(){
    var acctNo = $('#acctNo').val();
    var holdType = $('#holdType').val();
    var amount = $('#amount').val();

    switch(holdType) {
        case "1-Day":
            holdType = 1;
            break;
        case "2-Day":
            holdType = 2;
            break;
        case "Long Term":
            holdType = 3;
            break;
        case "Float Pledge":
            holdType = 4;
            break;
        default:
            break;
    }

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:8080/hold/create",
    "method": "POST",
    "headers": {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    "Postman-Token": "7e3691b5-8434-438d-a3b2-56f6798e9244"
    },
    "processData": false,
    "data": "{\n\t\"cicsInput\": {\n\t\t\"acctNo\": \"" + acctNo + "\",\n\t\t\"holdType\": " + holdType + ",\n\t\t\"amount\": " + amount + "\n\n\t}\n}"
    }

    $.ajax(settings).done(function (response) {
    console.log(response);

    $('#respCode').text(response.respCode);
    $('#respType').text(response.respType);
    $('#respSequence').text(response.respSequence);
    $('#avBal').text(response.avBal);
    });
}

function displayResponse() {
    var res_block = document.getElementById("response-block");
    var blue_bar = document.getElementById("blue-bar");
    res_block.style.display='block';
    blue_bar.style.display='block';
}