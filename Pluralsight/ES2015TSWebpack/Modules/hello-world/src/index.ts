import { Log } from './console';
import { MyConsole, IWriter } from "./MyConsole"; 


Log("arieh is the best!!!");
let c: MyConsole = new MyConsole();

class Writer implements IWriter {

    public Write() { }
}