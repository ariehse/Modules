System.register(["../../../Packages/hello-pack/hellopack.js"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var hellopack_js_1, c, Car, Validator, validators, v;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (hellopack_js_1_1) {
                hellopack_js_1 = hellopack_js_1_1;
            }
        ],
        execute: function () {
            c = new hellopack_js_1.System.MyConsole();
            c.Log("it is ok");
            Car = /** @class */ (function (_super) {
                __extends(Car, _super);
                function Car() {
                    return _super.call(this) || this;
                }
                Car.prototype.Drive = function () { console.log("Drive..."); };
                return Car;
            }(hellopack_js_1.System.Vehicle));
            Validator = /** @class */ (function () {
                function Validator() {
                }
                Validator.prototype.Validate = function () {
                    console.log("input is validated...");
                };
                return Validator;
            }());
            validators = new hellopack_js_1.Collections.List();
            validators.Add(new Validator());
            validators.Item(0).Validate();
            v = new Car();
            v.Drive();
        }
    };
});
//# sourceMappingURL=index.js.map