$("#home-view").click(function () {
    $("#item").css("display", "none");
    $("#order").css("display", "none");
    $("#customer").css("display", "none");
    $("#home").css("display", "block");
});

$("#customer-view").click(function () {
    $("#home").css("display", "none");
    $("#item").css("display", "none");
    $("#order").css("display", "none");
    $("#customer").css("display", "block");

});

$("#item-view").click(function () {
    $("#home").css("display", "none");
    $("#item").css("display", "block");
    $("#order").css("display", "none");
    $("#customer").css("display", "none");
});

$("#order-view").click(function () {
    $("#home").css("display", "none");
    $("#item").css("display", "none");
    $("#order").css("display", "block");
    $("#customer").css("display", "none");
});
