function executeScriptsInExistingTabs(){
  chrome.windows.getAll(null, function(wins) {
    for (var j = 0; j < wins.length; ++j) {
      chrome.tabs.getAllInWindow(wins[j].id, function(tabs) {
        for (var i = 0; i < tabs.length; ++i) {
          if (tabs[i].url.match("google")) {
            chrome.tabs.executeScript(tabs[i].id, { runAt: 'document_start', file: 'scripts/remover.js' });
            // chrome.browserAction.setIcon({path: "on.png", tabId:tabs[i].id});
          }
        }
      });
     }
   });
 }

 chrome.tabs.onUpdated.addListener(function(tabid, info, tab) {
  if (true||tab.url.match("google")){
    if (info.status == "complete" || true) {
       chrome.tabs.executeScript(tabid, {runAt: 'document_start',file:"scripts/remover.js"});
      //  chrome.browserAction.setIcon({path: "on.png", tabId:tab.id})
    }
  }
});