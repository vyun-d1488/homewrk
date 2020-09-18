"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __importDefault(require("./providers/App"));
var NativeEvent_1 = __importDefault(require("./exception/NativeEvent"));
var os_1 = require("os");
var cluster_1 = __importDefault(require("cluster"));
function main() {
    var numCPUs = os_1.cpus();
    if (cluster_1.default.isMaster) {
        NativeEvent_1.default.process();
        App_1.default.loadConfiguration();
        numCPUs.forEach(function () { return cluster_1.default.fork(); });
        NativeEvent_1.default.cluster(cluster_1.default);
        setTimeout(function () {
            App_1.default.loadWorker();
        }, 1000 * 60);
    }
    else {
        App_1.default.loadServer();
    }
}
main();
//# sourceMappingURL=index.js.map