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
  }
}

export default MessageParser;