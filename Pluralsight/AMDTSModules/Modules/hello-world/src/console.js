System.register([], function (exports_1, context_1) {
    "use strict";
    var Utils;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (Utils) {
                Utils.Log = function (message) { console.log(message); };
            })(Utils || (Utils = {}));
            exports_1("Utils", Utils);
        }
    };
});
//# sourceMappingURL=console.js.map