class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Wassup")
    this.updateChatbotState(greetingMessage)
  }

  handleWebsiteList = () => {
    const message = this.createChatBotMessage("Great! Here's links to the MINWO website and what we have to offer you.",
      {
        widget: "WebsiteLinks",
      }
    );
    this.updateChatbotState(message);
  };

  help = () => {
    const message = this.createChatBotMessage("Welcome to Rialto! What can we help you with today?", {
      widget: "helpOptions",
      }
    );
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    this.setState(prevState => ({
      //... inserts a list into another list. 
      ...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;