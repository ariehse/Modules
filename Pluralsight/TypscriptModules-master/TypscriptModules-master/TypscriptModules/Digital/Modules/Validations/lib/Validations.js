"use strict";
exports.__esModule = true;
var Validations;
(function (Validations) {
    var Validator = /** @class */ (function () {
        function Validator() {
        }
        Validator.validate = function (source) {
            console.log("Validated!!", source);
        };
        return Validator;
    }());
    Validations.Validator = Validator;
})(Validations = exports.Validations || (exports.Validations = {}));
exports["default"] = (Validations);
