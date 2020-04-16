"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Messages;
(function (Messages) {
    var Message = (function () {
        function Message() {
        }
        Message.sendMessage = function (m) {
            console.log("MESSAGE:", m);
        };
        return Message;
    }());
    Messages.Message = Message;
})(Messages = exports.Messages || (exports.Messages = {}));
exports.default = (Messages);
//# sourceMappingURL=message.js.map