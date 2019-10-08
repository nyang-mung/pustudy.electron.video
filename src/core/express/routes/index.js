"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HttpController_1 = __importDefault(require("../../HttpController"));
const router = express_1.Router();
/* GET home page. */
let idx = 0;
router.put('/video', function (req, res, next) {
    console.log(JSON.stringify(req.body));
    HttpController_1.default().getBrowser(0).webContents.send("/video", req.body);
    res.send("OK");
});
router.put('/play', function (req, res, next) {
    HttpController_1.default().getBrowser(0).webContents.send("/play");
    res.send("OK");
});
router.put('/pause', function (req, res, next) {
    HttpController_1.default().getBrowser(0).webContents.send("/pause");
    res.send("OK");
});
router.put('/seek', function (req, res, next) {
    HttpController_1.default().getBrowser(0).webContents.send("/seek", req.body);
    res.send("OK");
});
router.put('/cancel', function (req, res, next) {
    HttpController_1.default().getBrowser(0).webContents.send("/cancel");
    res.send("OK");
});
module.exports = router;
