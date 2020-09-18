"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = __importDefault(require("./Http"));
var Static_1 = __importDefault(require("./Static"));
var Views_1 = __importDefault(require("./Views"));
var Core = /** @class */ (function () {
    function Core() {
    }
    Core.init = function (_express) {
        _express = Http_1.default.mount(_express);
        _express = Static_1.default.mount(_express);
        _express = Views_1.default.mount(_express);
        return _express;
    };
    return Core;
}());
exports.default = Core;
//# sourceMappingURL=Core.js.map