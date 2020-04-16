
export namespace Digital.Messages {

    export interface IMessage {

        Send(): void;
    }

    export class MailMessage implements IMessage {

        constructor() {}

        Send(): void {
            console.log("send a mail message...");
        }

    }

    export class SMSMessage implements IMessage {

        constructor() { }

        Send(): void {
            console.log("send a sms message...");
        }
}

}