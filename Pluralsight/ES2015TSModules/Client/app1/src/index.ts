
import { Log } from '../../../Modules/hello-world/src/console.js';
import { MyConsole, IWriter } from '../../../Modules/hello-world/src/MyConsole.js';


Log("well");

let c:MyConsole = new MyConsole();
c.Log("arieh is ok..");

class MyWriter implements IWriter {

    public Write() {
        console.log("mywriter");
    }
}

let w: MyWriter = new MyWriter();
w.Write();