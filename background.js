chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.url) {
  chrome.tabs.query({})
  .then((tabs) =>
    {
      if (tabs.length > 10) {
        chrome.scripting.executeScript({
          target: {tabId: tabId},
          func: () => alert('Will says, "TOO MANY TABS!!!"')
        });
      }
    })
  }
});
