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
    if (lowerCaseMessage.includes("help") || lowerCaseMessage.includes("rialto")) {
      this.actionProvider.help();
    }
    if (lowerCaseMessage.includes("neighborhood")) {
      this.actionProvider.handleNeighborhoodFlow1();
    }
  }
}

export default MessageParser;