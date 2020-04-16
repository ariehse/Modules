import { GetName,SetName, Log } from './player';
import { AddResult, UpdateScoreBoard}  from './ScoreBoard';
 

    console.log("Create a game instance");

    var factorElement = document.getElementById('factor');
    var problemsPerGame = 3; // set default value

const Print =  ()=>  {

        Log();

        SetProblemCount(document.getElementById('problemCount').value);

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

    const Calculate=  () =>  {

        var problemsInGame = GetProblemCount();
        var score = 0;

        // loop through the text boxes and calculate the number that are correct
        for (var i = 1; i <= problemsInGame; i++) {
            var answer = document.getElementById('answer' + i).value;
            if (i * factorElement.value === answer) {
                score++;
            }
        }

        var result = {
            Name: GetName(),
            Score: score,
            Problems: problemsInGame,
            Factor: factorElement.value
        };

        AddResult(result);
        UpdateScoreBoard();

        // disable the calculate score button
        document.getElementById('calculate').setAttribute('disabled', 'true');
    };

const  GetProblemCount= ()=>  { return problemsPerGame;};
const  SetProblemCount= (newProblemPerGame)=>  { problemsPerGame = newProblemPerGame;}

export { Print, Calculate, GetProblemCount, SetProblemCount };


   