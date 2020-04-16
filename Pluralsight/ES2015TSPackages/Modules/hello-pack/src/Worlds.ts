export namespace System {

    export function Log(message: string) {

        console.log("Call Global Log API");
    }

    export class MyConsole {

        constructor() { }

        public Log(message : string) { console.log("log  a message from myconsole!!!!");}
    }

    export abstract class Vehicle {

        constructor() { }

        public abstract  Drive(); 
    } 


    export interface IValidator {

        Validate();
    }

}