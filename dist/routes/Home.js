"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.post("/", function (req, res) {
    return res.json({
        msg: "Home",
    });
});
exports.default = router;
//# sourceMappingURL=Home.js.map