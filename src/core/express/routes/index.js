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
router.get('/video', function (req, res, next) {
    HttpController_1.default().getBrowser(0).webContents.send("/video", { "idx": idx });
    idx = (idx + 1) % 4;
    res.send("OK");
});
module.exports = router;
