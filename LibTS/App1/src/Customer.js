System.register([], function (exports_1, context_1) {
    "use strict";
    var Customer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Customer = /** @class */ (function () {
                function Customer() {
                }
                Object.defineProperty(Customer.prototype, "Name", {
                    get: function () { return this._name; },
                    set: function (name) { this._name = name; },
                    enumerable: true,
                    configurable: true
                });
                return Customer;
            }());
            exports_1("Customer", Customer);
        }
    };
});
//# sourceMappingURL=Customer.js.map