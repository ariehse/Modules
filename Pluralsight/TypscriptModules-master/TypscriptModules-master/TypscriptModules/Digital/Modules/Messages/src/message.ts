export namespace Messages {
    export class Message {
        static sendMessage(m: iMessage) {
            console.log("MESSAGE:", m.messageContent);
        }
    }

    export interface iMessage {
        messageContent:string
    }
}

export default (Messages);