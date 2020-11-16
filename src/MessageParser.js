class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    if (lowerCaseMessage.includes('wassup')) {
      this.actionProvider.greet()
    }
    if (lowerCaseMessage.includes("website")) {
      this.actionProvider.handleWebsiteList();
    }
    if (lowerCaseMessage.includes("help") || lowerCaseMessage.includes("rialto")) {
      this.actionProvider.help();
    }
  }
}

export default MessageParser;