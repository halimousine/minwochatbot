import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import HelpOptions from "./components/HelpOptions/HelpOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "Rialto Chat",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#F3A712",
    },
    chatButton: {
      backgroundColor: "#F3A712",
    },
  },
  initialMessages: [
    createChatBotMessage("Welcome to Rialto! What can we help you with today?", {
      widget: "helpOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "helpOptions",
      //props: actionProvider, setState, scrollIntoView, props, state
      widgetFunc: (props) => <HelpOptions {...props} />,
    },
    {
      widgetName: "WebsiteLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {text: "Home", url: "https://www.minwo.co/", id: 1,},
          {text: "About", url: "https://www.minwo.co/about",id: 2,},
          {text: "Work",url: "https://www.minwo.co/work",id: 3,},
          {text: "Connect",url: "https://www.minwo.co/connect",id: 4,},
        ],
      },
    },
  ],
};

export default config;
