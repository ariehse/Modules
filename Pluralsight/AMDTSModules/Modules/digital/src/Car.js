System.register([], function (exports_1, context_1) {
    "use strict";
    var Car;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Car = /** @class */ (function () {
                function Car() {
                }
                Car.prototype.Drive = function () { console.log("car drive"); };
                return Car;
            }());
            exports_1("Car", Car);
        }
    };
});
//# sourceMappingURL=Car.js.map