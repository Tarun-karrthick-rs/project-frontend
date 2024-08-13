import React, { useState, useEffect, useRef } from 'react';
import '../CSS/ChatBot.css';
import Navbar from './navbar';


export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const chatInputRef = useRef(null);
  const chatboxRef = useRef(null);
  const [isShow, setIsShow] = useState(false);
 
  const API_KEY = "DUMMY";
  // const API_KEY = "AIzaSyCFdmkRpx2699Dsj92q5Yxj2fUPAOrh9-s";

  const generateResponse = async (incomingChatLi) => {
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          role: "user",
          parts: [{ text: userMessage }] 
        }]
      }),
    };

    try {
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      messageElement.textContent = data.candidates[0].content.parts[0].text;
    } catch (error) {
      messageElement.classList.add("error");
      messageElement.textContent = "Something went wrong. Try again later...";
    } finally {
      chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
    }
  };

  const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    const chatContent = className === "outgoing"
      ? `<p></p>`
      : `<span><i class='bx bx-bot'></i></span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
  };

  const handleChat = () => {
    const message = userMessage.trim();
    if (!message) return;
    setUserMessage('');
    const outgoingLi = createChatLi(message, "outgoing");
    chatboxRef.current.appendChild(outgoingLi);
    chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);

    setTimeout(() => {
      const incomingChatLi = createChatLi("Thinking...", "incoming");
      chatboxRef.current.appendChild(incomingChatLi);
      chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
      generateResponse(incomingChatLi);
    }, 600);
  };

  const toggleChatbot = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    if (isShow) {
      document.querySelector('.chatbot').style.width = '100%';
      document.querySelector('.chatbot').style.height = '100%';
    } else {
      document.querySelector('.chatbot').style.width = '0%';
      document.querySelector('.chatbot').style.height = '0%';
    }
  }, [isShow]);

  return (
    <div>
      <Navbar />
    
    <div className="parent">
      <button className="chatbot-toggler" onClick={toggleChatbot}>
        <span><i className='bx bx-message-dots'></i></span>
      </button>

      <div className="title">
        <br></br><h1>ChatBOT for your Assistance</h1>
        <img src="images\chatbot.png" alt="Chatbot" style={{width:'100%',height:'100%'}} />
      </div>

      <div className="chatbot">
        <header>
          <h2>ChatBOT</h2>
          <span><i className='bx bx-window-close'></i></span>
        </header>

        <ul className="chatbox" ref={chatboxRef}>
          {messages.map((message, index) => (
            <li key={index} className={`chat ${message.type}`}>
              {message.type === 'incoming' && <span><i className='bx bx-bot'></i></span>}
              <p>{message.text}</p>
            </li>
          ))}
        </ul>

        <div className="chat-input">
          <textarea
            placeholder="Enter the message..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleChat();
              }
            }}
            ref={chatInputRef}
            required
          />
          <span id="send-btn" onClick={handleChat}><i className='bx bx-send'></i></span>
        </div>
      </div>
    </div>
    </div>
  );
}
