import { Games } from './Game.js'; 
import { Players } from './player.js';
import { Boards } from './ScoreBoard.js';
 

export class App {

    private player: Players.Player;
    private game: Games.Game; 

    constructor() {

        console.log('Starting MultiMath with Typescript common js');

        this.player = new Players.Player();
        this.game = new Games.Game(this.player, new Boards.ScoreBoard());

    }

    public StartClick() {

        this.player.Name = document.getElementById('playername').nodeValue;
        this.game.Print();
  

    }

    public CalculateClick() {
        this.game.Calculate();
    }

    public get Game() { return this.game;  }
}


var app = new App();

// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', app.StartClick.bind(app));

// add click handler to the calculate score button
document.getElementById('calculate').addEventListener('click', app.CalculateClick.bind(app));

document.getElementById('problemCount').nodeValue = app.Game.ProblemCount.toString();