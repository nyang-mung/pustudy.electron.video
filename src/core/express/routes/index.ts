import {ipcMain} from "electron";
import { Router } from "express";
import Controller from "../../HttpController";

const router = Router();
/* GET home page. */

let idx = 0;
router.put('/video', function (req, res, next) {
    console.log(JSON.stringify(req.body));
    Controller().getBrowser(0).webContents.send("/video", req.body);
    res.send("OK");
});

router.put('/play', function (req, res, next) {
    Controller().getBrowser(0).webContents.send("/play");
    res.send("OK");
});

router.put('/pause', function (req, res, next) {
    Controller().getBrowser(0).webContents.send("/pause");
    res.send("OK");
});

router.put('/seek', function (req, res, next) {
    Controller().getBrowser(0).webContents.send("/seek", req.body);
    res.send("OK");
});

router.put('/cancel', function (req, res, next) {
    Controller().getBrowser(0).webContents.send("/cancel");
    res.send("OK");
});

module.exports = router;