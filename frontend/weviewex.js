class WebViewEx
{
    /**
     * 
     * @param {string} path 
     * @returns 
     */
    static fileReadAllText(path) {
        var text = chrome.webview.hostObjects.sync.webviewex.ReadHTML(path);
        return text;
    }
}

export {WebViewEx}