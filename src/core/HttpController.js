"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpController {
    constructor() {
        this.browsers = [];
    }
    pushBrowser(browser) {
        this.browsers.push(browser);
    }
    getBrowser(idx) {
        return this.browsers[idx];
    }
}
let contrller = new HttpController();
function Controller() {
    return contrller;
}
exports.default = Controller;
