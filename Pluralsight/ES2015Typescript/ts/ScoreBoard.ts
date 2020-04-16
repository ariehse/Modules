
export namespace Boards {

    export class ScoreBoard {

        private _boardResult = []; 

        constructor() {

            console.log("Create a scoreboard  instance");

        }

        public AddResult(newResult) {

        if (newResult)
            this._boardResult.push(newResult);

    }

        public UpdateScoreBoard() {

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
    }

    };


};