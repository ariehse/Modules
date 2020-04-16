

export namespace Customers {

    class Customer {

        private _name: string;

        constructor() { }

        public get Name(): string { return this._name; }
        public set Name(name: string) { this._name = name; }
    }
}

 