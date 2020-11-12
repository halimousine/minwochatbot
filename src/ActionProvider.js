class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Wassup mfka")
    this.updateChatbotState(greetingMessage)
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
      //... puts a list in anohter list
      ...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;