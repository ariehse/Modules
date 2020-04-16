"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Digital;
(function (Digital) {
    var Messages;
    (function (Messages) {
        var MailMessage = /** @class */ (function () {
            function MailMessage() {
            }
            MailMessage.prototype.Send = function () {
                console.log("send a mail message...");
            };
            return MailMessage;
        }());
        Messages.MailMessage = MailMessage;
        var SMSMessage = /** @class */ (function () {
            function SMSMessage() {
            }
            SMSMessage.prototype.Send = function () {
                console.log("send a sms message...");
            };
            return SMSMessage;
        }());
        Messages.SMSMessage = SMSMessage;
    })(Messages = Digital.Messages || (Digital.Messages = {}));
})(Digital = exports.Digital || (exports.Digital = {}));
//# sourceMappingURL=digital-messages.js.map