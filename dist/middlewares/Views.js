"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var Views = /** @class */ (function () {
    function Views() {
    }
    Views.mount = function (_express) {
        _express.get("*", function (req, res) {
            return res.sendFile(path_1.default.join(process.cwd(), "public", "index.html"));
        });
        return _express;
    };
    return Views;
}());
exports.default = Views;
//# sourceMappingURL=Views.js.map