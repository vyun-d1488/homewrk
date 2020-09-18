"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Locals_1 = __importDefault(require("./Locals"));
var Log_1 = __importDefault(require("../middlewares/Log"));
var Home_1 = __importDefault(require("./../routes/Home"));
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.mountHome = function (_express) {
        var apiPrefix = Locals_1.default.config().apiPrefix;
        Log_1.default.info("Routes :: Mounting API Routes...");
        return _express.use("/" + apiPrefix, Home_1.default);
    };
    return Routes;
}());
exports.default = new Routes();
//# sourceMappingURL=Routes.js.map