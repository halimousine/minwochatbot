import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import HelpOptions from "./components/HelpOptions/HelpOptions";
import LinkList from "./components/LinkList/LinkList";

import './config.css';

const config = {
  botName: "Rialto Chat",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#F2F2F2",
    },
    chatButton: {
      backgroundColor: "#3B7A71",
    },
  },
  customComponents: {
    // Replaces the default header
   header: () => <div style={{backgroundColor: "#461C3F" ,color: "#FFFFFF", height: "40px", fontFamily: "Source Sans Pro", fontStyle: "normal", fontSize: "20px", padding: "10px"}}>Rialto Chat</div>
  },
  initialMessages: [
    createChatBotMessage("Welcome to Rialto. My name is Melanie! What can I help you with today?", {
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
