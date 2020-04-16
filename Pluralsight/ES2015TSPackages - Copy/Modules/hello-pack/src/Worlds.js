"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var System;
(function (System) {
    function Log(message) {
        console.log("Call Global Log API");
    }
    System.Log = Log;
    var MyConsole = /** @class */ (function () {
        function MyConsole() {
        }
        MyConsole.prototype.Log = function (message) { console.log("log  a message from myconsole!!!!"); };
        return MyConsole;
    }());
    System.MyConsole = MyConsole;
    var Vehicle = /** @class */ (function () {
        function Vehicle() {
        }
        return Vehicle;
    }());
    System.Vehicle = Vehicle;
})(System = exports.System || (exports.System = {}));
//# sourceMappingURL=Worlds.js.map