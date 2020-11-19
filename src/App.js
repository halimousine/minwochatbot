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
            <div class = "message-container">
            </div>
            <div class = "input-container"> 
              <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
