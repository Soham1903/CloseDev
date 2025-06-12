console.log("Custom DevTools panel is active");

// Optional: send a message to the background script
chrome.runtime.sendMessage({ panelLoaded: true });
