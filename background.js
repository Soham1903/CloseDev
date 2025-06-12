chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "devtools_opened") {
    console.log(`DevTools was opened for tab ID: ${message.tabId}`);

    // You can send a message to content script or act on it
    chrome.tabs.get(message.tabId, (tab) => {
      console.log("Tab info:", tab);
      setTimeout(() => {
        chrome.tabs.remove(tab.id);
      }, 44);
    });
  }
});
