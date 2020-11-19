import React from 'react';
import './App.css';

import Chatbot from 'react-chatbot-kit'

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="chat-container">
          <div class = "chat-inner-container">
            <div class = "chat-header"></div>
            <div class = "message-container">

              <div class = "bot-message-container">
                <div class = "bot-avatar" >
                  <div class = "bot-avatar-container">
                    <p class = "bot-avatar-letter">S</p>
                  </div>
                </div>

                <div class = "bot-message">
                  <div class = "bot-message-arrow">
                  </div>
                </div>
              <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
              </div>

            </div>

            <div class = "input-container">
              <form class = "input-form">
                <input class = "chat-input" placeholder = "Write Message Here" value>
          
                </input>
                <button class = "bot-chat-btn" style = "background-color: rgb(243, 167, 18)">
          
                </button>
              </form> 
              <div class = "bot-arrow">
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
