
// class Game
console.log("Create a game instance");

var Game = function () {

   

    var factorElement = document.getElementById('factor');
    var problemsPerGame = 3; // set default value

    var printName = function (player) {

        player.Log();

        ProblemCount = document.getElementById('problemCount').value;
       

        var gameForm = '';
        for (var i = 1; i <= problemsPerGame; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += factorElement.value + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }

        // add the new game to the page
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;

        // enable the calculate score button
        document.getElementById('calculate').removeAttribute('disabled');

    };

    var calculateScore = function (player) {

        var problemsInGame = ProblemCount;
        var score = 0;

        // loop through the text boxes and calculate the number that are correct
        for (var i = 1; i <= problemsInGame; i++) {
            var answer = document.getElementById('answer' + i).value;
            if (i * factorElement.value === answer) {
                score++;
            }
        }

        var result = {
            Name: player.Name,
            Score: score,
            Problems: problemsInGame,
            Factor: factorElement.value
        };

        var scoreboard = new ScoreBoard();
        scoreboard.AddResult(result);
        scoreboard.UpdateScoreBoard();

        // disable the calculate score button
        document.getElementById('calculate').setAttribute('disabled', 'true');
    };

    var ProblemCount = Object.defineProperty(this, "ProblemCount", {
        get: function () { return problemsPerGame; },
        set: function (newProblemPerGame) { problemsPerGame = newProblemPerGame; },
        enumerable: true,
        configurable: true
    });



    return {

        Print: printName,
        Calculate: calculateScore,
        ProblemCount: ProblemCount
    };

}; 