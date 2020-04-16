

const log = function (message) { console.log(message); };

var customer = function () {

    this.name = "name";
    this.id = "12";

    this.print = function () { console.log(this.name + "-" + this.id); }
};


exports.Customer = customer;
exports.Log = log; 