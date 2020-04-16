
import { Log } from "../../../Packages/hello-world/hello-world"

/// <reference path="../../../packages/hello-world/console.d.ts" />
/// <reference path="../../../packages/hello-world/myconsole.d.ts" />

Log("well");

let c: MyConsole = new MyConsole();
c.Log("arieh is ok..");

class MyWriter implements IWriter {

    public Write() {
        console.log("mywriter");
    }
}

let w: MyWriter = new MyWriter();
w.Write();