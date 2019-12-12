function Item(code, name, price, qty) {
    var _code = code;
    var _name = name;
    var _price = price;
    var _qty = qty;

    this.getItemCode = function () {
        return _code;
    }

    this.getItemName = function () {
        return _name;
    }

    this.getItemPrice = function () {
        return _price;
    }

    this.getItemQty = function () {
        return _qty;
    }

    this.setItemCode = function (code) {
        _code = code;
    }

    this.setItemName = function (name) {
        _name = name;
    }

    this.setItemPrice = function (price) {
        _price = price;
    }

    this.setItemQty = function (qty) {
        _qty = qty;
    }
}