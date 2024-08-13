import React, { useState } from 'react';
import Navbar from './navbar';

function SportsChatBox() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div>
      <Navbar />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '400px',
          background: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            height: '300px',
            padding: '10px',
            overflowY: 'scroll',
            borderBottom: '1px solid #ddd',
            backgroundColor: '#fafafa',
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                padding: '5px 10px',
                margin: '5px 0',
                backgroundColor: index % 2 === 0 ? 'black' : 'gold', 
                color: index % 2 === 0 ? 'gold' : 'black',
                borderRadius: '5px',
                maxWidth: '80%',
                alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end',
              }}
            >
              {message}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            style={{
              flex: 1,
              padding: '10px',
              backgroundColor: 'black',
              color: 'gold',
              border: '1px solid #ccc',
              borderRadius: '4px',
              outline: 'none',
              fontSize: '16px',
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              marginLeft: '10px',
              padding: '10px 20px',
              backgroundColor: 'black',
              color: 'gold',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              borderRadius: '4px',
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SportsChatBox;
