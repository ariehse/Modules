export declare namespace Messages {
    class Message {
        static sendMessage(m: iMessage): void;
    }
    interface iMessage {
        messageContent: string;
    }
}
declare const _default: typeof Messages;
export default _default;
