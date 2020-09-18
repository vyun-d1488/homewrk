"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Log_1 = __importDefault(require("../middlewares/Log"));
var NativeEvent = /** @class */ (function () {
    function NativeEvent() {
    }
    NativeEvent.prototype.cluster = function (_cluster) {
        _cluster.on("listening", function (worker) { return Log_1.default.info("Server :: Cluster with ProcessID '" + worker.process.pid + "' Connected!"); });
        _cluster.on("online", function (worker) { return Log_1.default.info("Server :: Cluster with ProcessID '" + worker.process.pid + "' has responded after it was forked! "); });
        _cluster.on("disconnect", function (worker) { return Log_1.default.info("Server :: Cluster with ProcessID '" + worker.process.pid + "' Disconnected!"); });
        _cluster.on("exit", function (worker, code, signal) {
            Log_1.default.info("Server :: Cluster with ProcessID '" + worker.process.pid + "' is Dead with Code '" + code + ", and signal: '" + signal + "'");
            _cluster.fork();
        });
    };
    NativeEvent.prototype.process = function () {
        process.on("uncaughtException", function (exception) { return Log_1.default.error(exception.stack); });
        process.on("warning", function (warning) { return Log_1.default.warn(warning.stack); });
    };
    return NativeEvent;
}());
exports.default = new NativeEvent();
//# sourceMappingURL=NativeEvent.js.map