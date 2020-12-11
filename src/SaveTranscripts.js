//import React, {useState} from 'react';
import './App.css';

i//mport Chatbot from 'react-chatbot-kit'

//import ActionProvider from './ActionProvider';
//import MessageParser from './MessageParser';
//import config from './config';

const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
};

//const saveClick
//extract words from button to save as message

var search_clicked = false;

function setAction(action) {
  if (action == 'search') {
    search_clicked = true;
    console.log("Search was clicked");
  }
  if (action == 'save') {
    if (search_clicked == true) {
      // This will only trigger when search has already been clicked
      console.log("Both buttons were clicked");
    }
    else {
      console.log("You need to click search first");
    }
  }
}

export {
    saveMessages,
    loadMessages,
    search_clicked
}