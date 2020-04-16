System.register([], function (exports_1, context_1) {
    "use strict";
    var Boards;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (Boards) {
                var ScoreBoard = /** @class */ (function () {
                    function ScoreBoard() {
                        this._boardResult = [];
                        console.log("Create a scoreboard  instance");
                    }
                    ScoreBoard.prototype.AddResult = function (newResult) {
                        if (newResult)
                            this._boardResult.push(newResult);
                    };
                    ScoreBoard.prototype.UpdateScoreBoard = function () {
                        var output = '<h2>Scoreboard</h2>';
                        for (var index = 0; index < this._boardResult.length; index++) {
                            var result = this._boardResult[index];
                            output += '<h4>';
                            output += result.Name + ': ' + result.Score + '/' + result.Problems + ' for factor ' + result.Factor;
                            output += '</h4>';
                        }
                        // add the updated scoreboard to the page
                        var scoresElement = document.getElementById('scores');
                        scoresElement.innerHTML = output;
                    };
                    return ScoreBoard;
                }());
                Boards.ScoreBoard = ScoreBoard;
                ;
            })(Boards || (Boards = {}));
            exports_1("Boards", Boards);
            ;
        }
    };
});
//# sourceMappingURL=ScoreBoard.js.map