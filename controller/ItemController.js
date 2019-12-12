$("#btnRegisterItem").click(function () {
    var itemCode = $("#itemCode").val();
    var itemName = $("#itemName").val();
    var itemPrice = $("#itemPrice").val();
    var itemQty = $("#itemQty").val();

    var item = new Item(itemCode, itemName, itemPrice, itemQty);

    itemTable.push(item);

    clearAll();

    function clearAll() {
        $("#itemCode").val("");
        $("#itemName").val("");
        $("#itemPrice").val("");
        $("#itemQty").val("");
    }

    console.log(itemTable[0].getItemCode());

});

