export default class _EventListenerStorage {
    private listenerList : Array<Function>

    constructor(){
        this.listenerList = Array<Function>()
    }

    push(listener : Function){
        this.listenerList.push(listener);
    }

    pop() : Function | undefined{
        return this.listenerList.pop();
    }
}
const listenerStorage = new _EventListenerStorage()
export {listenerStorage}