import Vue from "vue";
import {ipcRenderer} from "electron";

export default class Observer extends Vue{
    
    public constructor(){
        super();
        console.log("constructor!!");
    }
    public setInnerEventListener (event : string, listener : EventHandlerNonNull)
    {
        ipcRenderer.on(event, listener);
    }
    public setOutterEventListener (event : string, listener : EventHandlerNonNull)
    {
        this.$on(event, listener);
    }
}