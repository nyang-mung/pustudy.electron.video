import {ipcMain} from "electron";
import { Router } from "express";
import Controller from "../../HttpController";

const router = Router();
/* GET home page. */

let idx = 0;
router.get('/video', function (req, res, next) {
    Controller().getBrowser(0).webContents.send("/video", {"idx" : idx});
    idx = (idx + 1) % 4;
    res.send("OK");
});

module.exports = router;