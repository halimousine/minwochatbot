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

    if (lowerCaseMessage.includes("events")) {
      this.actionProvider.handleEvents1();
    }

    if (lowerCaseMessage.includes("services")) {
      this.actionProvider.handlesServices1();
    }

    if (lowerCaseMessage.includes("members")) {
      this.actionProvider.handleMembers1();
    }

    if (lowerCaseMessage.includes("resources")) {
      this.actionProvider.handleResources1();
    }

  }
}

export default MessageParser;