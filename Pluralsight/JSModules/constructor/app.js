(function () {

    console.log('Starting MultiMath with an Singleton modules');
    var player = new Player();
    var game = new Game();

    // add click handler to the start game button
    document.getElementById('startGame').addEventListener('click', function () {

         
        if (player)
            player.Name = document.getElementById('playername').value;
        else
            console.log("player is an object not set reference - check reference script player.js");

        if (game)
            game.Print(player);
        else
            console.log("game is an object not set reference - check reference script game.js");

    });

    // add click handler to the calculate score button
    document.getElementById('calculate').addEventListener('click', function () {

        if (game)
            game.Calculate(player);
        else
            console.log("game is an object not set reference - check reference script game.js");


    });

    if (game && game.ProblemCount)
        document.getElementById('problemCount').value = game.ProblemCount;

})();