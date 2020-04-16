System.register([], function (exports_1, context_1) {
    "use strict";
    var Utils;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (Utils) {
                var MyConsole = /** @class */ (function () {
                    function MyConsole() {
                    }
                    MyConsole.prototype.Log = function (message) { console.log(message); };
                    return MyConsole;
                }());
                Utils.MyConsole = MyConsole;
            })(Utils || (Utils = {}));
            exports_1("Utils", Utils);
        }
    };
});
//# sourceMappingURL=MyConsole.js.map