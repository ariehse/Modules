
export namespace Digital.Validations {

    export abstract class Validator {

        constructor() {}

        public abstract Validate():void;
    };

    export class InputValidator extends Validator {

        constructor() {

            super();
        }

        public Validate() { console.log("validate Input Validator"); }

    };

    export class CompareValidator extends Validator {

        constructor() {

            super();
        }

        public Validate() { console.log("validate Compare Validator"); }

    }
}