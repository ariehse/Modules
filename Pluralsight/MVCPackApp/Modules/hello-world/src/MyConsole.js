System.register([], function (exports_1, context_1) {
    "use strict";
    var MyConsole;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            MyConsole = /** @class */ (function () {
                function MyConsole() {
                }
                MyConsole.prototype.Log = function (message) { console.log(message); };
                return MyConsole;
            }());
            exports_1("MyConsole", MyConsole);
        }
    };
});
//# sourceMappingURL=MyConsole.js.map