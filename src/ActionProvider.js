class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Wusgoodie")
    this.updateChatbotState(greetingMessage)
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
      //... inserts a list into another list. 
      ...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;