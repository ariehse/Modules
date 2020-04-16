//import { System } from '../../../Modules/hello-world/Worlds.js';

import { System } from '../../../Packages/hello-world/Worlds.js'
import { Collections } from '../../../Packages/hello-world/Collections.js'

//import { System, Collections } from '../../../Packages/hello-world/hello-world.js';

const c: System.MyConsole = new System.MyConsole();

c.Log("it is ok");


class Car extends System.Vehicle {

    constructor() {

        super();
    }

    Drive() { console.log("Drive...");}
}

class Validator implements System.IValidator {

    constructor() {}

    public Validate() {
        console.log("input is validated...");
    }

}

let validators: Collections.List<Validator> = new Collections.List<Validator>();

validators.Add(new Validator());

validators.Item(0).Validate();

let v: System.Vehicle = new Car();

v.Drive();