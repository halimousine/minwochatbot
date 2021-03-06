import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import {NeighborhoodFlow1, NeighborhoodFlow2, NeighborhoodFlow3, NeighborhoodFlow4} 
from "./components/ExploreNeighborhoods/NeighborhoodFlow";

import {WWExperts1, WWExperts2, WWExperts3, WWExperts4} 
from "./components/WorkWithExperts/WorkWithExperts";

import {Resources1, Resources2} 
from "./components/DiscoverResources/Resources";

import {Services1, Services2} 
from "./components/BrowseServices/Services";

import {Members1, Members2} 
from "./components/MeetOtherMembers/Members";

import {Events1, Events2} 
from "./components/FindEvents/Events";

import {HelpOptions, HelpEnd, Feedback} from "./components/HelpOptions/HelpOptions";

//import {BotImg} from "../public/bot-avatar.png";

import './config.css';

const config = {
  botName: "Rialto Chat",
  customStyles: {
    botMessageBox: {backgroundColor: "#F2F2F2"},
    chatButton: {backgroundColor: "#3B7A71",},
  },
  customComponents: {
    // Replaces the default header
   header: () => <div style={{
     backgroundColor: "#461C3F",
     color: "#FFFFFF", 
     height: "40px", 
     fontStyle: "normal", 
     fontSize: "20px", 
     padding: "10px"
    }}>
    Rialto Chat
    </div>
  },
  initialMessages: [
    createChatBotMessage("Welcome to Rialto. My name is Melanie! What can I help you with today?", {
      widget: "helpOptions",
    }),
  ],
  widgets: [
    //props: actionProvider, setState, scrollIntoView, props, state
    {widgetName: "helpOptions",widgetFunc: (props) => <HelpOptions {...props} />,},
    {widgetName: "HelpEnd",widgetFunc: (props) => <HelpEnd {...props} />,},
    {widgetName: "NeighborhoodFlow1",widgetFunc: (props) => <NeighborhoodFlow1 {...props} />,},
    {widgetName: "NeighborhoodFlow2",widgetFunc: (props) => <NeighborhoodFlow2 {...props} />,},
    {widgetName: "NeighborhoodFlow3",widgetFunc: (props) => <NeighborhoodFlow3 {...props} />,},
    {widgetName: "NeighborhoodFlow4",widgetFunc: (props) => <NeighborhoodFlow4 {...props} />,},
    {widgetName: "WWExperts1",widgetFunc: (props) => <WWExperts1 {...props} />,},
    {widgetName: "WWExperts2",widgetFunc: (props) => <WWExperts2 {...props} />,},
    {widgetName: "WWExperts3",widgetFunc: (props) => <WWExperts3 {...props} />,},
    {widgetName: "WWExperts4",widgetFunc: (props) => <WWExperts4 {...props} />,},
    {widgetName: "Feedback",widgetFunc: (props) => <Feedback {...props} />,},
    {widgetName: "Resources1",widgetFunc: (props) => <Resources1 {...props} />,},
    {widgetName: "Resources2",widgetFunc: (props) => <Resources2 {...props} />,},
    {widgetName: "Resources2",widgetFunc: (props) => <Resources2 {...props} />,},
    {widgetName: "Services1",widgetFunc: (props) => <Services1 {...props} />,},
    {widgetName: "Services2",widgetFunc: (props) => <Services2 {...props} />,},
    {widgetName: "Members1",widgetFunc: (props) => <Members1 {...props} />,},
    {widgetName: "Members2",widgetFunc: (props) => <Members2 {...props} />,},
    {widgetName: "Events1",widgetFunc: (props) => <Events1 {...props} />,},
    {widgetName: "Events2",widgetFunc: (props) => <Events2 {...props} />,},
  ],
};

export default config;