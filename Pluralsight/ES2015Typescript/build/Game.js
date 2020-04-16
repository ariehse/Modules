System.register([], function (exports_1, context_1) {
    "use strict";
    var Games;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (Games) {
                var Game = /** @class */ (function () {
                    function Game(player, board) {
                        if (player === void 0) { player = null; }
                        if (board === void 0) { board = null; }
                        console.log("Create a game instance");
                        this.factorElement = parseInt(document.getElementById('factor').nodeValue);
                        this.problemsPerGame = 3;
                        this.player = player;
                        this.scoreboard = board;
                    }
                    Game.prototype.Print = function () {
                        this.player.Log();
                        this.ProblemCount = 2; //document.getElementById('problemCount').value
                        var gameForm = '';
                        for (var i = 1; i <= this.problemsPerGame; i++) {
                            gameForm += '<div class="form-group">';
                            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
                            gameForm += this.factorElement + ' x ' + i + ' = </label>';
                            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
                            gameForm += '</div>';
                        }
                        // add the new game to the page
                        var gameElement = document.getElementById('game');
                        gameElement.innerHTML = gameForm;
                        // enable the calculate score button
                        document.getElementById('calculate').removeAttribute('disabled');
                    };
                    Game.prototype.Calculate = function () {
                        var score = 0;
                        // loop through the text boxes and calculate the number that are correct
                        for (var i = 1; i <= this.ProblemCount; i++) {
                            var answer = document.getElementById('answer' + i).nodeValue;
                            if (i * this.factorElement === parseInt(answer)) {
                                score++;
                            }
                        }
                        var result = {
                            Name: this.player.Name,
                            Score: score,
                            Problems: this.ProblemCount,
                            Factor: this.factorElement
                        };
                        this.scoreboard.AddResult(result);
                        this.scoreboard.UpdateScoreBoard();
                        // disable the calculate score button
                        document.getElementById('calculate').setAttribute('disabled', 'true');
                    };
                    Object.defineProperty(Game.prototype, "ProblemCount", {
                        get: function () { return this.problemsPerGame; },
                        set: function (count) { this.problemsPerGame = count; },
                        enumerable: true,
                        configurable: true
                    });
                    return Game;
                }());
                Games.Game = Game;
                ;
            })(Games || (Games = {}));
            exports_1("Games", Games);
            ;
        }
    };
});
//# sourceMappingURL=Game.js.map