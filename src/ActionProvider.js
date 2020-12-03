class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  /** CONVERSATION */
  greet() {
    const greetingMessage = this.createChatBotMessage("Wassup")
    this.updateChatbotState(greetingMessage)
  }

  help = () => {
    const message = this.createChatBotMessage("What can we help you with today?", {
      widget: "helpOptions",
      }
    );
    this.updateChatbotState(message);
  };

  /** BUTTON INTERACTION */
  handleWebsiteList = () => {
    const message = this.createChatBotMessage("Great! Here's links to the MINWO website and what we have to offer you.",
      {
        widget: "WebsiteLinks",
      }
    );
    this.updateChatbotState(message);
  };
  
  handleNeighborhoodFlow1 = () => {
    const intro = this.createChatBotMessage("Let's figure out what neighborhoods you may be interested in!",
    );
    this.updateChatbotState(intro);
    const q1 = this.createChatBotMessage("How many people are in your team/business?", 
      {widget: "NeighborhoodFlow1",
      }
    );
    // if one of the q1 buttons is clicked, that data is logged and q2 is asked. 
    this.updateChatbotState(q1);
  };

  handleNeighborhoodFlow2 = () => {
    const q2 = this.createChatBotMessage("Are you revenue generating?", 
      {widget: "NeighborhoodFlow2",
      }
    );
    this.updateChatbotState(q2);
  }

  handleNeighborhoodFlow3 = () => {
    const q3 = this.createChatBotMessage("How much funding are you seeking?", 
      {widget: "NeighborhoodFlow3",
      }
    );
    this.updateChatbotState(q3);
  }

  handleNeighborhoodFlow4 = () => {
    const q4 = this.createChatBotMessage("What industry is your business categorized in, if any?", 
      {widget: "NeighborhoodFlow4",
      }
    );
    this.updateChatbotState(q4);
  }

  handleNeighborhoodFlow5 = () => {
    const q5 = this.createChatBotMessage("Do you need help with anything else?", 
      {widget: "NeighborhoodFlow5",
      }
    );
    this.updateChatbotState(q5);
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
      //... inserts a list into another list. 
      ...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;