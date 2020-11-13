import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import HelpOptions from "./components/HelpOptions/HelpOptions";

const config = {
  botName: "Rialto Chat",
  initialMessages: [
    createChatBotMessage("Welcome to Rialto! What can we help you with today?", {
      widget: "helpOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#F3A712",
    },
    chatButton: {
      backgroundColor: "#F3A712",
    },
  },
  widgets: [
    {
      widgetName: "helpOptions",
      widgetFunc: (props) => <HelpOptions {...props} />,
    },
  ],
};

export default config;
