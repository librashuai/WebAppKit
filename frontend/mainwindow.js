import {WebViewEx} from "./weviewex.js"


class MainWindow{

    /** @type {HTMLElement} */
    htmlelement = null;

    /**
     * 
     * @param {HTMLElement} parent 
     */
    constructor(parent){
        let html = WebViewEx.fileReadAllText("./mainwindow.html");
        parent.insertAdjacentHTML("afterbegin", html);
        this.htmlelement = parent.querySelector("#mainwindow")
    }

    close(){
        this.htmlelement.remove();
    }
}

export {MainWindow}