"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Locals_1 = __importDefault(require("./Locals"));
var Routes_1 = __importDefault(require("./Routes"));
var Handler_1 = __importDefault(require("../exception/Handler"));
var Core_1 = __importDefault(require("../middlewares/Core"));
var Express = /** @class */ (function () {
    function Express() {
        this.express = express_1.default();
        this.mountDotEnv();
        this.mountRoutes();
        this.mountMiddlewares();
    }
    Express.prototype.mountDotEnv = function () {
        this.express = Locals_1.default.init(this.express);
    };
    Express.prototype.mountMiddlewares = function () {
        this.express = Core_1.default.init(this.express);
    };
    Express.prototype.mountRoutes = function () {
        this.express = Routes_1.default.mountHome(this.express);
    };
    Express.prototype.init = function () {
        var port = Locals_1.default.config().port;
        this.express.use(Handler_1.default.logErrors);
        this.express.use(Handler_1.default.clientErrorHandler);
        this.express.use(Handler_1.default.errorHandler);
        this.express = Handler_1.default.notFoundHandler(this.express);
        this.express.listen(port, function () {
            return console.log("==> Server :: Running @ 'http://localhost:" + port + "'");
        });
    };
    return Express;
}());
exports.default = new Express();
//# sourceMappingURL=Express.js.map