
export class MyConsole {

    constructor() { }

    public Log(message: string) { console.log(message); }
}


export interface IWriter {

    Write():void;
}

