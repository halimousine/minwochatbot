import React, {useState} from 'react';
import './App.css';

import Chatbot from 'react-chatbot-kit'

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import {loadMessages, saveMessages} from './SaveTranscripts';


function App() {
  const [showBot, toggleBot] = useState(false);
  

  return (
    <div className="App">
      <header className="App-header">
        
          <Chatbot
            config={config}
            //Timestamp date={Date} options={{ includeDay: true, twentyFourHour: true }} 
            actionProvider={ActionProvider}
            messageHistory={loadMessages()}
            messageParser={MessageParser}
            saveMessages={saveMessages}
          />
        
      </header>
    </div>
  );
}

export default App;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </header>
    </div>
  );
}

export default App;*/
