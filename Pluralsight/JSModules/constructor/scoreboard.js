console.log("Create a scoreboard  instance");

var ScoreBoard = function () {

    

    var _boardResult = [];

    var addResult = function (newResult) {

        if (newResult)
            _boardResult.push(newResult);

    };

    var updateScore = function () {

        var output = '<h2>Scoreboard</h2>';

        for (var index = 0; index < _boardResult.length; index++) {

            var result = _boardResult[index];
            output += '<h4>';
            output += result.Name + ': ' + result.Score + '/' + result.Problems + ' for factor ' + result.Factor;
            output += '</h4>';
        }

        // add the updated scoreboard to the page
        var scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    };

    return {

        AddResult: addResult,
        UpdateScoreBoard: updateScore

    };
};