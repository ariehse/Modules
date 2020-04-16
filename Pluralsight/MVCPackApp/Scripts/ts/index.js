"use strict";
//import { Digital, Digitals } from '../../Modules/digital/build/digital.js';
Object.defineProperty(exports, "__esModule", { value: true });
var Digital = require("../../Modules/digital/build/digital.js");
var Messages = require("../../Modules/digital/build/digital_messages.js");
Digital.Digital.Log("arieh in global Log with import");
var c = new Digital.Digital.MyConsole();
c.Log("arieh use MyConsole with imports");
var mail = new Messages.Digital.Messages.MailMessage();
mail.Send();
var message = new Messages.Digital.Messages.SMSMessage();
message.Send();
var MyMessage = /** @class */ (function () {
    function MyMessage() {
    }
    MyMessage.prototype.Send = function () { console.log("MyMessage is sent."); };
    return MyMessage;
}());
message = new MyMessage();
message.Send();
//# sourceMappingURL=index.js.map