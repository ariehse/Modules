export namespace Collections {



    export class List<T>
    {
        private _list: Array<T>;

        constructor() {

            this._list = new Array<T>();
        }

        public Add(val: T) { this._list.push(val); }

        public Item(index: number): T { return this._list[index]; }
    }
}