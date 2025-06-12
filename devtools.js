chrome.devtools.panels.create("My Panel", "", "panel.html", function (panel) {
  chrome.devtools.inspectedWindow.getResources(() => {
    const tabId = chrome.devtools.inspectedWindow.tabId;

    // Send message to background
    chrome.runtime.sendMessage({
      type: "devtools_opened",
      tabId: tabId,
    });
  });
});
