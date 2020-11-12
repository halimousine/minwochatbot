class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message)
    const lowerCaseMessage = message.toLowerCase()
    if (lowerCaseMessage.includes("hello mfker")) {
      this.actionProvider.greet()
    }
  }
}

export default MessageParser;