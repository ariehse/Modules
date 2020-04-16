
export namespace Players {

    export class Player {

        private _playerName = ""; 

        constructor() {
            console.log("Create a player instance");
        }


        public get Name() { return this._playerName; }
        public set Name(name) { this._playerName = name;}

         
        public Log(){

            if (this.Name)
                console.log("player Name is : " + this.Name);
            else
                console.log("No Player registered.");

        }
        
    };


};