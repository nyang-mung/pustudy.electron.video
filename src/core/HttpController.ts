import {BrowserWindow} from "electron";

class HttpController {
    browsers : BrowserWindow[] = [];
    public pushBrowser (browser : BrowserWindow)
    {
        this.browsers.push(browser);
    }
    public getBrowser(idx : number){
        return this.browsers[idx];
    }
}

let contrller = new HttpController();

export default function Controller(){
    return contrller;
}

