System.register(["../../../Modules/hello-world/src/console", "../../../Modules/hello-world/src/MyConsole"], function (exports_1, context_1) {
    "use strict";
    var console_1, MyConsole_1, c;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            },
            function (MyConsole_1_1) {
                MyConsole_1 = MyConsole_1_1;
            }
        ],
        execute: function () {
            console_1.Utils.Log("well");
            c = new MyConsole_1.Utils.MyConsole();
            c.Log("arieh is ok..");
        }
    };
});
//# sourceMappingURL=index.js.map