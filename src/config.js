import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Rialto Chat",
  initialMessages: [createChatBotMessage(`Welcome to Rialto! What can we help you with today?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#F3A712",
    },
    chatButton: {
      backgroundColor: "#F3A712",
    },
  },
}

export default config