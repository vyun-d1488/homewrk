"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Log_1 = __importDefault(require("../middlewares/Log"));
var Locals_1 = __importDefault(require("../providers/Locals"));
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.notFoundHandler = function (_express) {
        _express.use("*", function (req, res) {
            res.status(404);
            return res.json({
                error: "Page Not Found",
            });
        });
        return _express;
    };
    Handler.clientErrorHandler = function (err, req, res, next) {
        Log_1.default.error(err.stack);
        if (req.xhr) {
            return res.status(500).send({ error: "Something went wrong!" });
        }
        else {
            return next(err);
        }
    };
    Handler.errorHandler = function (err, req, res, next) {
        Log_1.default.error(err.stack);
        res.status(500);
        var apiPrefix = Locals_1.default.config().apiPrefix;
        if (req.originalUrl.includes("/" + apiPrefix + "/")) {
            if (err.name && err.name === "UnauthorizedError") {
                var innerMessage = err.inner && err.inner.message ? err.inner.message : undefined;
                return res.json({
                    error: ["Invalid Token!", innerMessage],
                });
            }
            return res.json({
                error: err,
            });
        }
        return res.json({ error: err.stack });
    };
    Handler.logErrors = function (err, req, res, next) {
        Log_1.default.error(err.stack);
        return next(err);
    };
    return Handler;
}());
exports.default = Handler;
//# sourceMappingURL=Handler.js.map