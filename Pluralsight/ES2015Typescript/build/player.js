System.register([], function (exports_1, context_1) {
    "use strict";
    var Players;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (Players) {
                var Player = /** @class */ (function () {
                    function Player() {
                        this._playerName = "";
                        console.log("Create a player instance");
                    }
                    Object.defineProperty(Player.prototype, "Name", {
                        get: function () { return this._playerName; },
                        set: function (name) { this._playerName = name; },
                        enumerable: true,
                        configurable: true
                    });
                    Player.prototype.Log = function () {
                        if (this.Name)
                            console.log("player Name is : " + this.Name);
                        else
                            console.log("No Player registered.");
                    };
                    return Player;
                }());
                Players.Player = Player;
                ;
            })(Players || (Players = {}));
            exports_1("Players", Players);
            ;
        }
    };
});
//# sourceMappingURL=player.js.map