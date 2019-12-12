function Customer(id,name,address,contact) {
    var _id=id;
    var _name=name;
    var _address=address;
    var _contact=contact;

    this.getCustomerId=function () {
        return _id;
    }

    this.getCustomerName=function () {
        return _name;
    }

    this.getCustomerAddress=function () {
        return _address;
    }

    this.getCustomerContact=function () {
        return _contact;
    }

    this.setCustomerId=function (id) {
        _id=id;
    }

    this.setCustomerName=function (name) {
        _name=name;
    }

    this.setCustomerAddress=function (address) {
        _address=address;
    }

    this.setCustomerContact=function (contact) {
        _contact=contact;
    }
}