import { GetName,SetName } from './player';
import { Calculate, Print, GetProblemCount } from './Game';


    console.log('Starting MultiMath with Webpack');

    // add click handler to the start game button
    document.getElementById('startGame').addEventListener('click', function () {

        SetName(document.getElementById('playername').value);

        if (game)
            Print();
        else
            console.log("game is an object not set reference - check reference script game.js");

    });

    // add click handler to the calculate score button
    document.getElementById('calculate').addEventListener('click', function () {

        if (game)
            Calculate();
        else
            console.log("game is an object not set reference - check reference script game.js");


    });

    if (game && game.GetProblemCount)
        document.getElementById('problemCount').value = GetProblemCount();



