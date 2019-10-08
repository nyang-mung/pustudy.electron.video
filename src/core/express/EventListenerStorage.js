"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class _EventListenerStorage {
    constructor() {
        this.listenerList = Array();
    }
    push(listener) {
        this.listenerList.push(listener);
    }
    pop() {
        return this.listenerList.pop();
    }
}
exports.default = _EventListenerStorage;
const listenerStorage = new _EventListenerStorage();
exports.listenerStorage = listenerStorage;
