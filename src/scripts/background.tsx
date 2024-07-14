// const notionStartTab = () => {
//   chrome.tabs.onCreated.addListener(function (tab) {
//     if (tab.pendingUrl == "chrome://newtab/") {
//       if (localStorage.getItem("notionStartTab") == "true") {
//         chrome.tabs.update(tab.id, { url: localStorage.getItem("startTabUrl") });
//       }
//     }
//   });
// };

chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((error) => console.error(error));

console.log("bg script");
chrome.commands.onCommand.addListener((command) => {
  console.log(`Command: ${command}`);
});
