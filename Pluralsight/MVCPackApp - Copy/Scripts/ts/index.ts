
//import { Digital, Digitals } from '../../Modules/digital/build/digital.js';

import * as Digital   from '../../Modules/digital/build/digital.js'; 
import * as Messages from '../../Modules/digital/build/digital_messages.js';
import * as Validations from '../../Modules/digital/build/digital_validations.js';




Digital.Digital.Log("arieh in global Log with import");

let c = new Digital.Digital.MyConsole(); 

c.Log("arieh use MyConsole with imports");

let mail = new Messages.Digital.Messages.MailMessage(); 
mail.Send();

let message: Messages.Digital.Messages.IMessage = new Messages.Digital.Messages.SMSMessage();
message.Send(); 

class MyMessage implements Messages.Digital.Messages.IMessage 
{

    constructor(){ }

    public Send(): void { console.log("MyMessage is sent.");}
}


message = new MyMessage();
message.Send();


