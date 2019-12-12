$("#cusID").on("keypress",function (e) {
    if(e.keyCode=='13'){
        var cusId = $("#cusID").val();
        var reg=/^(C000)\d{1}$/;
        if(reg.test(cusId)){
            $("#cusName").focus();
        }else{
            alert("Invalid Customer ID!");
        }
    }
});

$("#cusName").on("keypress",function (e) {
    if(e.keyCode=='13'){
        var cusName = $("#cusName").val();
        var reg=/^[A-z]{5,20}$/;
        if(reg.test(cusName)){
            $("#cusAddress").focus();
        }else{
            alert("Invalid Customer Name!");
        }
    }
});

$("#cusAddress").on("keypress",function (e) {
    if(e.keyCode=='13'){
        var cusAdd = $("#cusAddress").val();
        var reg=/^[A-z]{5,20}$/;
        if(reg.test(cusAdd)){
            $("#cusContact").focus();
        }else{
            alert("Invalid Customer Address!");
        }
    }
});

$("#cusContact").on("keypress",function (e) {
    if(e.keyCode=='13'){
        var cusCon = $("#cusContact").val();
        var reg=/^[0-9]{10}$/;
        if(reg.test(cusCon)){
            $("#btnRegister").focus();
        }else{
            alert("Invalid Customer Contact Number!");
        }
    }
});

$("#btnRegister").click(function () {
    var cusId = $("#cusID").val();
    var cusName = $("#cusName").val();
    var cusAddress = $("#cusAddress").val();
    var cusContact = $("#cusContact").val();

    var customer = new Customer(cusId, cusName, cusAddress, cusContact);
    customerTable.push(customer);

    clearAll();

    function clearAll() {
        $("#cusID").val("");
        $("#cusName").val("");
        $("#cusAddress").val("");
        $("#cusContact").val("");
    }
});


$("#btnGetAll").click(function () {

    for (var c of customerTable) {
        var cusId = c.getCustomerId();
        var cusName = c.getCustomerName();
        var cusAddress = c.getCustomerAddress();
        var cusContact = c.getCustomerContact();

        $('#tblCustomer').append(
            "<tr><td>" + cusId + "</td>" +
            "<td>" + cusName + "</td>" +
            "<td>" + cusAddress + "</td>" +
            "<td>" + cusContact + "</td></tr>"
        );
    }

    $("#tblCustomer").children('tr').click(function () {
        var cusIdVal = ($(this).children()[0]).text();
        var cusNameVal = ($(this).children()[1]).text();
        var cusAddressVal = ($(this).children()[2]).text();
        var cusContactVal = ($(this).children()[3]).text();

        $("#cusID").val(cusIdVal);
        $("#cusName").val(cusNameVal);
        $("#cusAddress").val(cusAddressVal);
        $("#cusContact").val(cusContactVal);
    });

    $("#tblCustomer tr").on("dblclick", function () {
        $(this).remove();
    });

});


