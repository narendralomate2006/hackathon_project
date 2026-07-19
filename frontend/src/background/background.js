console.log("Background Script Running");

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed");
});