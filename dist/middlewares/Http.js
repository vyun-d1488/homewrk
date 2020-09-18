"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var compression_1 = __importDefault(require("compression"));
var body_parser_1 = __importDefault(require("body-parser"));
var Log_1 = __importDefault(require("./Log"));
var Locals_1 = __importDefault(require("../providers/Locals"));
var Http = /** @class */ (function () {
    function Http() {
    }
    Http.mount = function (_express) {
        Log_1.default.info("Booting the 'HTTP' middleware...");
        _express.use(body_parser_1.default.json({
            limit: Locals_1.default.config().maxUploadLimit,
        }));
        _express.use(body_parser_1.default.urlencoded({
            limit: Locals_1.default.config().maxUploadLimit,
            parameterLimit: Locals_1.default.config().maxParameterLimit,
            extended: false,
        }));
        _express.disable("x-powered-by");
        _express.use(cors_1.default());
        _express.use(compression_1.default());
        return _express;
    };
    return Http;
}());
exports.default = Http;
//# sourceMappingURL=Http.js.map