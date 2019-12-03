"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(require("vue"));
const electron_1 = require("electron");
class Observer extends vue_1.default {
    constructor() {
        super();
        console.log("constructor!!");
    }
    setInnerEventListener(event, listener) {
        electron_1.ipcRenderer.on(event, listener);
    }
    setOutterEventListener(event, listener) {
        this.$on(event, listener);
    }
}
exports.default = Observer;
