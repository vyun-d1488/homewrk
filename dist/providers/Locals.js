"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var dotenv = __importStar(require("dotenv"));
var Locals = /** @class */ (function () {
    function Locals() {
    }
    Locals.config = function () {
        dotenv.config({ path: path.join(process.cwd(), "/.env") });
        var port = process.env.PORT || 3000;
        var url = process.env.APP_URL || "http://localhost:" + port;
        var isCORSEnabled = process.env.CORS_ENABLED || true;
        var apiPrefix = process.env.API_PREFIX || "api";
        return {
            apiPrefix: apiPrefix,
            isCORSEnabled: isCORSEnabled,
            port: port,
            url: url,
        };
    };
    Locals.init = function (_express) {
        _express.locals.app = this.config();
        return _express;
    };
    return Locals;
}());
exports.default = Locals;
//# sourceMappingURL=Locals.js.map