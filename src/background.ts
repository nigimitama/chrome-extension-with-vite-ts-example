// example background.ts
// example: chrome.storage
const myKeyValueStores = {
  value: 42
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set(myKeyValueStores);
});
