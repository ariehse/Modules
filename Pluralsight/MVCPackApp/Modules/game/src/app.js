    var player = require('./player.js');
    var game = require('./Game.js'); 

console.log('Starting MultiMath with RequireJS');


function main() {

    player.Log("main");
}


exports.Player = player;
exports.Game = game; 

    



