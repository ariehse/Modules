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
Object.defineProperty(exports, "__esModule", { value: true });
var Digital;
(function (Digital) {
    var Validations;
    (function (Validations) {
        var Validator = /** @class */ (function () {
            function Validator() {
            }
            return Validator;
        }());
        Validations.Validator = Validator;
        ;
        var InputValidator = /** @class */ (function (_super) {
            __extends(InputValidator, _super);
            function InputValidator() {
                return _super.call(this) || this;
            }
            InputValidator.prototype.Validate = function () { console.log("validate Input Validator"); };
            return InputValidator;
        }(Validator));
        Validations.InputValidator = InputValidator;
        ;
        var CompareValidator = /** @class */ (function (_super) {
            __extends(CompareValidator, _super);
            function CompareValidator() {
                return _super.call(this) || this;
            }
            CompareValidator.prototype.Validate = function () { console.log("validate Compare Validator"); };
            return CompareValidator;
        }(Validator));
        Validations.CompareValidator = CompareValidator;
    })(Validations = Digital.Validations || (Digital.Validations = {}));
})(Digital = exports.Digital || (exports.Digital = {}));
//# sourceMappingURL=digital-validations.js.map