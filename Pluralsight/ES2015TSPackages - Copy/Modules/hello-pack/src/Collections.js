"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collections;
(function (Collections) {
    var List = /** @class */ (function () {
        function List() {
            this._list = new Array();
        }
        List.prototype.Add = function (val) { this._list.push(val); };
        List.prototype.Item = function (index) { return this._list[index]; };
        return List;
    }());
    Collections.List = List;
})(Collections = exports.Collections || (exports.Collections = {}));
//# sourceMappingURL=Collections.js.map