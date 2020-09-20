"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var Log_1 = __importDefault(require("./Log"));
var Statics = /** @class */ (function () {
    function Statics() {
    }
    Statics.mount = function (_express) {
        Log_1.default.info("Booting the 'Statics' middleware...");
        var options = { maxAge: 31557600000 };
        _express.use(express_1.default.static(path_1.default.join(process.cwd(), "/public"), options));
        return _express;
    };
    return Statics;
}());
exports.default = Statics;
//# sourceMappingURL=Static.js.map