System.register(["./Game.js", "./player.js", "./ScoreBoard.js"], function (exports_1, context_1) {
    "use strict";
    var Game_js_1, player_js_1, ScoreBoard_js_1, App, app;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Game_js_1_1) {
                Game_js_1 = Game_js_1_1;
            },
            function (player_js_1_1) {
                player_js_1 = player_js_1_1;
            },
            function (ScoreBoard_js_1_1) {
                ScoreBoard_js_1 = ScoreBoard_js_1_1;
            }
        ],
        execute: function () {
            App = /** @class */ (function () {
                function App() {
                    console.log('Starting MultiMath with Typescript common js');
                    this.player = new player_js_1.Players.Player();
                    this.game = new Game_js_1.Games.Game(this.player, new ScoreBoard_js_1.Boards.ScoreBoard());
                }
                App.prototype.StartClick = function () {
                    this.player.Name = document.getElementById('playername').nodeValue;
                    this.game.Print();
                };
                App.prototype.CalculateClick = function () {
                    this.game.Calculate();
                };
                Object.defineProperty(App.prototype, "Game", {
                    get: function () { return this.game; },
                    enumerable: true,
                    configurable: true
                });
                return App;
            }());
            exports_1("App", App);
            app = new App();
            // add click handler to the start game button
            document.getElementById('startGame').addEventListener('click', app.StartClick.bind(app));
            // add click handler to the calculate score button
            document.getElementById('calculate').addEventListener('click', app.CalculateClick.bind(app));
            document.getElementById('problemCount').nodeValue = app.Game.ProblemCount.toString();
        }
    };
});
//# sourceMappingURL=app.js.map