
export namespace Digital {

    export const Log = (message: string) => { console.log(message); } 

    export class MyConsole {

        constructor() { }

        public Log(message: string) { console.log(message); }
    }
}