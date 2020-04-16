"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Digital;
(function (Digital) {
    Digital.Log = function (message) { console.log(message); };
    var MyConsole = /** @class */ (function () {
        function MyConsole() {
        }
        MyConsole.prototype.Log = function (message) { console.log(message); };
        return MyConsole;
    }());
    Digital.MyConsole = MyConsole;
})(Digital = exports.Digital || (exports.Digital = {}));
//# sourceMappingURL=digital.js.map