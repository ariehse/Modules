import { Players } from './player.js';
import { Boards } from './ScoreBoard.js'; 

export namespace Games {

    export class Game {

        private factorElement: number; 
        private problemsPerGame: number;
        private scoreboard: Boards.ScoreBoard;
        private player: Players.Player;


        constructor(player: Players.Player = null, board: Boards.ScoreBoard = null ) {

            console.log("Create a game instance");
            this.factorElement = parseInt(document.getElementById('factor').nodeValue);
            this.problemsPerGame = 3;
            this.player = player;
            this.scoreboard = board; 

        }

        public Print() {

            this.player.Log();

            this.ProblemCount = 2; //document.getElementById('problemCount').value

            let gameForm = '';
            for (let i = 1; i <= this.problemsPerGame; i++) {
                gameForm += '<div class="form-group">';
                gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
                gameForm += this.factorElement + ' x ' + i + ' = </label>';
                gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
                gameForm += '</div>';
            }

            // add the new game to the page
            let  gameElement = document.getElementById('game');
            gameElement.innerHTML = gameForm;

            // enable the calculate score button
            document.getElementById('calculate').removeAttribute('disabled');
        }

        public Calculate() {


         
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


        }

        public get ProblemCount() { return this.problemsPerGame; }
        public set ProblemCount(count: number) { this.problemsPerGame = count; } 

    };


};