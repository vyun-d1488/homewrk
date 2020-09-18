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
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var Log = /** @class */ (function () {
    function Log() {
        this.today = new Date();
        var _dateString = this.today.getFullYear() + "-" + (this.today.getMonth() + 1) + "-" + this.today.getDate();
        var _timeString = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
        this.baseDir = path.join(process.cwd(), "/.logs/");
        this.fileName = _dateString + ".log";
        this.linePrefix = "[" + _dateString + " " + _timeString + "]";
    }
    Log.prototype.info = function (_string) {
        this.addLog("INFO", _string);
    };
    Log.prototype.warn = function (_string) {
        this.addLog("WARN", _string);
    };
    Log.prototype.error = function (_string) {
        console.log("\x1b[31m%s\x1b[0m", "[ERROR] :: " + _string.split(/r?\n/)[0]);
        this.addLog("ERROR", _string);
    };
    Log.prototype.custom = function (_filename, _string) {
        this.addLog(_filename, _string);
    };
    Log.prototype.addLog = function (_kind, _string) {
        var _that = this;
        _kind = _kind.toUpperCase();
        fs.open("" + _that.baseDir + _that.fileName, "a", function (_err, _fileDescriptor) {
            if (!_err && _fileDescriptor) {
                fs.appendFile(_fileDescriptor, _that.linePrefix + " [" + _kind + "] " + _string + "\n", function (_err) {
                    if (!_err) {
                        fs.close(_fileDescriptor, function (_err) {
                            if (!_err) {
                                return true;
                            }
                            else {
                                return console.log("\x1b[31m%s\x1b[0m", "Error closing log file that was being appended");
                            }
                        });
                    }
                    else {
                        return console.log("\x1b[31m%s\x1b[0m", "Error appending to the log file");
                    }
                });
            }
            else {
                return console.log("\x1b[31m%s\x1b[0m", "Error cloudn't open the log file for appending");
            }
        });
    };
    return Log;
}());
exports.default = new Log();
//# sourceMappingURL=Log.js.map