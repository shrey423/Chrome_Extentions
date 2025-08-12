chrome.runtime.onInstalled.addListener(() => {chrome.contextMenus.create({
    id: "contextMenu1",
    title: "say hello world",
    contexts: ["all"]
});});
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "contextMenu1") {
        chrome.windows.create({
            url:"popup.html",
            type: "popup",
            width: 400,
            height: 400
        });
        
    }
});