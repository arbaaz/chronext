chrome.browserAction.onClicked.addListener(function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { command: "exec"}, function(response) {
      console.log(response.farewell);
    });
  });
});
