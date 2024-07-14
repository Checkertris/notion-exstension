abstract class ContentScriptModule {
  abstract listen(message: string, sender: chrome.runtime.MessageSender);
}

export default ContentScriptModule;
