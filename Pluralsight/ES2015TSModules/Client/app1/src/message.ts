import { Digital } from '../../../Modules/digital/src/digital-messages.js'

declare type IMessage = Digital.Messages.IMessage;
declare type MailMessage = Digital.Messages.MailMessage;
declare type SMSMessage = Digital.Messages.SMSMessage;

class MyMessage implements IMessage  {
    Send(): void {

        console.log("MyMessage send a message ");
    }

}; 


let mail: MailMessage = new Digital.Messages.MailMessage();
mail.Send();

let sms: SMSMessage = new Digital.Messages.SMSMessage();
sms.Send();

let msg: MyMessage = new MyMessage();
msg.Send();